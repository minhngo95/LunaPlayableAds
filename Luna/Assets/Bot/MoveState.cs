using UnityEngine;

public class MoveState : MonoBehaviour,IState
{
    public StateConditionManager stateConditionManager;

    public void EnterState()
    {
    }

    public void ExecuteState()
    {
        if (Input.GetMouseButtonUp(0))
        {
            stateConditionManager.SetCondition("MoveDone", true);
            stateConditionManager.SetCondition("JumpDone", false);
            Debug.Log("Move Done");
        }
    }

    public void ExitState()
    {
    }
}