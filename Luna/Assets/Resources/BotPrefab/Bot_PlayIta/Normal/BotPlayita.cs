using UnityEngine;
using UnityEngine.Serialization;

public class BotPlayita : MonoBehaviour
{
    [SerializeField] protected FiniteStateMachine _finiteStateMachine;
    [SerializeField] protected StateTransitionManager _stateTransitionManager;
    [SerializeField] protected StateConditionManager _stateConditionManager;
    [SerializeField] protected BotNetwork _botNetwork;
    [SerializeField] protected Animator _animator;
    [SerializeField] protected GameObject _muzzle;
    [SerializeField] protected GameObject _bullet;
    [SerializeField] protected Vector3 _target;
    [SerializeField] protected MeshRenderer _healthBarRenderer;
    protected readonly float _moveSpeed = 5;
    protected MaterialPropertyBlock _matBlock;
    protected Path _path;
    protected float _shootingDelay;
    [SerializeField] protected AudioSource _takeSource;
    [SerializeField] protected AudioSource _hitSource;

    protected IState _moveState;
    protected IState _shootState;
    protected IState _deathState;
    protected IState _takeDameState;

    protected virtual void OnEnable()
    {
        _path = _botNetwork.Path;
        if (_path == null) gameObject.SetActive(false);
        _matBlock = new MaterialPropertyBlock();
        _healthBarRenderer.enabled = false;
        _healthBarRenderer.GetPropertyBlock(_matBlock);
        _botNetwork.OnTakeDamage += OnTakeDamage;
        _botNetwork.OnBotDead += OnBotDead;
        InitState(_stateConditionManager);
        RegisterCondition();
        RegisterTransition();
        _finiteStateMachine.SetState(_moveState);
    }
    protected virtual void InitState(StateConditionManager stateConditionManager)
    {
        _moveState = new PlayitaMoveState(stateConditionManager, transform, _path, _moveSpeed);
        _shootState = new PlayitaShootState(stateConditionManager, transform, _target, _animator, _shootingDelay, _muzzle,_hitSource, _bullet);
        _deathState = new PlayitaDieState(_animator, gameObject, _healthBarRenderer, _muzzle);
        _takeDameState = new PlayitaTakeDameState(stateConditionManager, _animator,_takeSource);
    }

    protected virtual void RegisterCondition()
    {
        _stateConditionManager.RegisterCondition("MoveDone", false);
        _stateConditionManager.RegisterCondition("ShootDone", false);
        _stateConditionManager.RegisterCondition("TakeDame", false);
        _stateConditionManager.RegisterCondition("Death", false);
    }

    protected virtual void RegisterTransition()
    {
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("MoveDone"), _moveState,_shootState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("ShootDone"), _shootState,_deathState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("TakeDame"), _moveState,_takeDameState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("TakeDame"), _shootState,_takeDameState);
        _stateTransitionManager.RegisterTransition(() => !_stateConditionManager.GetCondition("TakeDame") && !_stateConditionManager.GetCondition("MoveDone"),_takeDameState, _moveState);
        _stateTransitionManager.RegisterTransition(() => !_stateConditionManager.GetCondition("TakeDame") && _stateConditionManager.GetCondition("MoveDone"),_takeDameState, _shootState);
        _stateTransitionManager.RegisterTransition(()=>_stateConditionManager.GetCondition("Death"),_moveState, _deathState);
        _stateTransitionManager.RegisterTransition(()=>_stateConditionManager.GetCondition("Death"),_takeDameState, _deathState);
        _stateTransitionManager.RegisterTransition(()=>_stateConditionManager.GetCondition("Death"),_shootState, _deathState);
        
    }

    protected virtual void Update()
    {
        _finiteStateMachine.UpdateState();
    }

    protected virtual void OnTakeDamage(int damage)
    {
        _stateConditionManager.SetCondition("TakeDame", true);
    }
    protected virtual void OnBotDead()
    {
        _stateConditionManager.SetCondition("Death", true);
    }

   
  

    

 
}