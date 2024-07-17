using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIEndGame : MonoBehaviour
{
    public static UIEndGame Instance;
    public GameObject EndGameObj;
    public bool IsShowEndGame;

    private void Awake()
    {
        Instance = this;
    }
    private void Start()
    {
        HideUIEndGame();
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
        EndGameObj.SetActive(true);
    }    
}
