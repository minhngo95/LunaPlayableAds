using UnityEngine;

public class PlayitaDieState : IState
{
    private readonly GameObject gameObject;
    private readonly Animator _animator;
    private readonly GameObject _muzzle;
    private readonly MeshRenderer _healthBarRenderer;

    public PlayitaDieState(Animator _animator, GameObject gameObject, MeshRenderer healthBarRenderer, GameObject muzzle)
    {
        this._animator = _animator;
        this.gameObject = gameObject;
        _muzzle = muzzle;
        _healthBarRenderer = healthBarRenderer;
    }

    public void EnterState()
    {
    }

    public void ExecuteState()
    {
        _muzzle.SetActive(false);
        _healthBarRenderer.enabled = false;
        _animator.SetBool("isDead", true);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Death") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
            gameObject.SetActive(false);
    }

    public void ExitState()
    {
    }
}