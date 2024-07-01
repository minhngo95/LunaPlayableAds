using UnityEngine;
using UnityEngine.UI;

public class BotDeathHandler : MonoBehaviour
{
    public static BotDeathHandler Instance { get; private set; } // Singleton instance

    public Camera mainCamera; // Camera chính trong Scene
    public GameObject headShotIconPrefab; // Prefab của icon HeadShot
    public Canvas uiCanvas; // Canvas chính của UI

    private void Awake()
    {
        // Đảm bảo rằng chỉ có một instance của Singleton
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
        }
        else
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
    }

    // Phương thức gọi khi bot chết
    public void OnBotDeath(Vector3 botPosition)
    {
        // Chuyển đổi vị trí bot từ thế giới sang màn hình
        Vector3 screenPosition = mainCamera.WorldToScreenPoint(botPosition);

        // Tạo icon HeadShot mới
        GameObject headShotIcon = Instantiate(headShotIconPrefab, uiCanvas.transform);

        // Đặt vị trí của icon trên UI Canvas
        RectTransform rectTransform = headShotIcon.GetComponent<RectTransform>();
        rectTransform.position = screenPosition;

        // Tùy chọn: Thêm logic để icon tự động biến mất sau một khoảng thời gian
        Destroy(headShotIcon, 2.0f); // Icon sẽ biến mất sau 2 giây
    }
}
