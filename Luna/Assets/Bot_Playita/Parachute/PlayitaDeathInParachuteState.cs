using UnityEngine;

public class PlayitaDeathInParachuteState : IState
{
    private readonly StateConditionManager _stateConditionManager;
    private readonly Animator _animator;

    public PlayitaDeathInParachuteState(StateConditionManager stateConditionManager, Animator animator)
    {
        _stateConditionManager = stateConditionManager;
        _animator = animator;
    }

    public void EnterState()
    {
    }

    public void ExecuteState()
    {
        _animator.SetBool("isDead", true);
    }

    public void ExitState()
    {
    }
}