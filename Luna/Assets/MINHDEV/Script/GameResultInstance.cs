using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameResultInstance : MonoBehaviour
{
    public static GameResultInstance Instance;
    public GameResultData gameResultData;

    private void Awake()
    {
        Instance = this;
    }

    public GameResultData GetGameResultData()
    {
        return gameResultData;
    }    
}
