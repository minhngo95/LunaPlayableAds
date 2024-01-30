using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PathSigleton : MonoBehaviour
{
    [SerializeField] public List<Path> _paths;
    public static PathSigleton Instance;

    private void Awake()
    {
        Instance = this;
    }
    public Path ChoosePathAndRemove()
    {
        if (_paths.Count == 0)
        {
            return null;
        }
        int randomIndex = UnityEngine.Random.Range(0, _paths.Count);
        Path chosenPath = _paths[randomIndex];
        _paths.RemoveAt(randomIndex);
        return chosenPath;
    }
}
