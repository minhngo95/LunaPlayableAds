using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WeaponEvent : MonoBehaviour
{
    public static WeaponEvent Instance;
    public  WeaponInfo weaponInfo;
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
    }
    private void OnDisable()
    {
        EventManager.RemoveListener<float>(EventName.OnUpgradeFireRate, OnUpgradeFireRate);
        weaponInfo.FireRate = DefaultFireRate;
    }

    public void OnUpgradeFireRate(float Value)
    {
        weaponInfo.FireRate -= Value;
        EventManager.Invoke(EventName.OnChangeFireRate, true);
    }    
}
