using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GamePlayManager : MonoBehaviour
{
    [SerializeField] public ConfigBotInGame configBotInGame;
    [SerializeField] private List<Spawn> spawns;
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
            BotManager.Instance.TotalBotOnMap = OnCheckTotalBotOnMap();
            UIManager.Instance.UpdateInitBot(BotManager.Instance.TotalBotOnMap);
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
        return BotManager.Instance.TotalBotOnMap <= 0 && Turn < configBotInGame.fightRound.Length;
    }

    public void SetData()
    {
        foreach (var spawn in spawns)
        {
            spawn.InitData(configBotInGame.fightRound[Turn].botConfigs);
        }
    }

    public void GameStart()
    {
        foreach (var spawn in spawns)
        {
            spawn.Run();
        }
    }

    private int OnCheckTotalBotOnMap()
    {
        int botCount = 0;
        for (int i = 0; i < configBotInGame.fightRound[Turn].botConfigs.Length; i++)
        {
            botCount += configBotInGame.fightRound[Turn].botConfigs[i].botQuantity;
        }
        return botCount;
    }

    public void LunaClick()
    {
        Debug.LogError("Luna Clicked");
        Luna.Unity.Playable.InstallFullGame();
    }
}
