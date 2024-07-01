using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GamePlayManager : MonoBehaviour
{
    [SerializeField] public ConfigBotInGame configBotInGame;
    [SerializeField] public GameResultData gameResultData;
    [SerializeField] public List<Spawn> spawns;
    public static GamePlayManager Instance;
    public int Turn;

    private void Awake()
    {
        Instance = this;
        
    }

    private void Start()
    {
        BotManager.Instance.TotalBotOnTurn = OnCheckTotalBotOnMap();
        UIManager.Instance.UpdateInitBot(BotManager.Instance.TotalBotOnTurn);
        SetData();
        GameStart();
    }

    private void Update()
    {
        if (CheckTurnDone())
        {
            Turn++;
            gameResultData.TurnCount++;
            EventManager.Invoke(EventName.OnShowEndCard, gameResultData.TurnCount);
            gameResultData.BotKillCount = 0;
            BotManager.Instance.TotalBotOnTurn = OnCheckTotalBotOnMap();
            UIManager.Instance.UpdateInitBot(BotManager.Instance.TotalBotOnTurn);
            PathManager.Instance.ResetPath();
            StartCoroutine(TurnDelay());
        }
    }

    private void OnDisable()
    {
        OnResetResultData();
    }

    void OnResetResultData()
    {
        gameResultData.TurnCount = 0;
    }

    private IEnumerator TurnDelay()
    {
        yield return new WaitForSeconds(1);
        SetData();
        GameStart();
    }

    public bool CheckTurnDone()// Hàm này dùng để check xem Bot của Turn đó đã hết chưa
    {
        return BotManager.Instance.TotalBotOnTurn == gameResultData.BotKillCount;
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
        Debug.Log($"Total bots on Turn {Turn}: {botCount}");
        return botCount;
    }

    public void LunaClick()
    {
        Debug.LogError("Luna Clicked");
        Luna.Unity.Playable.InstallFullGame();
    }
}
