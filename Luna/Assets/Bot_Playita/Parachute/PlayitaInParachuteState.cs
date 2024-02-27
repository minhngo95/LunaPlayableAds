using UnityEngine;

public class PlayitaInParachuteState : IState
{
    private Animator _animator;

    public PlayitaInParachuteState(Animator animator)
    {
        this._animator = animator;

    }
    public void EnterState()
    {
    }

    public void ExecuteState()
    {
        _animator.Play("ParachuteIdle");
    }

    public void ExitState()
    {
    }
}