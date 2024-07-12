using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface ITakeDamage
{
    void TakeDamage(int damage);
}
public interface IReward
{
    void TakeCollect(int damage);
}