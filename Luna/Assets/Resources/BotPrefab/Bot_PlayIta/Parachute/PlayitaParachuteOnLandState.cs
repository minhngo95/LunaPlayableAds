using UnityEngine;

public class PlayitaParachuteOnLandState : IState
{
    private readonly StateConditionManager _stateConditionManager;
    private readonly Animator _animator;

    public PlayitaParachuteOnLandState(StateConditionManager stateConditionManager, Animator animator)
    {
        _stateConditionManager = stateConditionManager;
        _animator = animator;
    }

    public void EnterState()
    {
    }

    public void ExecuteState()
    {
        _animator.SetBool("isParachuteDone", _stateConditionManager.GetCondition("ParachuteDone"));
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Parachute_Land") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
        {
            _animator.SetBool("isMove", true);
            _stateConditionManager.SetCondition("ParachuteOnLand", true);
        }
    }

    public void ExitState()
    {
    }
}