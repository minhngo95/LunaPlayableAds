using UnityEngine;

public class ParachuteController : MonoBehaviour
{
   
    [SerializeField] private BotController _botController;
    [SerializeField] private LayerMask groundLayer;
    [SerializeField] private Transform ParachuteScale;
    private readonly float groundCheckDistance = Mathf.Infinity;
    [SerializeField] private float scaleAmount;
    [SerializeField] private Vector3 velocity;
    [SerializeField] private float _distanceOpenParachute=10f;
    [SerializeField] private float _distanceCloseParachute=2f;
    private float t;
    public bool IsGrounded { get; set; }
    public float Speed;
    private Vector3 posEnd;
    private void Start()
    {
        velocity = Vector3.zero;
        transform.position = (_botController as BotParachute).GetPos(0);
        posEnd =CheckGround();

    }

    private void Update()
    {
        var distanceToGround = Vector3.Distance(transform.position, posEnd);
        if ( distanceToGround> 0.5f&&!IsGrounded)
        {
            transform.position= Vector3.MoveTowards(transform.position, posEnd,Speed*Time.deltaTime);
            ParachuteAction(distanceToGround);
        }
        if (distanceToGround < 0.5f)
        {
            (_botController as BotParachute).parachuteDone = true;
            transform.position = posEnd;
            ParachuteScale.gameObject.SetActive(false);
            this.enabled = false;

        }
        if((_botController as BotParachute).currentState is BotController.DieState)
        {
            Speed = 20;
        }

    }
    public Vector3 CheckGround()
    {
        RaycastHit hit;
        if (Physics.Raycast(transform.position, Vector3.down, out hit, groundCheckDistance, groundLayer))
        {
            return hit.point;
        }
        return Vector3.zero;
    }
    private void ParachuteAction(float distanceToGround)
    {
    
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