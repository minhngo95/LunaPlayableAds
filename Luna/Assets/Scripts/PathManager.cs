using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PathManager : MonoBehaviour
{
    [SerializeField] private List<PathMng> _paths;
    [SerializeField] private List<PathMng> _pathsParachute;
    public static PathManager Instance;

    private void Awake()
    {
        Instance = this;
    }
    public PathMng ChoseWayPointNormal()
    {
        return GetWayPoint(_paths);
    }
    public PathMng ChooseWayPointParachute()
    {
        return GetWayPoint(_pathsParachute);
    }
    public PathMng GetWayPoint( List<PathMng> paths)
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
    public void Reset(List<PathMng> paths)
    {
        foreach (var path in paths)
        {
            path.IsUse = false;
        }
    }
}
[Serializable]
public class PathMng
{
    public bool IsUse;
    public List<Transform> WayPoints;
    
}
