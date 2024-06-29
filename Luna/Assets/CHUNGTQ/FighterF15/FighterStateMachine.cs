using System.Collections;
using System.Collections.Generic;
using System.Xml;
using UnityEngine;
using static BotPlayItaStateMachine;

public class FighterStateMachine : MonoBehaviour
{
    public Dictionary<FighterState, BaseState<FighterState>> StateController = new Dictionary<FighterState, BaseState<FighterState>>();
    public BaseState<FighterState> _currentState;
    private bool _isTransition;
    
    private FighterMoveState _moveState;
    private  FighterBehindState _behindState;
    private FighterMoveTargetState _moveTargetState;
    private FighterAttackState _attackState;
    private FighterAfterAttackState _afterAttackState;
    private FighterDeadState _deadState;
    public enum FighterState
    {
        MoveDestination,
        BehindAttackPos,
        ChangeDirPos,
        TargetPos,
        BombAttackPos, 
        AfterAttack,
        Dead
    }
    private void Awake()
    {
        InitializeState();
    }
    private void InitializeState()
    {
        _moveState = GetComponent<FighterMoveState>();
        _moveState.Initialize(FighterState.MoveDestination);
        _behindState = GetComponent<FighterBehindState>();
        _behindState.Initialize(FighterState.BehindAttackPos);
        _moveTargetState = GetComponent<FighterMoveTargetState>();
        _moveTargetState.Initialize(FighterState.TargetPos);
        _attackState = GetComponent<FighterAttackState>();
        _attackState.Initialize(FighterState.BombAttackPos);
        _afterAttackState = GetComponent<FighterAfterAttackState>();
        _afterAttackState.Initialize(FighterState.AfterAttack);
        _deadState = GetComponent<FighterDeadState>();
        _deadState.Initialize(FighterState.Dead);

        StateController.Add(FighterState.MoveDestination,_moveState);
        StateController.Add(FighterState.BehindAttackPos, _behindState);
        StateController.Add(FighterState.TargetPos, _moveTargetState);
        StateController.Add(FighterState.BombAttackPos, _attackState);
        StateController.Add(FighterState.AfterAttack, _afterAttackState);
        StateController.Add(FighterState.Dead, _deadState);
    }
    void OnEnable()
    {
        _currentState = StateController[FighterState.MoveDestination];
        _currentState.EnterState();
    }
    void Update()
    {
        FighterState nextState = _currentState.GetNextState();
        if (_currentState.StateKey.Equals(nextState) && !_isTransition)
        {
            _currentState.UpdateState();
        }
        else
        {
            TransitionState(nextState);
        }
    }
    private void TransitionState(FighterState tankState)
    {
        _isTransition = true;
        _currentState.ExitState();
        _currentState = StateController[tankState];
        _currentState.EnterState();
        _isTransition = false;
    }
}
