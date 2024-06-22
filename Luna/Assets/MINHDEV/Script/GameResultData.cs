using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "GameResultData", menuName = "ScriptableObjects/GameResultData", order = 1)]
public class GameResultData : ScriptableObject
{
    public int TurnEnd;
    public int TurnCount;

}
