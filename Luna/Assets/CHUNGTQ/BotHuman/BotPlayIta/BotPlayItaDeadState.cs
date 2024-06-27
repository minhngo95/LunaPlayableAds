using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEditor.iOS;
using UnityEngine;
using UnityEngine.XR;
using static BotPlayItaStateMachine;

public class BotPlayItaDeadState : BaseState<PlayItaState>
{
    [SerializeField] protected BotNetwork botNetwork;
    [SerializeField] protected Animator ator;
    [SerializeField] private AudioSource _source;
    [SerializeField] private AudioClip[] listSounDead;

    public override void EnterState()
    {
        int indexSound = Random.RandomRange(0, listSounDead.Length);
        AudioClip clipPlay = listSounDead[indexSound];
        _source.clip = clipPlay;
        _source.Play();
        botNetwork.Path.IsUse = false;
        ator.SetBool("isDead", true);
        StartCoroutine(HideBotOnDie());
    }
    IEnumerator HideBotOnDie()
    {
        yield return new WaitForSeconds(1.5f);
        gameObject.SetActive(false);

    }
    public override void UpdateState()
    {

    }
    public override void ExitState()
    {
        _source.Stop();
    }
    public override PlayItaState GetNextState()
    {
        return StateKey;

    }
}
