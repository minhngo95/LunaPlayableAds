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
    }

    private void OnDisable()
    {
        EventManager.RemoveListener<int>(EventName.OnShowEndCard, OnCheckShowEndCard);
    }

    private void OnCheckShowEndCard(int TurnToShowEndCard)
    {
        if (TurnToShowEndCard == gameResultData.TurnEnd && !_isShowCard)
        {
            _isShowCard = true;
            LunaShowEndCard.Instance.EndGameUI();
        }
    }
}
