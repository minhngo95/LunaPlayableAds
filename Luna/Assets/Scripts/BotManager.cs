using System;
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;

public class BotManager : MonoBehaviour
{
    private int totalBot;
    public Action OnBotdead;
    void OnEnable()
    {
        totalBot= ConfigManager.Instance.GetStepData(StepManager.Instance.Step).GetTotalBot();
    }
    public void OnBotDead()
    {
        totalBot--;
    }
}
