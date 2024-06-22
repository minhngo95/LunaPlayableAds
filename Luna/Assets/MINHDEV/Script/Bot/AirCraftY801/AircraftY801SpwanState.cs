using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static AircraftY801StateMachine;
using static BotPlayItaStateMachine;

public class AircraftY801SpwanState : BaseState<AirForceState>
{
    [SerializeField] private BotConfigSO AircraftConfig;//nên sửa một cái gì đấy để đọc config rồi lấy dữ liệu, ko muốn lôi cái config gán vào như này :<, rảnh thì làm sau
    [SerializeField] private BotNetwork botNetwork;
    [SerializeField] private Transform spwanPos;
    private CarryAttributes[] botCarry; //listbot đc spwan ra
    private bool isSpwanDone;
    public override void EnterState()
    {
        isSpwanDone = false;
        botCarry = AircraftConfig.carryAttributes;
        StartCoroutine(SpwanAction());

    }

    IEnumerator SpwanAction()
    {
        yield return new WaitForSeconds(0.1f);

        yield return StartCoroutine(SpwanBot());
        isSpwanDone = true;


    }
    IEnumerator SpwanBot()
    {
        for (int i = 0; i < botCarry[0].Quantity; i++)
        {
            Instantiate(botCarry[0].botConfig.Model, spwanPos.position, Quaternion.identity);
            yield return null;
        }
    }
    public override void UpdateState()
    {

    }
    public override void ExitState()
    {

    }
    public override AirForceState GetNextState()
    {
        if(botNetwork.IsDead)
        {
            return AirForceState.Dead;
        }
        else
        {
            if (isSpwanDone)
            {
                return AirForceState.MoveBehindPos;
            }
            else
            {
                return StateKey;
            }

        }
       

    }
}