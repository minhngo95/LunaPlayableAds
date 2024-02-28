using System;
using System.Collections.Generic;
using UnityEngine;

public class StateTransitionManager : MonoBehaviour
{
    private readonly Dictionary<IState, List<StateTransition>> transitions = new Dictionary<IState, List<StateTransition>>();

    public void RegisterTransition(Func<bool> condition, IState currentStateType, IState nextState)
    {
        var transition = new StateTransition(condition, nextState);

        if (!transitions.TryGetValue(currentStateType, out var stateTransitions))
        {
            stateTransitions = new List<StateTransition>();
            transitions[currentStateType] = stateTransitions;
        }

        stateTransitions.Add(transition);
    }
    public void RegisterTransition(ICondition condition, IState currentStateType, IState nextState)
    {
        var transition = new StateTransition(condition.Evaluate, nextState);

        if (!transitions.TryGetValue(currentStateType, out var stateTransitions))
        {
            stateTransitions = new List<StateTransition>();
            transitions[currentStateType] = stateTransitions;
        }

        stateTransitions.Add(transition);
    }
    public IState GetNextState(IState currentState)
    {
        if (transitions.TryGetValue(currentState, out var stateTransitions))
            foreach (var transition in stateTransitions)
                if (transition.Condition.Invoke())
                    return transition.NextState;

        return null;
    }
}