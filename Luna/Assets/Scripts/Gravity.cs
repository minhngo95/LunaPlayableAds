using UnityEngine;

public class Gravity : MonoBehaviour
{
    public float gravity = 9.8f;
    public float initialVelocity;
    public float groundCheckDistance = 0.1f;
    public LayerMask groundLayer;

    private Vector3 velocity;
    public bool IsGrounded { get; set; }
    public Vector3 Velocity { get; set; }

    private void Start()
    {
        velocity.y = initialVelocity;
    }

    private void Update()
    {
        if (!IsGrounded)
        {
            velocity.y -= gravity * Time.deltaTime;
            transform.Translate(velocity * Time.deltaTime);
            CheckGround();
        }
    }

    private void CheckGround()
    {
        RaycastHit hit;
        if (Physics.Raycast(transform.position, Vector3.down, out hit, groundCheckDistance, groundLayer))
        {
            IsGrounded = true;
            velocity = Vector3.zero;
            transform.position = hit.point;
        }
    }
}