using System;
using UnityEngine;
using static FighterStateMachine;

public class FighterMoveState : BaseState<FighterState>
{
    [SerializeField] BotConfigSO fighterConfig;
    [SerializeField] BotNetwork botNetwork;
    private WayPoint path;
    private float moveSpeed;
    private float stopDistance;
    private bool isMovetoBehind;
    public override void EnterState()
    {
        Invoke(nameof(Init), 0.1f);
    }
    private void Init()
    {
        path = botNetwork.Path;
        moveSpeed = fighterConfig.moveSpeed;
        stopDistance = 20f;
        isMovetoBehind = false;
    }
    public override void UpdateState()
    {
        if(path != null)
        {
            transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
            float distance = Vector3.Distance(transform.position, path.WayPoints[1].position); // bay tới vị trí phía sau
            if(distance < stopDistance)
            {
                isMovetoBehind = true;
            }
        }
    }
    public override void ExitState()
    {
       
    }
    public override FighterState GetNextState()
    {
        if(botNetwork.IsDead)
        {
            return FighterState.Dead;
        }
        else
        {
            if (isMovetoBehind)
            {
                return FighterState.BehindAttackPos;
            }
            return StateKey;
        }
        

    }
}
