using UnityEngine;

public class ParachuteController : MonoBehaviour
{
    public float gravity = 9.8f;
    public float dragForce = 1f;
    public float objectMass = 1f;
    [SerializeField] private BotController _botController;
    public LayerMask groundLayer;
    public Transform ParachuteScale;
    private readonly float groundCheckDistance = 5;
    private float _timeCount;
    private float scaleAmount;
    private Vector3 velocity;
    public bool IsGrounded { get; set; }

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
            ApplyForces();
            transform.Translate(velocity * Time.deltaTime);
        }

        ParachuteAction();
    }

    private void ApplyForces()
    {
        var distanceToGround = CheckGround();
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

    private void ParachuteAction()
    {
        _timeCount += Time.deltaTime;
        if (IsGrounded)
        {
            (_botController as BotParachute).parachuteDone = true;
            ParachuteScale.transform.gameObject.SetActive(false);
        }

        if (_timeCount > 3f)
        {
            scaleAmount = Mathf.Lerp(scaleAmount, 1, 0.1f);
            ParachuteScale.localScale = new Vector3(scaleAmount, scaleAmount, 1);
        }
    }
}