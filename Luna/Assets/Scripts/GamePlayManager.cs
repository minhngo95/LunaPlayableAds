using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GamePlayManager : MonoBehaviour
{
    [SerializeField] private SpawnBot _spawnBotNormal;
    [SerializeField] private SpawnBot _spawnBotParachute;
    public static GamePlayManager Instance;
    public int Turn { get; set; }
    private void Awake()
    {
        Instance = this;
    }

    // private void OnEnable()
    // {
    //    SetData();
    //    GameStart();
    // }
    
    private void Update()
    {
        if (CheckTurnDone())
        {
            BotManager.Instance.TotalBot = ConfigManager.Instance.GetStepData(Turn).GetTotalBot();
            UIManager.Instance.UpdateInitBot(ConfigManager.Instance.GetStepData(Turn).GetTotalBot());
            PathManager.Instance.ResetPath();
            StartCoroutine(TurnDelay());
        }
    }

    private IEnumerator TurnDelay()
    {
        // UIManager.Instance.UpdateStepText(Turn);
        // UIManager.Instance.SetEnableStepText(true);
        // UIManager.Instance.SetEnableStepText(false);
        yield return new WaitForSeconds(1);
        SetData();
        GameStart();
        Turn++;


    }

    public bool CheckTurnDone()
    {
        return BotManager.Instance.TotalBot <= 0 && Turn < ConfigManager.Instance.GetStepCount();
    }

    public void SetData()
    {
        _spawnBotParachute.InitData(ConfigManager.Instance.GetStepData(Turn).NumberParachute);
        _spawnBotNormal.InitData(ConfigManager.Instance.GetStepData(Turn).NumberBot);
    }

    public void GameStart()
    {
        _spawnBotParachute.Run();
        _spawnBotNormal.Run();
    }

    public void LunaClick()
    {
        Debug.LogError("Luna Clicked");
        Luna.Unity.Playable.InstallFullGame();
    }
}