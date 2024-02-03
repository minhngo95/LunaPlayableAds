using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ConfigManager : MonoBehaviour
{
    [SerializeField] private StepData[] _stepDatas ;
    public static ConfigManager Instance;
    private void Awake()
    {
        Instance = this;
    }
    public StepData GetStepData(int step)
    {
        return _stepDatas[step];
    }
}
[System.Serializable]
public class StepData
{
    public int NumberBot;
    public int NumberParachute;
    public int GetTotalBot()
    {
        return NumberBot+NumberParachute;
    }
}
