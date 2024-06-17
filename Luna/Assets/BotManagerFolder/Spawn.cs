using System;
using System.Collections;
using UnityEngine;

public class Spawn : MonoBehaviour
{
    [SerializeField] private BotNetwork _botPrefab;
    [SerializeField] private float _spawnInterval = 1f;
    [SerializeField] private int _upper = 10;
    [SerializeField] private Type type;
    public enum Type
    {
        Normal,
        Parachute
    }
    public void InitData(int value)
    {
        _upper = value;
    }
    public void Run()
    {
        StartCoroutine(SpawnBotRoutine());
    }
    private IEnumerator SpawnBotRoutine()
    {
        for (var i = 0; i < _upper; i++)
        {
            WayPoint path =ChosePath();
            var spawnPosition = path.WayPoints[0].position;
            BotManager.Instance.SpawnBot(_botPrefab,spawnPosition,path);
            yield return new WaitForSeconds(_spawnInterval);
        }
    }
    WayPoint ChosePath()
    {
        if (type == Type.Normal)
        {
            return PathManager.Instance.ChoseWayPointNormal();
        }
        else
        {
            return PathManager.Instance.ChooseWayPointParachute();
        }
    }
   
}