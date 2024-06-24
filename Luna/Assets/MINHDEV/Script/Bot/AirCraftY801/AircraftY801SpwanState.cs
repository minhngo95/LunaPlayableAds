using System.Collections;
using UnityEngine;
using static AircraftY801StateMachine;

public class AircraftY801SpwanState : BaseState<AirForceState>
{
    [SerializeField] private BotConfigSO AircraftConfig;
    [SerializeField] private BotNetwork botNetwork;
    [SerializeField] private Transform spwanPos;
    private WayPoint _path;
    private float _speed;
    private CarryAttributes[] botCarry;
    private bool isSpwanDone;

    public override void EnterState()
    {
        Init();
        isSpwanDone = false;
        botCarry = new CarryAttributes[AircraftConfig.carryAttributes.Length];
        for (int i = 0; i < AircraftConfig.carryAttributes.Length; i++)
        {
            botCarry[i] = new CarryAttributes
            {
                botConfig = AircraftConfig.carryAttributes[i].botConfig,
                Quantity = AircraftConfig.carryAttributes[i].Quantity
            };
        }
        StartCoroutine(SpwanAction());
    }

    private void Init()
    {
        _path = botNetwork.Path;
        _speed = AircraftConfig.moveSpeed;
    }

    IEnumerator SpwanAction()
    {
        yield return StartCoroutine(SpwanBot());
        yield return new WaitUntil(() => isSpwanDone == true);
    }

    IEnumerator SpwanBot()
    {
        if (botCarry.Length > 0)
        {
            for (int i = 0; i < botCarry[0].Quantity; i++)
            {
                Instantiate(botCarry[0].botConfig.Model, spwanPos.position, Quaternion.identity);
                yield return null;
            }
            isSpwanDone = true;
        }
    }

    public override void UpdateState()
    {
        if (!isSpwanDone && _path != null)
        {
            transform.position = Vector3.MoveTowards(transform.position, _path.WayPoints[1].position, _speed * Time.deltaTime);
        }
    }

    public override void ExitState()
    {
        isSpwanDone = false; // Reset lại isSpwanDone khi rời khỏi trạng thái
    }

    public override AirForceState GetNextState()
    {
        if (botNetwork.IsDead)
        {
            return AirForceState.Dead;
        }
        else
        {
            if (isSpwanDone)
            {
                return AirForceState.MoveBehindPos;
            }
            return StateKey;
        }
    }
}
