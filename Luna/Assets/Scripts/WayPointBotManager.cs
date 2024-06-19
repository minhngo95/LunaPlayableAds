using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WayPointBotManager : MonoBehaviour
{
    [SerializeField] private List<WayPointBot> WayPointBot;
}
[Serializable]
public class WayPointBot
{
    public bool IsUse;
    [SerializeField] private BotType botType;
    public List<Transform> StartPoint;
    public List<Transform> MovePoint;

}
