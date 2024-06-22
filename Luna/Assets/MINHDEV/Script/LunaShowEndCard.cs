using System.Collections;
using System.Collections.Generic;
using System.Xml.Linq;
using UnityEngine;

public class LunaShowEndCard : MonoBehaviour
{
    public static LunaShowEndCard Instance;

    private void Awake()
    {
        Instance = this;
    }
    IEnumerator ShowEndCard()
    {
        yield return new WaitForSeconds(1);
        EndCardController.Instance.OpenEndCard();
        Time.timeScale = 0;
    }

    public void EndGameUI()
    {
        StartCoroutine(ShowEndCard());
    }
}
