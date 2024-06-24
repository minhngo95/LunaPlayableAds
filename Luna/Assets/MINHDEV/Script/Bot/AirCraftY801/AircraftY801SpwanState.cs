using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static AircraftY801StateMachine;
using static BotPlayItaStateMachine;
using static UnityEngine.UI.CanvasScaler;

public class AircraftY801SpwanState : BaseState<AirForceState>
{
    [SerializeField] private BotConfigSO AircraftConfig;//nên sửa một cái gì đấy để đọc config rồi lấy dữ liệu, ko muốn lôi cái config gán vào như này :<, rảnh thì làm sau
    [SerializeField] private BotNetwork botNetwork;
    [SerializeField] private Transform spwanPos;
    private WayPoint _path;
    private float _speed;
    private CarryAttributes[] botCarry; //listbot đc spwan ra
    private bool isSpwanDone;
    public override void EnterState()
    {
        Init(); // delay 0.1f readData_Path 
        isSpwanDone = false;
        botCarry = AircraftConfig.carryAttributes;
        StartCoroutine(SpwanAction());

    }
    private void Init()
    {
        _path = botNetwork.Path;
        _speed = AircraftConfig.moveSpeed;
    }

    IEnumerator SpwanAction()
    {
        yield return new WaitForSeconds(0.1f);

        yield return StartCoroutine(SpwanBot());
        isSpwanDone = true;


    }
    IEnumerator SpwanBot()
    {
        if (botCarry.Length >0)
        {
            for (int i = 0; i < botCarry[0].Quantity; i++)
            {
                Instantiate(botCarry[0].botConfig.Model, spwanPos.position, Quaternion.identity);
                yield return null;
            }
        }    

    }
    public override void UpdateState()
    {
        if(!isSpwanDone && _path!=null)
        {
            transform.position = Vector3.MoveTowards(transform.position, _path.WayPoints[1].position, _speed * Time.deltaTime);
        }
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