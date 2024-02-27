using System;

public class StateTransition
{
    public Func<bool> Condition { get; }
    public IState NextState { get; }

    public StateTransition(Func<bool> condition, IState nextState)
    {
        Condition = condition ?? throw new ArgumentNullException(nameof(condition));
        NextState = nextState ?? throw new ArgumentNullException(nameof(nextState));
    }
}