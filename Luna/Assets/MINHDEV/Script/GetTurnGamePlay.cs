using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GetTurnGamePlay : MonoBehaviour
{
    public static GetTurnGamePlay Instance;
    public int TurnPlay;
    private void Awake()
    {
        Instance = this;
    }

    public int SetTurnGame()
    {
        return TurnPlay++;
    }  

}
