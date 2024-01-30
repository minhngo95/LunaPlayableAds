using UnityEngine;

public class ClickController : MonoBehaviour
{
    private int amoutOfClick = 3;
    private int numberOfClick = 0;
    [LunaPlaygroundField("Link to:")]
    [SerializeField]
    private string url = "https://play.google.com/store/apps/details?id=com.horus.sky.defense";
    private void Update()
    {
        if (Input.GetMouseButtonUp(0) )
        {
            
            numberOfClick++;
            Debug.Log("Mouse");
            ShowLink();
            return;
         
        }
    }

    private void ShowLink()
    {
        if (numberOfClick >= amoutOfClick)
        {
            amoutOfClick = 1;
            numberOfClick = 0;
            OpenLink(url);
        }
    }
    private void OpenLink(string url)
    {
        Application.OpenURL(url);
    }
}