using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static BotPlayItaStateMachine;

public class BotPlayItaAttackState : BaseState<PlayItaState>
{
    [SerializeField] protected BotNetwork botNetwork;
    [SerializeField] protected Animator ator;
    [SerializeField] protected HumanMoveBase humanMoveBase;
    [SerializeField] protected GameObject muzzle;
    private float timeAttack;
    private bool canAttack;
    private bool isTakeDame;
    public override void EnterState()
    {
        timeAttack = 3f;  // Set the attack interval to 3 seconds
        ator.SetBool("isMoveDone", true);
        canAttack = true;
        StartCoroutine(AttackRoutine());
        botNetwork.OnTakeDamage += OnTakeDame;
       // GameObject[] lookAt = GameObject.FindGameObjectsWithTag("PlayerPosition"); // chưa có hàm tìm vị trí player
      //  muzzle.transform.LookAt(lookAt);
    }
    private void OnTakeDame(int damage)
    {
        isTakeDame = true;
        ator.SetBool("isHit", true);
        muzzle.SetActive(false);

    }

    private IEnumerator AttackRoutine()
    {
        while (true)
        {
            if (canAttack)
            {
                muzzle.SetActive(true);
                muzzle.GetComponent<ParticleSystem>().Play();
                canAttack = false;
                yield return new WaitForSeconds(timeAttack); // Wait for the specified time before the next attack
                muzzle.SetActive(false);
                yield return new WaitForSeconds(1f);
                canAttack = true;
            }
            yield return null;  // Wait until the next frame
        }
    }
    public override void UpdateState()
    {

    }
    public override void ExitState()
    {

    }
    public override PlayItaState GetNextState()
    {
        if (botNetwork.IsDead)
        {
            return PlayItaState.Dead;
        }
        else
        {
            return StateKey;
        }
        

    }
}
