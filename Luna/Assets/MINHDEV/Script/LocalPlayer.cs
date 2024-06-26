using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LocalPlayer : MonoBehaviour
{
    public static LocalPlayer Instance;
    public Transform  _localPlayer;

    private void Awake()
    {
        Instance = this;
    }

    public Vector3 GetLocalPlayer()
    {
        return _localPlayer.position;
    }    
}
