using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PathManager : MonoBehaviour
{
    [SerializeField] private List<WayPoint> _paths;
    [SerializeField] private List<WayPoint> _pathsParachute;
    [SerializeField] private List<WayPoint> _pathsAircraft;
    public static PathManager Instance;

    private void Awake()
    {
        Instance = this;
    }
    public WayPoint ChoseWayPointNormal()
    {
        return GetWayPoint(_paths);
    }
    public WayPoint ChooseWayPointParachute()
    {
        return GetWayPoint(_pathsParachute);
    }
    public WayPoint ChooseWayAirCraft()
    {
        return GetWayPoint(_pathsAircraft);
    }    
    public WayPoint GetWayPoint( List<WayPoint> paths)
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
    public void Reset(List<WayPoint> paths)
    {
        foreach (var path in paths)
        {
            path.IsUse = false;
        }
    }
}
[Serializable]
public class WayPoint
{
    public bool IsUse;
    public List<Transform> WayPoints;
    
}
