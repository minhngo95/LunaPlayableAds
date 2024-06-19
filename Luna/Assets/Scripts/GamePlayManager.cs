using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GamePlayManager : MonoBehaviour
{
    
    [SerializeField] private Spawn _normalSpawn;
    [SerializeField] private Spawn _parachuteSpawn;
    [SerializeField] private Spawn _AirCraft;
    public static GamePlayManager Instance;
    public int Turn { get; set; }
    private void Awake()
    {
        Instance = this;
    }
    private void Update()
    {
        if (CheckTurnDone())
        {
            BotManager.Instance.TotalBotOnMap=ConfigManager.Instance.GetStepData(Turn).GetTotalBot();
            UIManager.Instance.UpdateInitBot(ConfigManager.Instance.GetStepData(Turn).GetTotalBot());
            PathManager.Instance.ResetPath();
            StartCoroutine(TurnDelay());
        }
    }

    private IEnumerator TurnDelay()
    {
        yield return new WaitForSeconds(1);
        SetData();
        GameStart();
        Turn++;


    }
    public bool CheckTurnDone()
    {
        return BotManager.Instance.TotalBotOnMap<=0&& Turn < ConfigManager.Instance.GetStepCount();
    }

    public void SetData()
    {
;
        _normalSpawn.InitData(ConfigManager.Instance.GetStepData(Turn).NumberBot);
        _AirCraft.InitData(ConfigManager.Instance.GetStepData(Turn).NumberBot);
        _parachuteSpawn.InitData(ConfigManager.Instance.GetStepData(Turn).NumberParachute);
    }

    public void GameStart()
    {
        _normalSpawn.Run();
        _AirCraft.Run();
        _parachuteSpawn.Run();
    }

    public void LunaClick()
    {
        Debug.LogError("Luna Clicked");
        Luna.Unity.Playable.InstallFullGame();
    }
}