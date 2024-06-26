using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FanDetector : MonoBehaviour
{
    public BotNetwork botNetwork;
    [SerializeField] private GameObject model_fan;
    [SerializeField] private GameObject exlosion;
    [SerializeField] private GameObject fan_detector;
    void OnEnable()
    {
        botNetwork.OnTakeDamage += OnTakeDame;
        botNetwork.OnBotDead += OnDead;
    }

    void OnTakeDame(int damage)
    {
        Debug.Log(damage);
    }
    void OnDead()
    {
        model_fan.SetActive(false);
        fan_detector.SetActive(false);
        exlosion.SetActive(true);
    }
}
