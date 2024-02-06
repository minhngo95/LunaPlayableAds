using UnityEngine;

public class BotParachute : BotController
{
    public bool isMove;
    public bool parachuteDone;
    public bool OnLand { get; set; }

    protected override void Awake()
    {
        path = PathManager.Instance.ChooseWayPointParachute();
        pointCount = path.WayPoints.Count;
        if (path == null) gameObject.SetActive(false);
        currentState = new ParachuteState();
        matBlock = new MaterialPropertyBlock();
        healthBarRenderer.enabled = false;
        healthBarRenderer.GetPropertyBlock(matBlock);
        currentHealth = maxHealth;
        _animator.Play("ParachuteIdle");
        _audioSource.clip=AudioManager.Instance.GetAudioCallTeamClip();
        _audioSource.Play();
    }

    protected override void ChangeState()
    {
        if (currentState is MoveState)
        {
            if (isTakeDame)
                currentState = new TakeDameState();
            else if (isDie)
                currentState = new DieState();
            else if (isMoveDone) currentState = new ShootState();
        }

        if (currentState is ShootState)
        {
            if (isDie) currentState = new DieState();
            if (isTakeDame) currentState = new TakeDameState();
        }

        if (currentState is TakeDameState && !isTakeDame)
        {
            if (isDie)
                currentState = new DieState();
            else if (isMoveDone)
                currentState = new ShootState();
            else if (isMove)
                currentState = new MoveState();
            else
                currentState = new ParachuteState();
        }

        if (currentState is ParachuteState)
        {
            if (isDie)
            {
                currentState = new DieState();
            }
            if (isMove) currentState = new MoveState();
            if (isTakeDame)
            {
                currentState = new TakeDameState();
            }
        }
    }

    public void ParachuteAction()
    {
        _animator.SetBool("isParachuteDone", parachuteDone);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Parachute_Land") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
        {
            moveIndex++;
            isMove = true;
            _animator.SetBool("isMove", true);
        }
    }

    public Vector3 GetPos(int index)
    {
        moveIndex = index;
        return path.WayPoints[index].position;
    }

    protected override void TakeDameAction()
    {
        base.TakeDameAction();
        if (OnLand)
        {
            _animator.SetBool("isHit", false);
            isTakeDame = false;
        }
        else
        {
            if (_animator.GetCurrentAnimatorStateInfo(0).IsName("ParachuteHit") &&
                _animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
            {
                OnLand = true;
            }
        }
    }

    protected override void DieAction()
    {
        base.DieAction();
        if (OnLand)
        {
            _animator.SetBool("isOnLand", true);
            if (_animator.GetCurrentAnimatorStateInfo(0).IsName("ParachuteOnLand"))
                if (_animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
                {
                    OnBotDead.Invoke();
                    gameObject.SetActive(false);
                }
        }
        else
        {
            if (_animator.GetCurrentAnimatorStateInfo(0).IsName("ParachuteDead"))
                if (_animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
                    OnLand = parachuteDone;
        }

    }

    public class ParachuteState : BotState
    {
        public override void UpdateState(BotController botController)
        {
            if (botController is BotParachute parachuteBot) parachuteBot.ParachuteAction();
        }
    }
}