using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static FighterStateMachine;

public class FighterDeadState : BaseState<FighterState>
{
    [SerializeField] BotNetwork botNetwork;
    [SerializeField] GameObject body;
    [SerializeField] GameObject step1;
    public override void EnterState()
    {
        body.SetActive(false);
        step1.SetActive(true);
    }
    public override void UpdateState()
    {
        
    }
    public override void ExitState()
    {

    }
    public override FighterState GetNextState()
    {
        return StateKey;

    }
    
}

