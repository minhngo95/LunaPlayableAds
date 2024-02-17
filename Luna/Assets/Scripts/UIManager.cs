using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance;
    public Text StepText;
    public string url;
    public GameObject InGame;
    public GameObject EndGame;

    private void Awake()
    {
        Instance = this;
        InGame.SetActive(true);
        EndGame.SetActive(false);
    }

    public void UpdateStepText(int step)
    {
        StepText.text = "Turn: " + step;
    }

    public void SetEnableStepText(bool value)
    {
        StepText.enabled = value;
    }

    public void GoToLink()
    {
        var operatingSystem = SystemInfo.operatingSystem;

        if (operatingSystem.ToLower().Contains("android"))
            Application.OpenURL("https://play.google.com/store/apps/details?id=com.horus.sky.defense");
        if (operatingSystem.ToLower().Contains("iphone") || operatingSystem.ToLower().Contains("ipad"))
            Application.OpenURL("https://apps.apple.com/us/app/skydefense/id6469495100");
    }

    public void EndGameUI()
    {
        InGame.SetActive(false);
        EndGame.SetActive(true);
    }
}