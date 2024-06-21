using System;
using System.Collections.Generic;
using UnityEngine;

public class PathManager : MonoBehaviour
{
    [SerializeField] private List<WayPointlist> Listwaypoint;
    public static PathManager Instance;

    private void Awake()
    {
        Instance = this;
    }

    public WayPoint GetWayPoint(BotType botType)
    {
        var wayPointList = Listwaypoint.Find(list => list.botType == botType);
        if (wayPointList != null)
        {
            var paths = wayPointList._wayPointlist;
            var availablePaths = paths.FindAll(x => x.IsUse == false);
            if (availablePaths.Count == 0)
                throw new Exception("No available paths for bot type: " + botType);

            int randomIndex = UnityEngine.Random.Range(0, availablePaths.Count);
            availablePaths[randomIndex].IsUse = true;
            return availablePaths[randomIndex];
        }
        throw new Exception("No paths found for bot type: " + botType);
    }

    public void ResetPath()
    {
        foreach (var wayPointList in Listwaypoint)
        {
            Reset(wayPointList._wayPointlist);
        }
    }

    private void Reset(List<WayPoint> paths)
    {
        foreach (var path in paths)
        {
            path.IsUse = false;
        }
    }
}

[Serializable]
public class WayPointlist
{
    public List<WayPoint> _wayPointlist;
    public BotType botType;
}

[Serializable]
public class WayPoint
{
    public bool IsUse;
    public List<Transform> WayPoints;
}
