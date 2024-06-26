using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;

public class aircraft_Y8_AirDefense : MonoBehaviour
{
    public BotNetwork botNetwork;
    [SerializeField] private FanDetector fanL1;
    [SerializeField] private FanDetector fanL2;
    [SerializeField] private FanDetector fanR1;
    [SerializeField] private FanDetector fanR2;
    private int countFan;
    private bool isDead;
    [Header("Setup point ")]
    [SerializeField] private float dropSpeed;
    [SerializeField] private float rotateSpeed;
    [SerializeField] private LayerMask groundMask;
    [SerializeField] private Transform headAirPlane;
    Vector3 tailAirPlane = new Vector3(0, -1.25f, -3f);
    private float currentAngle;
    private Vector3 landPos;
    private Vibration _playerVibration;

    [Tooltip("Hướng bổ nhào xuống khi chết")]
    private readonly Vector3 _diveDirOnDead = new Vector3(0, -0.2f, 1);
    private void Awake()
    {

    }
    void OnEnable()
    {
        currentAngle = 0;
        countFan = 0;
        isDead = false;
        fanL1.botNetwork.OnBotDead += OnFanDetectorDead;
        fanL2.botNetwork.OnBotDead += OnFanDetectorDead;
        fanR1.botNetwork.OnBotDead += OnFanDetectorDead;
        fanR2.botNetwork.OnBotDead += OnFanDetectorDead;
       // _playerVibration = LocalPlayer.Instance.GetComponentInChildren<Vibration>();
    }
    void OnFanDetectorDead()
    {
        countFan++;
    }
    private void Update()
    {
        if (countFan > 3 && !isDead)
        {
            isDead = true;
            //_playerVibration.StartShaking(0, 10);
            float targetAngle = Random.Range(50f, 60f);
            StartCoroutine(StartOnDead(targetAngle));
        }
    }

    IEnumerator StartOnDead(float targetAngle)
    {
      
        Quaternion startRotation = transform.rotation; // Lưu lại vị trí ban đầu

        while (currentAngle < targetAngle)
        {
            float rotateAmount = rotateSpeed * Time.deltaTime;
            currentAngle += rotateAmount;

            transform.Rotate(Vector3.right, rotateAmount);

            yield return null;
        }

        transform.rotation = startRotation * Quaternion.Euler(targetAngle, 0f, 0f);
        RaycastHit dropPosHit;
        if (Physics.Raycast(headAirPlane.position, headAirPlane.forward, out dropPosHit, 5000, groundMask))
        {
            landPos = dropPosHit.point;


        }
        else
        {
            landPos = transform.position + new Vector3(0, 80, 100);
        }
        Debug.DrawLine(transform.position, landPos, Color.red, 15f);
        while (transform.position.y - landPos.y > 1)
        {
            transform.position = Vector3.MoveTowards(transform.position, landPos, dropSpeed * Time.deltaTime);
            yield return null;
        }
    }

    IEnumerator startShake()
    {
        _playerVibration.StartShaking(0, 2);
        yield return null;
    }
}
