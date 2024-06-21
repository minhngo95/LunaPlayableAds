using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AircraftY801StateMachine : MonoBehaviour
{
    public BotNetwork BotNetwork;
    public BotConfigSO BotConfig;
    private Dictionary<AirForceState, BaseState<AirForceState>> StateController = new Dictionary<AirForceState, BaseState<AirForceState>>();

    public enum AirForceState
    {
        Fly,
        SpawnBot,
        Dead
    }
    private void Awake()
    {
        
    }
}
