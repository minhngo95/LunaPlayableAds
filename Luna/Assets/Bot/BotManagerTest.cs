using System.Collections.Generic;
using UnityEngine;

public class BotManagerTest : MonoBehaviour
{
    private static BotManagerTest _instance;
    [SerializeField] private List<BotNetwork> _botNetworks = new List<BotNetwork>();
    public static BotManagerTest Instance => _instance;
    public List<BotNetwork> BotNetworks => _botNetworks;
    private void Awake()
    {
        _instance = this;
    }
    public void  SpawnBot(BotNetwork botPrefab,Vector3 spawnPosition, Path path)
    {
        BotNetwork newBot = Instantiate(botPrefab, spawnPosition, Quaternion.identity);
        newBot.transform.localRotation = Quaternion.Euler(0, 180, 0);
        newBot.SetPath(path);
        newBot.gameObject.SetActive(true);
        _botNetworks.Add(newBot);
    }
}