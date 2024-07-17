﻿using System.Collections;
using UnityEngine;
using static BotPlayItaStateMachine;

public class BotPlayItaAttackState : BaseState<PlayItaState>
{
    [SerializeField] protected BotNetwork botNetwork;
    [SerializeField] protected Animator ator;
    [SerializeField] protected HumanMoveBase humanMoveBase;
    [SerializeField] protected GameObject muzzle;
    [SerializeField] protected GameObject weaponRoot;
    [SerializeField] protected Transform Mytrans;
    [SerializeField] private AudioSource _source;
    [SerializeField] private AudioClip[] listSoundAttack;
    [SerializeField] private AudioClip[] BotVoice;
    private float timeAttack;
    private float timeReload;
    private bool canAttack;
    private bool isTakeDame;
    public override void EnterState()
    {
        int randomSay = Random.Range(0, 100);
        if(randomSay % 2 == 0)
        {
            int indexSound = Random.Range(0, listSoundAttack.Length);
            AudioClip clipPlay = listSoundAttack[indexSound];
            _source.clip = clipPlay;
        }
        //else
        //{
        //    int indexSound = Random.Range(0, BotVoice.Length);
        //    AudioClip clipPlay = BotVoice[indexSound];
        //    _source.clip = clipPlay;
        //}
       
        timeAttack = 3f;  // Set the attack interval to 3 seconds
        timeReload = 3f;
        ator.SetBool("isMoveDone", true);
        canAttack = true;
        StartCoroutine(AttackRoutine());
        botNetwork.OnTakeDamage += OnTakeDame;
       
    }

    private IEnumerator OnPlaySoundAttack()
    {
        yield return new WaitForSeconds(0.5f);
    }

    private void OnTakeDame(int damage)
    {
        isTakeDame = true;

        int randomDeadStyle = Random.Range(0, 100);
        if (randomDeadStyle % 2 == 0)
        {
            ator.SetFloat("DeadStyle", 1);
        }
        else
        {
            ator.SetFloat("DeadStyle", 0);
        }
        //ator.SetBool("isHit", true);
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
                _source.Play();
                canAttack = false;
                yield return new WaitForSeconds(timeAttack); // Wait for the specified time before the next attack
                muzzle.SetActive(false);
                ator.SetBool("isReload", true);
                yield return new WaitForSeconds(timeReload);
                ator.SetBool("isReload", false);
                canAttack = true;
            }
            yield return null;  // Wait until the next frame
        }
    }
    private void RotaToTarget()
    {
        Vector3 direction =LocalPlayer.Instance.GetLocalPlayer() - weaponRoot.transform.position;
        Quaternion rotation = Quaternion.LookRotation(direction);
        Mytrans.transform.rotation = rotation;
        weaponRoot.transform.rotation = rotation;

    }
    public override void UpdateState()
    {
        RotaToTarget();
    }
    public override void ExitState()
    {
        _source.Stop();
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
