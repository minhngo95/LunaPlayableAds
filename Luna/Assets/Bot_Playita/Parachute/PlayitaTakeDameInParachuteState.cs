using UnityEngine;

public class PlayitaTakeDameInParachuteState : IState
{
    private readonly StateConditionManager _stateConditionManager;
    private readonly Animator _animator;


    public PlayitaTakeDameInParachuteState(StateConditionManager stateConditionManager, Animator animator)
    {
        _stateConditionManager = stateConditionManager;
        _animator = animator;
    }

    public void EnterState()
    {
    }

    public void ExecuteState()
    {
        _animator.SetBool("isHit", true);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("ParachuteHit") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
        {
            _animator.SetBool("isHit", false);
            _stateConditionManager.SetCondition("TakeDame", false);
        }
    }

    public void ExitState()
    {
    }
}