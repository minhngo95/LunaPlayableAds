using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

public class BotManager : MonoBehaviour
{
    private static BotManager _instance;
    [SerializeField] private List<BotNetwork> _botNetworks = new List<BotNetwork>();
    [FormerlySerializedAs("totalBotConfig")] [SerializeField] private int totalBotOnMap;
    public int TotalBotOnMap
    {
        get { return totalBotOnMap; }
        set { totalBotOnMap = value; }
    }

    public static BotManager Instance => _instance;
    public List<BotNetwork> BotNetworks => _botNetworks;
    private void Awake()
    {
        _instance = this;
    }
    public void  SpawnBot(BotNetwork botPrefab,Vector3 spawnPosition, PathMng path)
    {
        BotNetwork newBot = Instantiate(botPrefab, spawnPosition, Quaternion.identity);
        newBot.SetPath(path);
        newBot.OnBotDead+=OnBotDead;
        newBot.transform.localRotation = Quaternion.Euler(0, 180, 0);
        newBot.gameObject.SetActive(true);
        _botNetworks.Add(newBot);
    }

    private void OnBotDead()
    {
        totalBotOnMap--;
    }
}