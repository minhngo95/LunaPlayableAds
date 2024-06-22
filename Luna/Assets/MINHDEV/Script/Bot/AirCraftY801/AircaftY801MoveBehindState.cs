using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static AircraftY801StateMachine;
using static BotPlayItaStateMachine;
using static UnityEngine.UI.CanvasScaler;

public class AircaftY801MoveBehindState : BaseState<AirForceState>
{
    [SerializeField] private BotConfigSO AircraftConfig;//nên sửa một cái gì đấy để đọc config rồi lấy dữ liệu, ko muốn lôi cái config gán vào như này :<, rảnh thì làm sau
    [SerializeField] private BotNetwork botNetwork;
    private WayPoint _path;
    private float _speed;
    private bool isFlyDone;
    public override void EnterState()
    {
        Invoke(nameof(Init), 0.1f); // delay 0.1f readData_Path 
    }
    private void Init()
    {
        _path = botNetwork.Path;
        _speed = AircraftConfig.moveSpeed;
        isFlyDone = false;
    }
    public override void UpdateState()
    {
        Fly();
    }
    private void Fly()
    {
        if (_path != null)
        {
            transform.position = Vector3.MoveTowards(transform.position, _path.WayPoints[1].position, _speed * Time.deltaTime);
            float distance = Vector3.Distance(transform.position, _path.WayPoints[1].position);
            if (distance < 0.1)
            {
                transform.position = _path.WayPoints[0].position;
                isFlyDone = true;
            }
        }

    }
    public override void ExitState()
    {

    }
    public override AirForceState GetNextState()
    {
        if (botNetwork.IsDead)
        {
            return AirForceState.Dead;
        }
        else
        {
            if (isFlyDone)
            {
                return AirForceState.Fly;
            }
            else
            {
                return StateKey;
            }
           
        }
    }
}
