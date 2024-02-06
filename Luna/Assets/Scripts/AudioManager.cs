using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : MonoBehaviour
{
   
   [SerializeField]
   private AudioClip[] CallTeamOnFireSounds;
   [SerializeField]
   private AudioClip[] CallTeamSounds;
   [SerializeField]
   private AudioClip[] AttackSounds;
   [SerializeField]
   private AudioClip[] MissSounds;
   [SerializeField]
   private AudioClip[] HitSounds;
   public static AudioManager Instance;
   private void Awake()
   {
      Instance = this;
   }

   public AudioClip GetAudioAttackClip()
   {
      return AttackSounds[Random.Range(0, AttackSounds.Length)];
   }
   public AudioClip GetAudioCallTeamClip()
   {
      return CallTeamSounds[Random.Range(0, CallTeamSounds.Length)];
   }
   public AudioClip GetAudioHitClip()
   {
      return HitSounds[Random.Range(0, HitSounds.Length)];
   }
   public AudioClip GetAudioCallTeamOnFireClip()
   {
      return CallTeamOnFireSounds[Random.Range(0, CallTeamOnFireSounds.Length)];
   }
}
