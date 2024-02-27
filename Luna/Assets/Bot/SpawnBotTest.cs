using System.Collections;
using UnityEngine;

public class SpawnBotTest : MonoBehaviour
{
    [SerializeField] private BotNetwork _botPrefab;
    [SerializeField] private float _spawnInterval = 1f;
    [SerializeField] private int _upper = 10;

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
            var path = PathManager.Instance.ChoseWayPointNormal();
            var spawnPosition = path.WayPoints[0].position;
            path.WayPoints.RemoveAt(0);
            BotManagerTest.Instance.SpawnBot(_botPrefab,spawnPosition,path);
            yield return new WaitForSeconds(_spawnInterval);
        }
    }
   
}