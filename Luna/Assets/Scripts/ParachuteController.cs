using UnityEngine;

public class ParachuteController : MonoBehaviour
{
    [SerializeField] private float gravity = 9.8f;
    [SerializeField] private float dragForce = 1f;
    [SerializeField] private float objectMass = 1f;
    [SerializeField] private BotController _botController;
    [SerializeField] private LayerMask groundLayer;
    [SerializeField] private Transform ParachuteScale;
    private readonly float groundCheckDistance = Mathf.Infinity;
    [SerializeField] private float scaleAmount;
    [SerializeField] private Vector3 velocity;
    [SerializeField] private float _distanceOpenParachute=10f;
    [SerializeField] private float _distanceCloseParachute=2f;
    private float t;
    private bool IsGrounded { get; set; }

    private void Start()
    {
        velocity = Vector3.zero;
        transform.position = (_botController as BotParachute).GetPos(0);
        // _dropPos = (_botController as BotParachute).GetPos(1);
    }

    private void Update()
    {
        if (!IsGrounded)
        {
            var distanceToGround = CheckGround();
            ApplyForces(distanceToGround);
            transform.Translate(velocity * Time.deltaTime);
            ParachuteAction(distanceToGround);
        }

    }

    private void ApplyForces(float distanceToGround)
    {
        var dragMultiplier = 1f - Mathf.Clamp01(distanceToGround / groundCheckDistance);
        var dragForceVector = -velocity.normalized * (dragForce * dragMultiplier);

        var totalForce = Vector3.down * gravity + dragForceVector;

        var acceleration = totalForce / objectMass;

        velocity += acceleration * Time.deltaTime;
    }

    private float CheckGround()
    {
        RaycastHit hit;
        if (Physics.Raycast(transform.position, Vector3.down, out hit, groundCheckDistance, groundLayer))
        {
            if (hit.distance < 0.5f)
            {
                IsGrounded = true;
                velocity = Vector3.zero;
                transform.position = hit.point;
            }

            return hit.distance;
        }

        return groundCheckDistance;
    }
    private void ParachuteAction(float distanceToGround)
    {
        if (IsGrounded) (_botController as BotParachute).parachuteDone = true;
        t +=Time.deltaTime;
        if (t > 1.0f) t = 0.0f;
        if (distanceToGround<=_distanceOpenParachute && distanceToGround >=_distanceCloseParachute)
        {
            scaleAmount = Mathf.Lerp(scaleAmount, 1, t);
            ParachuteScale.localScale = new Vector3(scaleAmount, scaleAmount, 1);
        }

        if (distanceToGround < _distanceCloseParachute)
        {
            scaleAmount = Mathf.Lerp(scaleAmount, 0, t);
            ParachuteScale.localScale = new Vector3(scaleAmount, scaleAmount, 1);
        }
    }
}