using UnityEngine;

public class BotManager : MonoBehaviour
{
    private int totalBot;
    public static BotManager Instance;
    public int TotalBot
    {
        get => totalBot;
        set => totalBot = value;
    }

    private void Awake()
    {
        Instance = this;
    }
    public void OnBotDead()
    {
        totalBot--;
    }
    
    public void SpawnBotInstance(GameObject gameObject)
    {
        var bot = Instantiate(gameObject);
        var botControllers = bot.GetComponentsInChildren<BotController>(true);
        bot.SetActive(true);
        foreach (BotController botController in botControllers)
        {
            botController.OnBotDead += OnBotDead;

        }
    }
}