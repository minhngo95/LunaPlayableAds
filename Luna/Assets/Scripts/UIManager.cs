using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance;
    public string url;
    public GameObject InGame;

    public Text TotalBotText;
    public int initBot;
    public Image process;
    public GameObject gameProcess;
    private void Awake()
    {
        Instance = this;
        InGame.SetActive(true);
    }
    public void GoToLink()
    {
        // var operatingSystem = SystemInfo.operatingSystem;
        //
        // if (operatingSystem.ToLower().Contains("android"))
        //     Application.OpenURL("https://play.google.com/store/apps/details?id=com.horus.sky.defense");
        // if (operatingSystem.ToLower().Contains("iphone") || operatingSystem.ToLower().Contains("ipad"))
        //     Application.OpenURL("https://apps.apple.com/us/app/skydefense/id6469495100");
    }

    public void EndGameUI()
    {
        EndCardController.Instance.OpenEndCard();
       // EndGame.SetActive(true);
       InGame.SetActive(false);
        gameProcess.SetActive(false);
    }
    void Update()
    {
        TotalBotText.text = BotManager.Instance.TotalBot.ToString();
        process.fillAmount = ((float)BotManager.Instance.TotalBot / initBot);
    }
    public void UpdateInitBot(int value)
    {
        initBot = value;
    }
}