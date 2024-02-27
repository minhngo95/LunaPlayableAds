using UnityEditor;
using UnityEngine;

public class FiniteStateMachine : MonoBehaviour
{
    public IState CurrentState { get; private set; }
    public string CurrentStateName => CurrentState != null ? CurrentState.GetType().Name : "No State";

    [SerializeField] private StateTransitionManager _stateTransitionManager;

    public void SetState(IState state)
    {
        CurrentState = state;
        CurrentState.EnterState();
    }

    public void UpdateState()
    {
        CurrentState.ExecuteState();
        var nextState = _stateTransitionManager.GetNextState(CurrentState);
        if (nextState != null) ChangeState(nextState);
    }

    public void ChangeState(IState newState)
    {
        CurrentState.ExitState();
        SetState(newState);
    }
}
#if UNITY_EDITOR
[CustomEditor(typeof(FiniteStateMachine))]
public class FiniteStateMachineEditor : Editor
{
    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();
        FiniteStateMachine finiteStateMachine = (FiniteStateMachine)target;
        if(finiteStateMachine!= null)
            EditorGUILayout.LabelField("Current State", finiteStateMachine.CurrentStateName);
        Repaint();
        if (!Application.isPlaying)
        {
            EditorUtility.SetDirty(target);
        }
    }
}
#endif