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
    public bool IsShowLunaEndGame;

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
            EventManager.Invoke(EventName.OnCheckTurnPlay, gameResultData.TurnCount);
            gameResultData.BotKillCount = 0;
            BotManager.Instance.TotalBotOnTurn = OnCheckTotalBotOnMap();
            UIManager.Instance.UpdateInitBot(BotManager.Instance.TotalBotOnTurn);
            PathManager.Instance.ResetPath();
            StartCoroutine(ClearPreviousBots());  // Thêm dòng này để loại bỏ các bot của lượt trước
            StartCoroutine(TurnDelay());
        }
    }
    private void OnEnable()
    {
        EventManager.AddListener<bool>(EventName.OnShowLunaEndGame, OnShowLunaEndGame);
    }
    private void OnDisable()
    {
        EventManager.AddListener<bool>(EventName.OnShowLunaEndGame, OnShowLunaEndGame);
        OnResetResultData();
    }

    private void OnShowLunaEndGame(bool IsShow)
    {
        IsShowLunaEndGame = IsShow;
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

    public bool CheckTurnDone()
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
            if (ShouldSpawnBot(spawn))
            {
                spawn.Run();
            }
        }
    }

    private bool ShouldSpawnBot(Spawn spawn)
    {
        foreach (var config in configBotInGame.fightRound[Turn].botConfigs)
        {
            if (spawn.IsBotType(config.botType) && !config.isNotUse)
            {
                return true;
            }
        }
        return false;
    }

    private int OnCheckTotalBotOnMap()
    {
        if (!IsShowLunaEndGame)
        {
            int botCount = 0;
            for (int i = 0; i < configBotInGame.fightRound[Turn].botConfigs.Length; i++)
            {
                botCount += configBotInGame.fightRound[Turn].botConfigs[i].botQuantity;
            }
            Debug.Log($"Total bots on Turn {Turn}: {botCount}");
            return botCount;
        }
        else
        {
            return 0;
        } 
            

    }

    private IEnumerator ClearPreviousBots()
    {
        yield return new WaitForSeconds(0.5f);
        BotManager.Instance.ClearAllBots();
    }

    public void LunaClick()
    {
        Debug.LogError("Luna Clicked");
        Luna.Unity.Playable.InstallFullGame();
    }
}
