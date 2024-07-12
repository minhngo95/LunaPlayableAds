using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WeaponEvent : MonoBehaviour
{
    public static WeaponEvent Instance;
    public  WeaponInfo weaponInfo;
    public  GameObject WeaponDefault;
    public  GameObject WeaponChange;
    private float DefaultFireRate;

    private void Awake()
    {
        Instance = this;
    }

    private void Start()
    {
        DefaultFireRate = weaponInfo.FireRate;
    }

    private void OnEnable()
    {
        EventManager.AddListener<float>(EventName.OnUpgradeFireRate, OnUpgradeFireRate);
        EventManager.AddListener<bool>(EventName.OnChangeMachineGun, OnChangeMachineGun);
    }

    private void OnDisable()
    {
        EventManager.RemoveListener<float>(EventName.OnUpgradeFireRate, OnUpgradeFireRate);
        EventManager.RemoveListener<bool>(EventName.OnChangeMachineGun, OnChangeMachineGun);
        weaponInfo.FireRate = DefaultFireRate;
    }


    private void OnChangeMachineGun(bool IsChange)
    {
        if (IsChange)
        {
            WeaponDefault.SetActive(false);
            WeaponChange.SetActive(true);
        }
        else
        {
            WeaponDefault.SetActive(true);
            WeaponChange.SetActive(false);
        }

    }

    public void OnUpgradeFireRate(float Value)
    {
        weaponInfo.FireRate -= Value;
        EventManager.Invoke(EventName.OnChangeFireRate, true);
    }    
}
