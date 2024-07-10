using System.Collections;
using System.IO;
using UnityEngine;
using static GameConstants;

public class Spawn : MonoBehaviour
{
    private BotConfig _botConfig;
    private RewardConfig _rewardConfig;
    [SerializeField] public BotType botType;
    [SerializeField] public RewardType rewardType;


    #region SPAWN BOT

    public void InitDataBot(BotConfig[] botConfigs)
    {
        foreach (var config in botConfigs)
        {
            if (config.botType == botType && !config.isNotUse)
            {
                _botConfig = config;
                break;
            }
        }
    }

    public void SpawnBot()
    {
        if (_botConfig != null)
        {
            StartCoroutine(OnSpawnBot());
        }
    }

    private IEnumerator OnSpawnBot()
    {
        for (var i = 0; i < _botConfig.botQuantity; i++)
        {
            WayPoint path = PathManager.Instance.GetWayPoint(botType);
            var spawnPosition = path.WayPoints[0].position;
            BotManager.Instance.SpawnBot(_botConfig.botPrefab, spawnPosition, path);
            yield return new WaitForSeconds(_botConfig.botDelaySpawn);
        }
    }

    public bool IsBotType(BotType type)
    {
        return botType == type;
    }

    #endregion

    #region SPAWN REWARD
    public void InitDataReward(RewardConfig[] rewardConfigs)
    {
        foreach (var config in rewardConfigs)
        {
            if (config.rewardType == rewardType && !config.isNotUse)
            {
                _rewardConfig = config;
                break;
            }
        }
    }


    public void SpawnReward()
    {
        if (_rewardConfig != null)
        {
            StartCoroutine(OnSpawnReward());
        }
    }


    private IEnumerator OnSpawnReward()
    {
        for (var i = 0; i < _rewardConfig.rewardQuantity; i++)
        {
            SpawnRewardPoint point = SpawnRewardManager.Instance.GetSpawnPoint(rewardType);
            var spawnPosition = point.SpawnPoint[0].position;
            RewardManager.Instance.SpawnReward(_rewardConfig.rewardPrefab, spawnPosition, point);
            yield return new WaitForSeconds(_rewardConfig.RewardDelaySpawn);
        }
    }    

    public bool IsRewardType(RewardType type)
    {
        return rewardType == type;
    }
    #endregion


}
