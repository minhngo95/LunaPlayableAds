using System;
using UnityEngine;

[CreateAssetMenu(fileName = "ConfigBotInGame", menuName = "ScriptableObjects/ConfigBotInGame", order = 1)]
public class ConfigBotInGame : ScriptableObject
{
    public BotConfig[] botConfigs;
}

[Serializable]
public class BotConfig
{
    [Header("Thông tin Bot")]
    [Tooltip("Kéo Prefab của Bot vào đây")]
    public GameObject botPrefab;

    [Tooltip("Chọn loại Bot")]
    public BotType botType;

    [Tooltip("Có sử dụng bot này trong kịch bản không?")]
    public bool isUse = true;

    [Tooltip("Số lượng bot sinh ra")]
    public int botQuantity;

    [Space(20)]
    [Tooltip("Bot này có sinh ra thêm bot khác không?")]
    public bool botParent;

    [Tooltip("Danh sách các bot con")]
    public BotConfig[] childBots;
}

public enum BotType
{
    None,
    Infantry,
    Parachutist,
    AirForce,
}
