using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FanDetector : MonoBehaviour
{
    public BotNetwork botNetwork;
    [SerializeField] private GameObject model_fan;
    [SerializeField] private GameObject exlosion;
    [SerializeField] private GameObject fan_detector;
    [SerializeField] private AudioSource _sourceAudio;
    void OnEnable()
    {
        botNetwork.OnBotDead += OnDead;
    }

    void OnDead()
    {
        _sourceAudio.Play();
        model_fan.SetActive(false);
        exlosion.SetActive(true);
        fan_detector.SetActive(false);

    }
}
