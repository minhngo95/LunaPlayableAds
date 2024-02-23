using System.Collections;
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
    public GameObject tapToPlay;

    private void Awake()
    {
        Instance = this;
        InGame.SetActive(true);
        gameProcess.SetActive(true);
    }

    private void OnTapToPlay()
    {
        tapToPlay.gameObject.SetActive(false);
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

    IEnumerator ShowEndCard()
    {
        yield return new WaitForSeconds(1);
        EndCardController.Instance.OpenEndCard();
        Time.timeScale = 0;
        InGame.SetActive(false);
        gameProcess.SetActive(false);
    }
    public void EndGameUI()
    {
        StartCoroutine(ShowEndCard());
    }
    void Update()
    {
        if (Input.GetMouseButton(0))
        {
            tapToPlay.SetActive(false);
        }
        TotalBotText.text = $"{BotManager.Instance.TotalBot.ToString()} / {initBot}";
        process.fillAmount = ((float)BotManager.Instance.TotalBot / initBot);
    }
    public void UpdateInitBot(int value)
    {
        initBot = value;
    }
}