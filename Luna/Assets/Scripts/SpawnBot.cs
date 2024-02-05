using System.Collections;
using UnityEngine;

public class SpawnBot : MonoBehaviour
{
    [SerializeField] private GameObject _botPrefab;
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
            BotManager.Instance.SpawnBotInstance(_botPrefab);
            yield return new WaitForSeconds(_spawnInterval);
        }
    }
   
}