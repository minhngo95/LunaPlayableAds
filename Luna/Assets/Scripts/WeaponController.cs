using System;
using System.Collections;
using System.Linq;
using UnityEngine;
using Random = UnityEngine.Random;

public class WeaponController : MonoBehaviour
{
    [SerializeField] private WeaponInfo weaponInfo;
    [SerializeField] private LayerMask _layerMask;
    [SerializeField] private Transform _muzzleTrans;
    [SerializeField] private Animation _animation;
    [SerializeField] private GameObject _bullet;
    [SerializeField] private GameObject _muzzleFlash;
    [SerializeField] private AudioSource _audioSource;
    [SerializeField] private GameObject _effect;
    [SerializeField] private bool _isShowCard;
    private Transform _cameraTransform;
    private Camera _camera;
    private float _timeSinceLastShoot = 0f; // Thời gian từ lần bắn cuối cùng
    private int _currentBulletCount; // Số lượng đạn hiện tại trong băng
    private bool _isReloading = false; // Trạng thái đang nạp đạn

    private void Awake()
    {
        _camera = Camera.main;
        _cameraTransform = _camera.transform;
        _currentBulletCount = weaponInfo.bulletCount; // Khởi tạo số lượng đạn
        Debug.Log("Initial bullet count: " + _currentBulletCount);
        EventManager.Invoke("UpdateBulletCount", _currentBulletCount); // Gửi thông báo về số lượng đạn ban đầu
    }

    private void Update()
    {
        // Nếu đang nạp đạn, không thực hiện bắn
        if (_isReloading)
            return;

        // Cập nhật thời gian từ lần bắn cuối cùng
        _timeSinceLastShoot += Time.deltaTime;

        // Gọi phương thức để thu hẹp tâm ngắm
        UICrosshairItem.Instance.Narrow_Crosshair();

        // Kiểm tra nếu người chơi nhấn chuột trái và đã đủ thời gian để bắn tiếp
        if (Input.GetMouseButton(0) && _timeSinceLastShoot >= weaponInfo.shootDelay)
        {
            // Nếu không có đạn và không ở chế độ đạn vô hạn, thực hiện nạp đạn
            if (_currentBulletCount <= 0 && !weaponInfo.infiniteBullet)
            {
                StartCoroutine(Reload());
            }
            else
            {
                _muzzleFlash.SetActive(false);
                _bullet.SetActive(false);
                Shoot();
                _timeSinceLastShoot = 0f; // Đặt lại thời gian từ lần bắn cuối cùng

                // Giảm số lượng đạn nếu không ở chế độ đạn vô hạn
                if (!weaponInfo.infiniteBullet)
                {
                    _currentBulletCount--;
                    Debug.Log("Bullet fired. Remaining bullets: " + _currentBulletCount);
                    EventManager.Invoke("UpdateBulletCount", _currentBulletCount); // Gửi thông báo về số lượng đạn thay đổi
                }
            }
        }

        // Kiểm tra điều kiện để hiển thị giao diện kết thúc game
        if ((GamePlayManager.Instance.Turn == ConfigManager.Instance.GetStepCount()) && !_isShowCard)
        {
            _isShowCard = true;
            UIManager.Instance.EndGameUI();
        }
    }

    private void Shoot()
    {
        if (this == null || _cameraTransform == null) return;

        var forward = _cameraTransform.forward;
        var targetPoint = FindPointedTransform();
        if (targetPoint != null)
        {
            if (Vector3.SqrMagnitude(targetPoint.position - _cameraTransform.position) > 0)
                forward = (targetPoint.position - _cameraTransform.position).normalized;
        }

        // Thêm độ giật vào hướng bắn
        forward += new Vector3(
            Random.Range(-weaponInfo.recoilAmount, weaponInfo.recoilAmount),
            Random.Range(-weaponInfo.recoilAmount, weaponInfo.recoilAmount),
            Random.Range(-weaponInfo.recoilAmount, weaponInfo.recoilAmount)
        );

        // Thêm độ lệch vào hướng bắn
        var shotRotation = Quaternion.Euler(Random.insideUnitCircle * weaponInfo.inaccuracy) * forward;
        var ray = new Ray(_cameraTransform.transform.position, shotRotation);
        _animation.Play();
        _audioSource.clip = weaponInfo.audioClip;
        _audioSource.Play();
        _muzzleFlash.SetActive(true);
        _bullet.SetActive(true);
        var bullet = ObjectPool.Instance.PopFromPool(_bullet, instantiateIfNone: true);
        bullet.transform.SetPositionAndRotation(_muzzleTrans.transform.position, _muzzleTrans.transform.rotation);
        bullet.GetComponent<BulletTrail>().Init(ray.direction);
        UICrosshairItem.Instance.Expand_Crosshair(15);
        if (Physics.Raycast(ray, out var hit, Mathf.Infinity, _layerMask))
        {
            var takeDamageController = hit.transform.root.gameObject.GetComponent<ITakeDamage>();
            if (takeDamageController != null) takeDamageController.TakeDamage(weaponInfo.damage);
            var effect = ObjectPool.Instance.PopFromPool(_effect, instantiateIfNone: true);
            effect.GetComponent<Effect>().Init(hit.point);
        }
    }

    private IEnumerator Reload()
    {
        _isReloading = true;
        Debug.Log("Reloading...");

        // Thêm logic chờ trong thời gian nạp đạn
        yield return new WaitForSeconds(weaponInfo.reloadTime);

        _currentBulletCount = weaponInfo.bulletCount; // Đặt lại số lượng đạn
        _isReloading = false;
        Debug.Log("Reloaded. Current bullet count: " + _currentBulletCount);
        EventManager.Invoke("UpdateBulletCount", _currentBulletCount); // Gửi thông báo về số lượng đạn sau khi nạp
    }

    private Transform FindPointedTransform()
    {
        var minCrossHairDistance = float.MaxValue;
        Transform pointedTransform = null;

        var bots = BotManager.Instance.BotNetworks;

        foreach (var bot in bots.Where(bot => bot != null && !bot.IsDead))
            foreach (var checkPoint in bot.FireAssistCheckPos)
            {
                var checkPosition = checkPoint.position;

                if (!SatisfyAutoFireCondition(checkPosition, out var crossHairDistance) ||
                    crossHairDistance > minCrossHairDistance) continue;

                minCrossHairDistance = crossHairDistance;
                pointedTransform = checkPoint;
            }

        return pointedTransform;
    }

    [SerializeField] private float radius = 33f;
    private const float ReferenceWidth = 887;

    private bool SatisfyAutoFireCondition(Vector3 target, out float distance)
    {
        var viewPosition = _camera.WorldToScreenPoint(target);
        if (viewPosition.z < 0)
        {
            distance = float.MaxValue;
            return false;
        }
        viewPosition.x -= Screen.width / 2f;
        viewPosition.y -= Screen.height / 2f;

        viewPosition *= ReferenceWidth / Screen.width;

        distance = Mathf.Sqrt(viewPosition.x * viewPosition.x + viewPosition.y * viewPosition.y);
        return distance < radius
               && IsClearShot(_cameraTransform.position, target);
    }

    private bool IsClearShot(Vector3 origin, Vector3 target)
    {
        var distance = Vector3.Distance(origin, target);
        var ray = new Ray(origin, target - origin);
        return !Physics.Raycast(ray, out _, distance, _layerMask);
    }
}
