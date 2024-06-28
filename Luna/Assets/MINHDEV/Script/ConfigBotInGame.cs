using System;
using UnityEngine;
using UnityEditor;

[CreateAssetMenu(fileName = "ConfigBotInGame", menuName = "ScriptableObjects/ConfigBotInGame", order = 1)]
public class ConfigBotInGame : ScriptableObject
{
    public FightRound[] fightRound;
}
[Serializable]
public class FightRound
{
    public BotConfig[] botConfigs;
}

[Serializable]
public class BotConfig
{
    [Header("Thông tin Bot")]
    [Tooltip("Kéo Prefab của Bot vào đây")]
    public BotNetwork botPrefab;

    [Tooltip("Chọn loại Bot")]
    public BotType botType;

    [Tooltip("Có sử dụng bot này trong kịch bản không?")]
    public bool isNotUse;

    [Tooltip("Bot có sử dụng nhưng ko tính vào BotCount")]
    public bool isNotCount;

    [Tooltip("Số lượng bot sinh ra")]
    public int botQuantity;

    [Tooltip("Thời gian Delay giữa các lần thả bot")]
    public float botDelaySpawn;

}

public enum BotType
{
    None,
    Infantry,
    Parachutist,
    AirForce,
    AirForceDetector,
    FighterF15,
}

