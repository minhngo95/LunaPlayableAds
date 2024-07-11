using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PowerUpEvent : MonoBehaviour
{
    public RewardNetwork rewardNetwork;
    public float rewardValue;
    public bool IsCanHide;

    private void OnEnable()
    {
        if (rewardNetwork != null)
        {
            rewardNetwork.OnRewardCollected += HandleRewardCollected;
        }
        EventManager.AddListener<bool>(EventName.OnClearReward, OnClearReward);
    }


    private void OnDisable()
    {
        if (rewardNetwork != null)
        {
            rewardNetwork.OnRewardCollected -= HandleRewardCollected;
        }
        EventManager.RemoveListener<bool>(EventName.OnClearReward, OnClearReward);
    }

    private void HandleRewardCollected()
    {
        StartCoroutine(OnClearUPReward());
    }
    private void OnClearReward(bool IsHide)
    {
        IsCanHide = IsHide;
    }    

    private IEnumerator OnClearUPReward()
    {
        yield return new WaitUntil(()=> IsCanHide);
        RewardManager.Instance.ClearAllRewards();
        EventManager.Invoke(EventName.OnUpgradeFireRate, rewardValue);
    }    
    
}