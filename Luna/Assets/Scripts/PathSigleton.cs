using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PathSigleton : MonoBehaviour
{
    [SerializeField] public List<Path> _paths;
    [SerializeField] public List<Path> _pathsParachute;
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
    public Path ChoosePathParachute()
    {
        if (_pathsParachute.Count == 0)
        {
            return null;
        }

        int randomIndex = UnityEngine.Random.Range(0, _pathsParachute.Count);
        Path chosenPath = _pathsParachute[randomIndex];
        _pathsParachute.RemoveAt(randomIndex);
        return chosenPath;
    }
}
