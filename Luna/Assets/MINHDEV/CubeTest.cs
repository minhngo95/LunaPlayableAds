using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class CubeTest : MonoBehaviour
{
    // Tốc độ di chuyển của đối tượng
    public float moveSpeed = 5f;
    public Transform Obj;
    public Button[] ButtonList;

    private Vector3 movement = Vector3.zero;
    private bool moveUp = false;
    private bool moveDown = false;
    private bool moveLeft = false;
    private bool moveRight = false;

    private void OnEnable()
    {
        if (ButtonList[0] != null)
        {
            ButtonList[0].gameObject.AddComponent<ButtonEventHandler>().Setup(MoveUp, StopMoveUp);
        }
        if (ButtonList[1] != null)
        {
            ButtonList[1].gameObject.AddComponent<ButtonEventHandler>().Setup(MoveDown, StopMoveDown);
        }
        if (ButtonList[2] != null)
        {
            ButtonList[2].gameObject.AddComponent<ButtonEventHandler>().Setup(MoveLeft, StopMoveLeft);
        }
        if (ButtonList[3] != null)
        {
            ButtonList[3].gameObject.AddComponent<ButtonEventHandler>().Setup(MoveRight, StopMoveRight);
        }
    }

    private void MoveUp()
    {
        moveUp = true;
    }

    private void StopMoveUp()
    {
        moveUp = false;
    }

    private void MoveDown()
    {
        moveDown = true;
    }

    private void StopMoveDown()
    {
        moveDown = false;
    }

    private void MoveLeft()
    {
        moveLeft = true;
    }

    private void StopMoveLeft()
    {
        moveLeft = false;
    }

    private void MoveRight()
    {
        moveRight = true;
    }

    private void StopMoveRight()
    {
        moveRight = false;
    }

    void Update()
    {
        // Reset movement vector
        movement = Vector3.zero;

        // Kiểm tra các phím nhấn và thiết lập hướng di chuyển
        if (Input.GetKey(KeyCode.W) || moveUp)
        {
            movement += Vector3.forward;
        }
        if (Input.GetKey(KeyCode.S) || moveDown)
        {
            movement += Vector3.back;
        }
        if (Input.GetKey(KeyCode.A) || moveLeft)
        {
            movement += Vector3.left;
        }
        if (Input.GetKey(KeyCode.D) || moveRight)
        {
            movement += Vector3.right;
        }

        // Di chuyển đối tượng nếu có input từ bàn phím hoặc button
        if (movement != Vector3.zero)
        {
            Obj.Translate(movement * moveSpeed * Time.deltaTime, Space.World);
        }
    }
}

public class ButtonEventHandler : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{
    private System.Action onPointerDown;
    private System.Action onPointerUp;

    public void Setup(System.Action onPointerDown, System.Action onPointerUp)
    {
        this.onPointerDown = onPointerDown;
        this.onPointerUp = onPointerUp;
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        onPointerDown?.Invoke();
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        onPointerUp?.Invoke();
    }
}
