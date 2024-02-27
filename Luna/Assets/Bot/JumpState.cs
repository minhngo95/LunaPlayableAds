using UnityEngine;

public class JumpState : MonoBehaviour,IState
{
    public StateConditionManager stateConditionManager;

    public void EnterState()
    {
    }

    public void ExecuteState()
    {
        if (Input.GetMouseButtonUp(0))
        {
            stateConditionManager.SetCondition("JumpDone", true);
            stateConditionManager.SetCondition("MoveDone", false);
            Debug.Log("Jump Done");
        }
    }

    public void ExitState()
    {
    }
}