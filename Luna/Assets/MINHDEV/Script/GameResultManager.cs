using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameResultManager : MonoBehaviour
{
    [SerializeField] public GameResultData gameResultData;
    [SerializeField] public bool _isShowCard;

    private void OnEnable()
    {
        EventManager.AddListener<int>(EventName.OnCheckTurnPlay, OnCheckShowEndCard);
        EventManager.AddListener<int>(EventName.OnCountBotLanding, OnCheckBotLanding);
    }

    private void OnDisable()
    {
        OnResetValue();
        EventManager.RemoveListener<int>(EventName.OnCheckTurnPlay, OnCheckShowEndCard);
        EventManager.RemoveListener<int>(EventName.OnCountBotLanding, OnCheckBotLanding);
    }

    private void OnShowEndCard()
    {
        _isShowCard = true;
        EventManager.Invoke(EventName.OnShowLunaEndGame, _isShowCard);
       //LunaShowEndCard.Instance.EndGameUI();
        UIEndGame.Instance.ShowUIEndGame();
    }    

    private void OnCheckShowEndCard(int TurnToShowEndCard)
    {
        if (TurnToShowEndCard == gameResultData.TurnEnd && !_isShowCard && gameResultData.IsCountTurn && BotManager.Instance.TotalBotOnTurn == gameResultData.BotKillCount)
        {
            OnShowEndCard();
        }
    }

    private void OnCheckBotLanding(int BotCount)
    {
        gameResultData.BotLandingCount = BotCount;
        if (gameResultData.BotLandingCount == gameResultData.BotLandingCountConfig && !_isShowCard && gameResultData.IsCountLandingBot)
        {
            OnShowEndCard();
        }
    }
    void OnResetValue()
    {
        gameResultData.BotLandingCount = 0;
    }
}
