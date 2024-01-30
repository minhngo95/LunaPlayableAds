using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public Transform player;  // Truyền đối tượng player để lấy thông tin về góc quay của player
    public float sensitivity = 2f;  // Độ nhạy của camera
    public float minYAngle = -60f;  // Góc quay tối thiểu theo trục X
    public float maxYAngle = 60f;   // Góc quay tối đa theo trục X

    private float rotationX = 0;
    private float rotationY
        = 0;

    void Start()
    {
        Cursor.lockState = CursorLockMode.Locked;  // Ẩn con trỏ chuột và khóa con trỏ ở trung tâm màn hình
        Cursor.visible = false;
    }

    void Update()
    {
        RotateCamera();
    }

    void RotateCamera()
    {
        float mouseX = Input.GetAxis("Mouse X");
        float mouseY = Input.GetAxis("Mouse Y");
        rotationX -= mouseY * sensitivity;
        rotationX = Mathf.Clamp(rotationX, minYAngle, maxYAngle);
        rotationY += (mouseX * sensitivity);
        rotationY = Mathf.Clamp(rotationX, minYAngle, maxYAngle);

        transform.localRotation = Quaternion.Euler(rotationX, rotationY, 0);
    }
}