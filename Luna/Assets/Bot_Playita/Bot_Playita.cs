using UnityEngine;
using UnityEngine.Serialization;

public class Bot_Playita : MonoBehaviour
{
    [SerializeField] private FiniteStateMachine finiteStateMachine;
    [SerializeField] private StateTransitionManager _stateTransitionManager;
    [SerializeField] private StateConditionManager _stateConditionManager;
    [SerializeField] private BotNetwork _botNetwork;
    public Animator _animator;
    public GameObject _muzzle;
    public GameObject bullet;
    public Vector3 target;
    public bool isDie;


    [SerializeField] protected MeshRenderer healthBarRenderer;
    protected readonly float moveSpeed = 5;
    protected MaterialPropertyBlock matBlock;
    protected Path path;
    protected float shootingDelay;
    [FormerlySerializedAs("_audioSource")] [SerializeField] protected AudioSource _takeSource;
    [SerializeField] protected AudioSource _hitSource;

    private IState moveState;
    private IState shootState;
    private IState dieState;
    private IState takeDameState;

    protected virtual void OnEnable()
    {
        path = _botNetwork.Path;
        if (path == null) gameObject.SetActive(false);
        matBlock = new MaterialPropertyBlock();
        healthBarRenderer.enabled = false;
        healthBarRenderer.GetPropertyBlock(matBlock);
        _botNetwork.OnTakeDamage += OnTakeDamage;
        _botNetwork.OnBotDead += OnBotDead;
        InitState(_stateConditionManager);
        RegisterCondition();
        RegisterTransition();
        finiteStateMachine.SetState(moveState);
    }
    protected void InitState(StateConditionManager stateConditionManager)
    {
        moveState = new PlayitaMoveState(stateConditionManager, transform, path, moveSpeed);
        shootState = new PlayitaShootState(stateConditionManager, transform, target, _animator, shootingDelay, _muzzle,
            _hitSource, bullet);
        dieState = new PlayitaDieState(_animator, gameObject, healthBarRenderer, _muzzle);
        takeDameState = new PlayitaTakeDameState(stateConditionManager, _animator,_takeSource);
    }

    protected void RegisterCondition()
    {
        _stateConditionManager.RegisterCondition("MoveDone", false);
        _stateConditionManager.RegisterCondition("ShootDone", false);
        _stateConditionManager.RegisterCondition("TakeDame", false);
        _stateConditionManager.RegisterCondition("Dead", false);
    }

    protected void RegisterTransition()
    {
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("MoveDone"), moveState,
            shootState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("ShootDone"), shootState,
            dieState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("TakeDame"), moveState,
            takeDameState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("TakeDame"), shootState,
            takeDameState);
        _stateTransitionManager.RegisterTransition(
            () => !_stateConditionManager.GetCondition("TakeDame") && !_stateConditionManager.GetCondition("MoveDone"),
            takeDameState, moveState);
        _stateTransitionManager.RegisterTransition(()=>_stateConditionManager.GetCondition("Dead"),moveState, dieState);
        _stateTransitionManager.RegisterTransition(()=>_stateConditionManager.GetCondition("Dead"),takeDameState, dieState);
        _stateTransitionManager.RegisterTransition(()=>_stateConditionManager.GetCondition("Dead"),shootState, dieState);
        
    }

    protected void Update()
    {
        finiteStateMachine.UpdateState();
    }

    private void OnTakeDamage(int damage)
    {
        _stateConditionManager.SetCondition("TakeDame", true);
    }
    private void OnBotDead()
    {
        _stateConditionManager.SetCondition("Dead", true);
    }

   
  

    

 
}