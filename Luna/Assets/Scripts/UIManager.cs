using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance;
    public Text StepText;
    private void Awake()
    {
        Instance = this;
    }
    public void UpdateStepText(int step)
    {
        StepText.text = "Step: " + step;
    }
    public void SetEnableStepText(bool value)
    {
        StepText.enabled=value;
    }
}
