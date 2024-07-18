using UnityEngine;
using UnityEngine.UI;

public class ButtomSyncLink : MonoBehaviour
{
    // Đường dẫn URL mà bạn muốn mở
    public string url = "https://play.google.com/store/apps/details?id=com.horus.sky.defense";
    public Button DownloadBtn;
    // Gán sự kiện cho nút bấm

    private void OnEnable()
    {
        DownloadBtn.onClick.AddListener(OpenLink);
    }
    private void OnDisable()
    {
        DownloadBtn.onClick.RemoveListener(OpenLink);
    }

    // Phương thức để mở URL
    public void OpenLink()
    {
        Application.OpenURL(url);
    }
}
