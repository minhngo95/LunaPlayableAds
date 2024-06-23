using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class Parachute : MonoBehaviour
{
  [SerializeField] private BotConfigSO _botDuConfig;
  [SerializeField] private BotNetwork botNetwork;
  [SerializeField] private LayerMask ground;
  [SerializeField] private Transform spwanPos;
  [SerializeField] private GameObject body;
  [SerializeField] private AnimatorOverrideController atorOverride;
  [SerializeField] private Animator ator;
  [Header("Tốc độ rơi khi chưa bung dù,hoặc dù hỏng")] [SerializeField]
  protected float dropSpeed = 7;

  [Header("Độ đung đưa của dù theo trục X")] [SerializeField]
  AnimationCurve parachuteRotaX;

  [Header("Độ đung đưa của dù theo trục Z")] [SerializeField]
  AnimationCurve parachuteRotaZ;
  
  private Transform myTrans;
  private GameObject botCarry;
  private RuntimeAnimatorController atorBotCarry;
  private GameObject botCarryInit;
  private Vector3 landPos;
  private bool isOpenParachute;
  private float _countSwingTime;
  public float DistanceStopSwing = 1;

  private void Awake()
  {
    myTrans = transform;
  }

  private void OnEnable()
  {
    RaycastHit dropPosHit;
    if (Physics.Raycast(myTrans.position + Vector3.forward*3, Vector3.down, out dropPosHit, 300, ground))
    {
      landPos = dropPosHit.transform.position;
      landPos = new Vector3(landPos.x, 0, landPos.z);
      Debug.DrawLine(myTrans.position,landPos,Color.blue,15f);
    }

    InitParachute();
    InitCarry();
    StartCoroutine(MoveFirstDistance());
  }

  protected void InitParachute()
  {
    isOpenParachute = false;
    body.SetActive(false);
    botCarry = _botDuConfig.carryAttributes[0].botConfig.Model;
  }
  protected void InitCarry()
  {
    botCarryInit = Instantiate(botCarry, spwanPos);
    atorBotCarry = botCarryInit.GetComponentInChildren<Animator>().runtimeAnimatorController;
    botCarryInit.GetComponentInChildren<Animator>().runtimeAnimatorController = atorOverride; 
    botCarryInit.GetComponent<BotNetwork>().SetPath(PathManager.Instance.GetWayPoint(_botDuConfig.carryAttributes[0].botConfig.botType));
 
  }
  private void Update()
  {
    if (isOpenParachute)
    {
      _countSwingTime += Time.deltaTime;
      if (myTrans.position.y - landPos.y > DistanceStopSwing)
      {
        //Lắc dù
        transform.localRotation = Quaternion.Euler(parachuteRotaX.Evaluate(_countSwingTime),
          transform.localEulerAngles.y, parachuteRotaZ.Evaluate(_countSwingTime));
      }
    }
  }
 public Vector2 FirstDistanceFallMinMax = new Vector2(10, 10);
 public Vector2 HitchForceMinMax = new Vector2(1.25f, 1.7f);

  IEnumerator MoveFirstDistance()
  {
    float firstDistance = Random.Range(FirstDistanceFallMinMax.x, FirstDistanceFallMinMax.y);
    Vector3 firstDes = myTrans.position + Vector3.down * firstDistance;
    while (myTrans.position.y > firstDes.y)
    {
      myTrans.Translate(dropSpeed * Time.deltaTime * Vector3.down);
      yield return null;
    }
    body.SetActive(true);
    float hitchForce = Random.Range(HitchForceMinMax.x, HitchForceMinMax.y);
    Vector3 forceDes = myTrans.position + (Vector3.up * hitchForce);
    while (myTrans.position.y < forceDes.y)
    {
      myTrans.Translate(dropSpeed * Time.deltaTime * Vector3.up);
      yield return null;
    }
    isOpenParachute = true;
    dropSpeed = 2f;
    while (myTrans.position.y - landPos.y > DistanceStopSwing)
    {
      myTrans.Translate(dropSpeed * Time.deltaTime * Vector3.down);
      yield return null;
    }
    ator.Play("DongDu");
    botCarryInit.GetComponentInChildren<Animator>().runtimeAnimatorController = atorBotCarry; 
    botCarryInit.transform.SetParent(null);
  }

  
}
