using System;
using Luna.Unity.FacebookInstantGames;
using UnityEngine;

public class BotPlayitaParachute : BotPlayita
{
    [SerializeField] private LayerMask _groundLayer;
    [SerializeField] private Transform _parachuteScale;
    private float _groundCheckDistance = Mathf.Infinity;
    private float _scaleAmount;
    [SerializeField] private float _distanceOpenParachute = 10f;
    [SerializeField] private float _distanceCloseParachute = 2f;
    private float t;
    public float Speed;
    private Vector3 posEnd;
    private bool _hasLanded;
    private int _landCount;
    private IState _inParachuteState;
    private IState _parachuteOnLandState;
    private IState _deathInParachuteState;
    private IState _takeDameInParachuteState;
    private IState _deathInParachuteOnLandState;

    protected override void OnEnable()
    {
        base.OnEnable();
        posEnd = CheckGround();
        Debug.DrawRay(posEnd, Vector3.up, Color.red, Mathf.Infinity);
        _hasLanded = false; // Reset landing status
        // _landCount = 0; // Reset land count if needed
        _finiteStateMachine.SetState(_inParachuteState);
    }

    protected override void InitState(StateConditionManager stateConditionManager)
    {
        base.InitState(stateConditionManager);
        _inParachuteState = new PlayitaInParachuteState(_animator);
        _parachuteOnLandState = new PlayitaParachuteOnLandState(stateConditionManager, _animator);
        _deathInParachuteState = new PlayitaDeathInParachuteState(stateConditionManager, _animator);
        _takeDameInParachuteState = new PlayitaTakeDameInParachuteState(stateConditionManager, _animator);
        _deathInParachuteOnLandState = new PlayitaDeathParachuteOnLandState(stateConditionManager, _animator, this.gameObject);
    }

    protected override void Update()
    {
        base.Update();
        if (!_stateConditionManager.GetCondition("ParachuteDone"))
        {
            var distanceToGround = Vector3.Distance(transform.position, posEnd);
            if (distanceToGround > 0.5f)
            {
                transform.position = Vector3.MoveTowards(transform.position, posEnd, Speed * Time.deltaTime);
                ParachuteAction(distanceToGround);
            }
            else
            {
                if (!_hasLanded) // Check if the bot has just landed
                {
                    _hasLanded = true;
                    OnLand(); // Call OnLand method when bot lands
                }
            }

            if (!_stateConditionManager.GetCondition("ParachuteDone") && _stateConditionManager.GetCondition("Death"))
            {
                Speed = 20;
            }
        }
    }

    private void OnLand()
    {
        _stateConditionManager.SetCondition("ParachuteDone", true);
        transform.position = posEnd;
        _parachuteScale.gameObject.SetActive(false);
        _landCount++; // Increment land count
        Debug.Log("Land count: " + _landCount); // Optional: Display land count
        // Thực hiện các hành động cần thiết khi bot chạm đất
    }

    protected override void RegisterCondition()
    {
        base.RegisterCondition();
        _stateConditionManager.RegisterCondition("ParachuteDone", false);
        _stateConditionManager.RegisterCondition("ParachuteOnLand", false);
        _stateConditionManager.RegisterCondition("DeathInParachuteOnLand", false);
    }

    protected override void RegisterTransition()
    {
        base.RegisterTransition();
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("ParachuteDone"),
            _inParachuteState, _parachuteOnLandState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("TakeDame"),
            _inParachuteState, _takeDameInParachuteState);
        _stateTransitionManager.RegisterTransition(() => !_stateConditionManager.GetCondition("TakeDame"),
            _takeDameInParachuteState, _inParachuteState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("Death"),
            _takeDameInParachuteState, _deathInParachuteState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("ParachuteOnLand"),
            _parachuteOnLandState, _moveState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("TakeDame"),
            _parachuteOnLandState, _takeDameState);
        _stateTransitionManager.RegisterTransition(() => !_stateConditionManager.GetCondition("TakeDame") && !_stateConditionManager.GetCondition("ParachuteOnLand"),
            _takeDameState, _parachuteOnLandState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("Death"),
            _parachuteOnLandState, _deathState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("DeathInParachuteOnLand"),
            _deathInParachuteState, _deathInParachuteOnLandState);
        _stateTransitionManager.RegisterTransition(() => _stateConditionManager.GetCondition("DeathInParachuteOnLand") && _stateConditionManager.GetCondition("Death"),
            _takeDameInParachuteState, _deathInParachuteOnLandState);
    }

    public Vector3 CheckGround()
    {
        RaycastHit hit;
        if (Physics.Raycast(transform.position, Vector3.down, out hit, _groundCheckDistance, _groundLayer))
            return hit.point;
        return Vector3.zero;
    }

    private void ParachuteAction(float distanceToGround)
    {
        t += Time.deltaTime;
        if (t > 1.0f) t = 0.0f;
        if (distanceToGround <= _distanceOpenParachute && distanceToGround >= _distanceCloseParachute)
        {
            _scaleAmount = Mathf.Lerp(_scaleAmount, 1, t);
            _parachuteScale.localScale = new Vector3(_scaleAmount, _scaleAmount, 1);
        }

        if (distanceToGround < _distanceCloseParachute)
        {
            _stateConditionManager.SetCondition("DeathInParachuteOnLand", true);
            _scaleAmount = Mathf.Lerp(_scaleAmount, 0, t);
            _parachuteScale.localScale = new Vector3(_scaleAmount, _scaleAmount, 1);
        }
    }
}
