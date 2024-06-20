using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WayPointBotManager : MonoBehaviour
{
    [SerializeField] public List<WayPointBot> WayPointBot;
    public static WaitForEndOfFrame Instance;
}
[Serializable]
public class WayPointBot
{
    public bool IsUse;
    [SerializeField] public BotType botType;
    public List<Transform> StartPoint;
    public List<Transform> MovePoint;

}
