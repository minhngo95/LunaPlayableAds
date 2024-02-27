using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

[Serializable]
public class StateConditionManager : MonoBehaviour
{
    public Dictionary<string, bool> conditions = new Dictionary<string, bool>();

    public void RegisterCondition(string condition, bool value)
    {
        if (!conditions.ContainsKey(condition))
        {
            conditions.Add(condition, value);
        }
    }

    public bool GetCondition(string condition)
    {
        if (conditions.ContainsKey(condition))
        {
            return conditions[condition];
        }
        return false;
    }

    public void SetCondition(string condition, bool value)
    {
        if (conditions.ContainsKey(condition))
        {
            conditions[condition] = value;
        }
    }
}

#if UNITY_EDITOR
[CustomEditor(typeof(StateConditionManager))]
public class StateConditionManagerEditor : Editor
{
    SerializedProperty conditions;

    private void OnEnable()
    {
        conditions = serializedObject.FindProperty("conditions");
    }

    public override void OnInspectorGUI()
    {
        serializedObject.Update();
        StateConditionManager stateConditionManager = (StateConditionManager)target;

        EditorGUILayout.Space();
        EditorGUILayout.LabelField("Conditions", EditorStyles.boldLabel);

        EditorGUI.indentLevel++;

        List<string> keysToRemove = new List<string>();

        foreach (var condition in stateConditionManager.conditions)
        {
            EditorGUILayout.BeginHorizontal();

            EditorGUI.BeginChangeCheck();
            string conditionName = EditorGUILayout.TextField(condition.Key);
            bool conditionValue = EditorGUILayout.Toggle(condition.Value);
            if (EditorGUI.EndChangeCheck())
            {
                keysToRemove.Add(condition.Key);
                stateConditionManager.conditions.Add(conditionName, conditionValue);
            }

            EditorGUILayout.EndHorizontal();
        }

        EditorGUI.indentLevel--;

        foreach (var key in keysToRemove)
        {
            stateConditionManager.conditions.Remove(key);
        }

        EditorGUILayout.Space();
        serializedObject.ApplyModifiedProperties();
        Repaint();
        if (!Application.isPlaying)
        {
            EditorUtility.SetDirty(target);
        }
    }
}
#endif
