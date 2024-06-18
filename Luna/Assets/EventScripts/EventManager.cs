using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class EventManager : MonoBehaviour
{
    private static readonly Dictionary<string, List<Delegate>> Channels = new();

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    private static void ManualReloadDomain()
    {
        Channels.Clear();
    }

    public static void AddListener<M>(string key, UnityAction<M> response)
    {
        if (Channels.TryGetValue(key, out var list))
        {
            list.Add(response);
        }
        else
        {
            Channels.Add(key, new List<Delegate> { response });
        }
    }

    public static void RemoveListener<M>(string key, UnityAction<M> response)
    {
        if (Channels.TryGetValue(key, out var list))
        {
            if (!list.Remove(response))
            {
                Debug.Log($"Fail to remove event listener {response.Method} in {response.Target}");
            }
        }
        else
        {
            Debug.Log($"Fail to find channels with key {key}");
        }
    }

    public static void Invoke<M>(string key, M data)
    {
        if (Channels.TryGetValue(key, out var list))
        {
            foreach (var action in list)
            {
                try
                {
                    if (action is UnityAction<M> unityAction)
                    {
                        unityAction.Invoke(data);
                    }
                }
                catch (Exception e)
                {
                    var content = $"Error when invoke method {action.Method} from {action.Target} \n" + e;
                    if (action.Target is MonoBehaviour monoBehaviour)
                        Debug.LogError(content, monoBehaviour.gameObject);
                    else
                        Debug.LogError(content);
                }
            }
        }
        else
        {
            Debug.Log($"Can't find listener on channel {key}");
        }
    }

#if UNITY_EDITOR
    [UnityEditor.MenuItem("Horus Tool/Log EventManager")]
    public static void Log()
    {
        foreach (var channel in Channels)
        {
            Debug.Log($"<color=yellow>Channel {channel.Key}:</color>");
            Log(channel.Key);
        }
    }

    public static void Log(string key)
    {
        if (Channels.TryGetValue(key, out var list))
        {
            foreach (var item in list)
                Debug.Log($"<color=green>{item.Method}</color> in <color=cyan>{item.Target}</color>",
                          (UnityEngine.Object)item.Target);
        }
        else
        {
            Debug.Log($"Can't find channel <color=yellow>{key}</color>");
        }
    }
#endif
}
