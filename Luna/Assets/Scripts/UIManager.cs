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
    [FormerlySerializedAs("initBot")] public int TotalBotinConfig;
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
        TotalBotText.text = $"{BotManager.Instance.TotalBotOnMap} / {TotalBotinConfig}";
        process.fillAmount = ((float)BotManager.Instance.TotalBotOnMap / TotalBotinConfig);
    }
    public void UpdateInitBot(int value)
    {
        TotalBotinConfig = value;
    }
}