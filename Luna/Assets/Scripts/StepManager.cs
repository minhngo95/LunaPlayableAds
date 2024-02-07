using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StepManager : MonoBehaviour
{
   [SerializeField]private SpawnBot _spawnBotNormal;
   [SerializeField]private SpawnBot _spawnBotParachute;
   public static StepManager Instance;
   public int test=0;
   public int Step  { get; set; }
   private void Awake()
   {
      Instance = this;
   }

   // private void OnEnable()
   // {
   //    SetData();
   //    StepStart();
   // }

   private void Update()
   {
      if (CheckStepDone())
      {
         
         BotManager.Instance.TotalBot= ConfigManager.Instance.GetStepData(Step).GetTotalBot();
         PathManager.Instance.ResetPath();
         StartCoroutine(StepDelay());

      }
   }

   IEnumerator StepDelay()
   {
       UIManager.Instance.UpdateStepText(Step);
       UIManager.Instance.SetEnableStepText(true);
       yield return new WaitForSeconds(2);
       UIManager.Instance.SetEnableStepText(false);
       SetData();
       StepStart();
       Step++;
   }
   public bool CheckStepDone()
   {
      return BotManager.Instance.TotalBot<=0&&Step<ConfigManager.Instance.GetStepCount();
   }
   public void SetData()
   {
         _spawnBotParachute.InitData(ConfigManager.Instance.GetStepData(Step).NumberParachute);
         _spawnBotNormal.InitData(ConfigManager.Instance.GetStepData(Step).NumberBot);
      
   }
   public void StepStart()
   {
      _spawnBotParachute.Run();
      _spawnBotNormal.Run();
   }
}
