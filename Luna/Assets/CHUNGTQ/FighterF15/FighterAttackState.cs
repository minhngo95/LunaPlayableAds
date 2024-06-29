using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static FighterStateMachine;

public class FighterAttackState : BaseState<FighterState>
{
    [SerializeField] BotNetwork botNetwork;
    [SerializeField] Transform rotaBody;
    [SerializeField] GameObject _muzzle;
    private float countFrame;
    private float tempMoveSpeed;
    private float tempRotaSpeed;
    private bool isMoveToTargetPos;
    private float distanceAttack; // khoảng cách cho phép bắn
    [SerializeField] BotConfigSO fighterConfig;
    public override void EnterState()
    {
        distanceAttack = 70;
        isMoveToTargetPos = false;
        countFrame = 0f;
        tempMoveSpeed = fighterConfig.moveSpeed;
        tempRotaSpeed = TUtiliti.GetRotaSpeed(transform, botNetwork.Path.WayPoints[4].position, tempMoveSpeed, 90);
    }
    public override void UpdateState()
    {
        SetTempRotaSpeed();
        TUtiliti.TiltBodyOnMoveZ(transform, rotaBody, botNetwork.Path.WayPoints[4].position, 1.5f, 40);
        transform.Translate(Vector3.forward * tempMoveSpeed * Time.deltaTime);
        TUtiliti.RotaToTarget(transform, botNetwork.Path.WayPoints[4].position, tempMoveSpeed);
        float distance = Vector3.Distance(transform.position, botNetwork.Path.WayPoints[4].position);
        if (distance < distanceAttack)
        {
            _muzzle.transform.LookAt(LocalPlayer.Instance.GetLocalPlayer());
            _muzzle.SetActive(true);
        }
        if (distance < 2)
        {
            isMoveToTargetPos = true;
        }
    }
    public override void ExitState()
    {
        _muzzle.SetActive(false);
    }
    public override FighterState GetNextState()
    {
        if (botNetwork.IsDead)
        {
            return FighterState.Dead;
        }
        else
        {
            if (isMoveToTargetPos)
            {
                return FighterState.AfterAttack;
            }
            return StateKey;

        }
       

    }
    public virtual void SetTempRotaSpeed(float campAngle = 90, float addSpeed = 10)
    {
        countFrame++;
        if (countFrame % 10 == 0)
        {
            countFrame = 9;
            float rotaspeedClone = TUtiliti.GetRotaSpeed(transform, botNetwork.Path.WayPoints[4].position, tempMoveSpeed, campAngle) + addSpeed;
            if (rotaspeedClone < 80)
            {
                tempRotaSpeed = rotaspeedClone;
            }
        }
    }
}

