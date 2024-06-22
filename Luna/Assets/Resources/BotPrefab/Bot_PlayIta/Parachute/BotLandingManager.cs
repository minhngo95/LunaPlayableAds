using UnityEngine;

public class BotLandingManager : MonoBehaviour
{
    public static BotLandingManager Instance { get; private set; }
    public int TotalLandCount { get; private set; }

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }

    public void IncrementLandCount()
    {
        TotalLandCount++;
        Debug.Log("Total land count: " + TotalLandCount);
    }
}
