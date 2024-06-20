using System;
using System.Collections;
using UnityEngine;

public class Spawn : MonoBehaviour
{
    private BotConfig _botConfig;
    [SerializeField] private BotType botType;  // Thêm biến botType
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
            WayPoint path = ChosePath();
            var spawnPosition = path.WayPoints[0].position;
            BotManager.Instance.SpawnBot(_botConfig.botPrefab, spawnPosition, path);
            yield return new WaitForSeconds(_botConfig.botDelaySpawn);
        }
    }

    private WayPoint ChosePath()
    {
        switch (_botConfig.botType)
        {
            case BotType.Infantry:
                return PathManager.Instance.ChoseWayPointNormal();
            case BotType.Parachutist:
                return PathManager.Instance.ChooseWayPointParachute();
            case BotType.AirForce:
                return PathManager.Instance.ChooseWayAirCraft();
            default:
                throw new ArgumentOutOfRangeException();
        }
    }
}
