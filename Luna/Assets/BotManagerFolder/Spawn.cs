using System;
using System.Collections;
using UnityEngine;

public class Spawn : MonoBehaviour
{
    private BotConfig _botConfig;
    [SerializeField] private BotType botType;

    public void InitData(BotConfig[] botConfigs)
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

    public void Run()
    {
        if (_botConfig != null)
        {
            StartCoroutine(SpawnBotRoutine());
        }
    }

    private IEnumerator SpawnBotRoutine()
    {
        for (var i = 0; i < _botConfig.botQuantity; i++)
        {
            WayPoint path = PathManager.Instance.GetWayPoint(botType);
            var spawnPosition = path.WayPoints[0].position;
            BotManager.Instance.SpawnBot(_botConfig.botPrefab, spawnPosition, path);
            yield return new WaitForSeconds(_botConfig.botDelaySpawn);
        }
    }
}
