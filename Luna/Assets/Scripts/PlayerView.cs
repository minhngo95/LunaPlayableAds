using UnityEngine;
using UnityEngine.EventSystems;

public class PlayerView : MonoBehaviour
{
    [Header("Basic control")]
    [SerializeField] private Transform _mainRoot;
    [SerializeField] private Transform _head;
    [SerializeField] private float _sensitivity = 15f;
    [SerializeField] private float _slerpFactor = 12.5f;
    [SerializeField] private Vector2 _viewHorizontalThreshold = new Vector2(-60f, 60f);
    [SerializeField] private Vector2 _viewVerticalThreshold = new Vector2(-89f, 89f);
    [SerializeField] private Vector2 _initRotate;
    [SerializeField] private Vector2 _totalRotate;
    [SerializeField] private bool WeaponView = false; // Biến Bool để chọn logic
    [SerializeField] private Transform WeaponTrans; // Biến Transform cho vũ khí
    [SerializeField] private RectTransform CrossHair; // Biến RectTransform cho CrossHair
    [SerializeField] private Vector2 _crossHairMovementLimit = new Vector2(100f, 100f); // Giới hạn phạm vi di chuyển của CrossHair
    [SerializeField] private Vector2 _weaponMovementLimit = new Vector2(30f, 30f); // Giới hạn phạm vi di chuyển của súng
    [SerializeField] private float screenPosValue;

    private Vector2 _previousRotate;

    private void Awake()
    {
        SetDefaultView();
    }

    public void SetDefaultView()
    {
        _totalRotate = _initRotate;
        _previousRotate = _totalRotate;
        _mainRoot.localRotation = Quaternion.Euler(0, _previousRotate.x, 0);
        _head.localRotation = Quaternion.Euler(-_previousRotate.y, 0, 0);
    }

    public void Update()
    {
        if (Input.GetMouseButton(0))
        {
            var input = new Vector2 { x = Input.GetAxis("Mouse X"), y = Input.GetAxis("Mouse Y") };
            if (Mathf.Abs(input.x) > 1000)
                input.x = 0;
            if (Mathf.Abs(input.y) > 1000)
                input.y = 0;

            var totalRotate = _totalRotate;
            var rotate = input * (_sensitivity * Time.timeScale);
            var slerpParam = _slerpFactor * Time.deltaTime;
            totalRotate += rotate;
            totalRotate.x = Mathf.Clamp(totalRotate.x, _viewHorizontalThreshold.x, _viewHorizontalThreshold.y);
            totalRotate.y = Mathf.Clamp(totalRotate.y, _viewVerticalThreshold.x, _viewVerticalThreshold.y);

            if (WeaponView && WeaponTrans != null)
            {
                // Giới hạn phạm vi di chuyển của súng
                totalRotate.x = Mathf.Clamp(totalRotate.x, -_weaponMovementLimit.x, _weaponMovementLimit.x);
                totalRotate.y = Mathf.Clamp(totalRotate.y, -_weaponMovementLimit.y, _weaponMovementLimit.y);

                // Xoay WeaponTrans theo di chuyển của chuột
                WeaponTrans.localRotation = Quaternion.Slerp(WeaponTrans.localRotation,
                    Quaternion.Euler(-totalRotate.y, totalRotate.x, 0), slerpParam);
            }
            else
            {
                // Xoay _mainRoot và _head
                _mainRoot.localRotation = Quaternion.Slerp(_mainRoot.localRotation,
                    Quaternion.Euler(0, totalRotate.x, 0), slerpParam);
                _head.localRotation = Quaternion.Slerp(_head.localRotation,
                    Quaternion.Euler(-totalRotate.y, 0, 0), slerpParam);
            }

            // Cập nhật vị trí của CrossHair đồng bộ với tốc độ xoay của súng
            UpdateCrossHair(totalRotate, slerpParam);

            _totalRotate = totalRotate;
            _previousRotate = totalRotate;
        }
    }

    private void UpdateCrossHair(Vector2 totalRotate, float slerpParam)
    {
        if (CrossHair != null)
        {
            // Tính toán vị trí mới của CrossHair dựa trên góc quay của súng
            Vector2 screenPos = new Vector2(totalRotate.x / _viewHorizontalThreshold.y, totalRotate.y / _viewVerticalThreshold.y);
            screenPos *= screenPosValue; // 50f là hệ số điều chỉnh, có thể thay đổi theo nhu cầu

            // Giới hạn phạm vi di chuyển của CrossHair
            screenPos.x = Mathf.Clamp(screenPos.x, -_crossHairMovementLimit.x, _crossHairMovementLimit.x);
            screenPos.y = Mathf.Clamp(screenPos.y, -_crossHairMovementLimit.y, _crossHairMovementLimit.y);

            CrossHair.anchoredPosition = Vector2.Lerp(CrossHair.anchoredPosition, screenPos, slerpParam);
        }
    }
}
