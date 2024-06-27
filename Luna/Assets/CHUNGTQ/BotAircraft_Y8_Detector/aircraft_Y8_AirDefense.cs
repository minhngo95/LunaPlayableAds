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
    [SerializeField] private GameObject Exlosion;
    private int countFan;
    private bool isDead;
    [Header("Setup point ")]
    [SerializeField] private float dropSpeed;
    [SerializeField] private float rotateSpeed;
    [SerializeField] private LayerMask groundMask;
    [SerializeField] private Transform headAirPlane;

    private float currentAngle;
    private Vector3 landPos;
    private Vibration _playerVibration;
    [Header("Sound ")]
    [SerializeField] private AudioSource sound;

    void OnEnable()
    {
        currentAngle = 0;
        countFan = 0;
        isDead = false;
        fanL1.botNetwork.OnBotDead += OnFanDetectorDead;
        fanL2.botNetwork.OnBotDead += OnFanDetectorDead;
        fanR1.botNetwork.OnBotDead += OnFanDetectorDead;
        fanR2.botNetwork.OnBotDead += OnFanDetectorDead;
        _playerVibration = LocalPlayer.Instance.GetComponent<Vibration>();

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
        startSpawnExplosion();
        _playerVibration.StartShaking(0, 0.4f);

        Quaternion startRotation = transform.rotation;

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
            Vector3 dirNormal = (landPos - headAirPlane.position).normalized;
            landPos += dirNormal * 500; // đâm xuyên núi luôn
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
        sound.Stop();
        gameObject.SetActive(false);
    }

    void startSpawnExplosion()
    {
       Instantiate(Exlosion, transform.position,Quaternion.identity);

    }
}
