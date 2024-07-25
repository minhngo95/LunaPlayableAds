using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using static GameConstants;

public class Spawn : MonoBehaviour
{
    private List<BotConfig> _botConfigs = new List<BotConfig>();
    private RewardConfig _rewardConfig;
    [SerializeField] public BotType botType;
    [SerializeField] public RewardType rewardType;


    #region SPAWN BOT

    public void InitDataBot(BotConfig[] botConfigs)
    {
        _botConfigs.Clear();
        foreach (var config in botConfigs)
        {
            if (config.botType == botType && !config.isNotUse)
            {
                _botConfigs.Add(config);
            }
        }
    }

    public void SpawnBot()
    {
        foreach (var config in _botConfigs)
        {
            StartCoroutine(OnSpawnBot(config));
        }
    }

    private IEnumerator OnSpawnBot(BotConfig config)
    {
        yield return new WaitForSeconds(config.WaitToSpawn);
        for (var i = 0; i < config.botQuantity; i++)
        {
            WayPoint path = PathManager.Instance.GetWayPoint(botType);
            var spawnPosition = path.WayPoints[0].position;
            BotManager.Instance.SpawnBot(config.botPrefab, spawnPosition, path);
            yield return new WaitForSeconds(config.botDelaySpawn);
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
            yield return new WaitForSeconds(_rewardConfig.WaitToSpawn);
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
