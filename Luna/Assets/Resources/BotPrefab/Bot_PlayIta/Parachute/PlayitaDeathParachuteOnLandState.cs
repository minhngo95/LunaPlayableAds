using UnityEngine;

public class PlayitaDeathParachuteOnLandState : IState
{
    private readonly StateConditionManager _stateConditionManager;
    private readonly Animator _animator;
    private readonly GameObject _gameObject;


    public PlayitaDeathParachuteOnLandState(StateConditionManager stateConditionManager,Animator animator,GameObject gameObject)
    {
        this._stateConditionManager= stateConditionManager;
        this._gameObject = gameObject;
        this._animator = animator;
    }

    public void EnterState()
    {
    }

    public void ExecuteState()
    {
        _animator.SetBool("isOnLand",  _stateConditionManager.GetCondition("DeathInParachuteOnLand"));
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("ParachuteOnLand"))
            if (_animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
            {
                _gameObject.SetActive(false);
            }
    }

    public void ExitState()
    {
    }
}