using UnityEngine;

public class PlayitaTakeDameState : IState
{
    private readonly Animator _animator;
    private readonly StateConditionManager _stateConditionManager;
    private AudioSource _audioSource;

    public PlayitaTakeDameState(StateConditionManager _stateConditionManager, Animator _animator,AudioSource _audioSource)
    {
        this._animator = _animator;
        this._stateConditionManager = _stateConditionManager;
        this._audioSource = _audioSource;
    }

    public void EnterState()
    {
    }

    public void ExecuteState()
    {
        if (!_audioSource.isPlaying)
        {
            _audioSource.clip = AudioManager.Instance.GetAudioHitClip();
            _audioSource.Play();
        }
        _animator.SetBool("isHit", true);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Hit") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
        {
            _animator.SetBool("isHit", false);
            _animator.SetBool("isMoveDone", _stateConditionManager.GetCondition("MoveDone"));
            _stateConditionManager.SetCondition("TakeDame", false);
        }
    }

    public void ExitState()
    {
    }
}