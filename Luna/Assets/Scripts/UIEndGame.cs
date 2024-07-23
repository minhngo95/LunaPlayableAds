using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIEndGame : MonoBehaviour
{
    public static UIEndGame Instance;
    public GameObject EndGameObj;
    public UIAnimSimulator uIAnimSimulator;
    public bool IsShowEndGame;
    public bool IsCheckEndGame;

    private void Awake()
    {
        Instance = this;
    }
    private void Start()
    {
        HideUIEndGame();
    }

    private void Update()
    {
        if (IsCheckEndGame)
        {
            StartCoroutine(uIAnimSimulator.ShowUIEndGame());
            IsCheckEndGame = false; 
        } 

    }

    public void HideUIEndGame()
    {
        EndGameObj.SetActive(false);
    }    
    public void ShowUIEndGame()
    {
        OnShowUIEndGame();
    }    
    private void OnShowUIEndGame()
    {
        IsShowEndGame = true;
        StartCoroutine(uIAnimSimulator.ShowUIEndGame());
    }    
}
