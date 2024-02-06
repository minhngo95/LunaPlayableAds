using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance;
    public TMP_Text StepText;
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
