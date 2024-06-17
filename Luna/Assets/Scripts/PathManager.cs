using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PathManager : MonoBehaviour
{
    [SerializeField] private List<Path> _paths;
    [SerializeField] private List<Path> _pathsParachute;
    public static PathManager Instance;

    private void Awake()
    {
        Instance = this;
    }
    public Path ChoseWayPointNormal()
    {
        return GetWayPoint(_paths);
    }
    public Path ChooseWayPointParachute()
    {
        return GetWayPoint(_pathsParachute);
    }
    public Path GetWayPoint( List<Path> paths)
    {
        var path = paths.FindAll(x=>x.IsUse==false);
        int randomIndex = UnityEngine.Random.Range(0, path.Count);
        path[randomIndex].IsUse = true;
        return path[randomIndex];
    }
    public void ResetPath()
    {
        Reset(_paths);
        Reset(_pathsParachute);
    }
    public void Reset(List<Path> paths)
    {
        foreach (var path in paths)
        {
            path.IsUse = false;
        }
    }
}
[Serializable]
public class Path
{
    public bool IsUse;
    public List<Transform> WayPoints;
    
}
