using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.XR;
using static BotPlayItaStateMachine;

public class BotPlayItaDeadState : BaseState<PlayItaState>
{
    [SerializeField] protected Animator ator;
  

    public override void EnterState()
    {

        ator.SetBool("isDead", true);
        StartCoroutine(HideBotOnDie());
    }
    IEnumerator HideBotOnDie()
    {
        yield return new WaitForSeconds(1f);
        gameObject.SetActive(false);

    }
    public override void UpdateState()
    {

    }
    public override void ExitState()
    {

    }
    public override PlayItaState GetNextState()
    {
        return StateKey;

    }
}
