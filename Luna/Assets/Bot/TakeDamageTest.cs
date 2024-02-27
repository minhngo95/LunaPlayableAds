using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

public class TakeDamageTest : MonoBehaviour, ITakeDamage
{
    [SerializeField] private FiniteStateMachine finiteStateMachine;
    [SerializeField] private StateTransitionManager _stateTransitionManager;
    [SerializeField] private StateConditionManager stateConditionManager;
    [SerializeField] private MoveState moveState;
    [SerializeField] private JumpState jumpState;
    private void Start()
    {
        finiteStateMachine.SetState(moveState);
        stateConditionManager.RegisterCondition("MoveDone", false);
        stateConditionManager.RegisterCondition("JumpDone", false);
         _stateTransitionManager.RegisterTransition(() => stateConditionManager.GetCondition("MoveDone"), moveState, jumpState);
         _stateTransitionManager.RegisterTransition(() => stateConditionManager.GetCondition("JumpDone"), jumpState, moveState);
    }
    private void Update()
    {
        finiteStateMachine.UpdateState();
    }

    public void TakeDamage(int damage)
    {
        throw new System.NotImplementedException();
    }
}

