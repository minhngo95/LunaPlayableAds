using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "BotConfigSO", menuName = "ScriptableObjects/BotConfig")]
public class BotConfigSO : ScriptableObject
{
    public int id;
    public int health;
    public int attackDuration;
    public int damageMinPercent;
    public int damageMaxPercent;
    public int damageOnBot;
    public BotType botType;
    public GameObject Model;
    public float moveSpeed;
    [SerializeField]public CarryAttributes[] carryAttributes;

}

[Serializable]
public class CarryAttributes
{
    public BotConfigSO botConfig;
    public int Quantity;
}