using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameResultManager : MonoBehaviour
{
    [SerializeField] public GameResultData gameResultData;
    [SerializeField] public bool _isShowCard;

    private void OnEnable()
    {
        EventManager.AddListener<int>(EventName.OnShowEndCard, OnCheckShowEndCard);
        EventManager.AddListener<int>(EventName.OnCountBotLanding, OnCheckBotLanding);
    }

    private void OnDisable()
    {
        EventManager.RemoveListener<int>(EventName.OnShowEndCard, OnCheckShowEndCard);
        EventManager.RemoveListener<int>(EventName.OnCountBotLanding, OnCheckBotLanding);
    }

    private void OnShowEndCard()
    {
        _isShowCard = true;
        LunaShowEndCard.Instance.EndGameUI();
    }    

    private void OnCheckShowEndCard(int TurnToShowEndCard)
    {
        if (TurnToShowEndCard == gameResultData.TurnEnd && !_isShowCard && gameResultData.IsCountTurn)
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
}
