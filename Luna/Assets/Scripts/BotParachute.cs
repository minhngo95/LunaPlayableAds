using UnityEngine;

public class BotParachute : BotController
{
    public bool isMove;

    public bool parachuteDone;

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
    }

    protected override void ChangeState()
    {
        base.ChangeState();
        if (currentState is ParachuteState)
        {
            if (isDie) currentState = new DieState();
            if (isMove) currentState = new MoveState();
        }
    }

    public void ParachuteAction()
    {
        _animator.SetBool("isParachuteDone", parachuteDone);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Parachute_Land") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
        {
            transform.SetParent(null);
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

    public class ParachuteState : BotState
    {
        public override void UpdateState(BotController botController)
        {
            if (botController is BotParachute parachuteBot) parachuteBot.ParachuteAction();
        }
    }
}