using UnityEditor;
using UnityEngine;

public class PathManagerTool : EditorWindow
{
    private PathManager pathManager;
    private SerializedObject serializedPathManager;
    private SerializedProperty listWaypointProperty;
    private GameObject pathWayPoint;

    [MenuItem("Tools/Path Manager Tool")]
    public static void ShowWindow()
    {
        GetWindow<PathManagerTool>("Path Manager Tool");
    }

    private void OnEnable()
    {
        pathManager = FindObjectOfType<PathManager>();
        if (pathManager != null)
        {
            serializedPathManager = new SerializedObject(pathManager);
            listWaypointProperty = serializedPathManager.FindProperty("Listwaypoint");
        }
    }

    private void OnGUI()
    {
        if (pathManager == null)
        {
            EditorGUILayout.HelpBox("PathManager not found in the scene. Please add a PathManager component to a GameObject.", MessageType.Warning);
            if (GUILayout.Button("Refresh"))
            {
                OnEnable();
            }
            return;
        }

        serializedPathManager.Update();

        pathWayPoint = (GameObject)EditorGUILayout.ObjectField("Path WayPoint", pathWayPoint, typeof(GameObject), true);
        EditorGUILayout.PropertyField(listWaypointProperty, new GUIContent("WayPoint Lists"), true);

        GUILayout.Space(10);
        GUILayout.Label("Custom Tool", EditorStyles.boldLabel);

        // Add button to create waypoints
        if (GUILayout.Button("Create Waypoints"))
        {
            CreateWaypoints();
        }

        serializedPathManager.ApplyModifiedProperties();
    }

    private void CreateWaypoints()
    {
        if (pathWayPoint == null)
        {
            Debug.LogError("Please assign PathWayPoint.");
            return;
        }

        for (int i = 0; i < listWaypointProperty.arraySize; i++)
        {
            SerializedProperty wayPointlistProperty = listWaypointProperty.GetArrayElementAtIndex(i);
            SerializedProperty samplePrefabProperty = wayPointlistProperty.FindPropertyRelative("SamplePrefab");

            if (samplePrefabProperty == null || samplePrefabProperty.objectReferenceValue == null)
            {
                Debug.LogError($"Please assign SamplePrefab for {wayPointlistProperty.FindPropertyRelative("botType").enumDisplayNames}.");
                continue;
            }

            int pointsPerWay = GetPointsPerWay((BotType)wayPointlistProperty.FindPropertyRelative("botType").enumValueIndex);
            CreateBotTypeWaypoints(wayPointlistProperty, (GameObject)samplePrefabProperty.objectReferenceValue, pointsPerWay);
        }
    }

    private int GetPointsPerWay(BotType botType)
    {
        switch (botType)
        {
            case BotType.Infantry:
                return 3;
            case BotType.Parachutist:
                return 4;
            case BotType.AirForce:
                return 5;
            default:
                return 3;
        }
    }

    private void CreateBotTypeWaypoints(SerializedProperty wayPointlistProperty, GameObject prefab, int pointsPerWay)
    {
        BotType botType = (BotType)wayPointlistProperty.FindPropertyRelative("botType").enumValueIndex;
        GameObject botParent = new GameObject(botType.ToString());
        botParent.transform.parent = pathWayPoint.transform;

        SerializedProperty wayPointList = wayPointlistProperty.FindPropertyRelative("_wayPointlist");
        for (int i = 0; i < wayPointList.arraySize; i++)
        {
            SerializedProperty wayPointProperty = wayPointList.GetArrayElementAtIndex(i);
            SerializedProperty wayPointsProperty = wayPointProperty.FindPropertyRelative("WayPoints");

            GameObject wayParent = new GameObject("Way" + (i + 1));
            wayParent.transform.parent = botParent.transform;

            for (int j = 0; j < pointsPerWay; j++)
            {
                GameObject point = Instantiate(prefab);
                point.name = "Point" + (j + 1);
                point.transform.parent = wayParent.transform;
                wayPointsProperty.InsertArrayElementAtIndex(j);
                wayPointsProperty.GetArrayElementAtIndex(j).objectReferenceValue = point.transform;
            }
        }
    }
}
