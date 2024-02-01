using UnityEngine;
using UnityEngine.EventSystems;

public class PlayerView : MonoBehaviour
{
    [Header("Basic control")] [SerializeField]
    private Transform _mainRoot;

    [SerializeField] private Transform _head;
    [SerializeField] private float _sensitivity = 15f;
    [SerializeField] private float _slerpFactor = 12.5f;
    [SerializeField] private Vector2 _viewHorizontalThreshold = new Vector2(-60f, 60f);
    [SerializeField] private Vector2 _viewVerticalThreshold = new Vector2(-89f, 89f);
    [SerializeField] private Vector2 _initRotate;
    [SerializeField] private Vector2 _totalRotate;
    private Vector2 _previousRotate;
    protected PointerEventData PointerEventDataCache;

    private void Start()
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

    private Vector2 startPos;

    public void Update()
    {
        var input = Vector2.zero;
        if (Input.GetMouseButton(0))
        {
           // if(Input.GetMouseButton(0))  Debug.Log("Mouse");
            input = new Vector2 { x = Input.GetAxis("Mouse X"), y = Input.GetAxis("Mouse Y") };
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
            
            _mainRoot.localRotation = Quaternion.Slerp(_mainRoot.localRotation,
                Quaternion.Euler(0, totalRotate.x, 0), slerpParam);
            _head.localRotation =
                Quaternion.Slerp(_head.localRotation, Quaternion.Euler(-totalRotate.y, 0, 0), slerpParam);
            
            _totalRotate = totalRotate;
            _previousRotate = totalRotate;
        }
    }
}