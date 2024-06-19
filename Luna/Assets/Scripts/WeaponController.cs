using System.Collections;
using System.Linq;
using UnityEngine;
using Random = UnityEngine.Random;

public class WeaponController : MonoBehaviour
{
    [SerializeField] private WeaponInfo weaponInfo;
    [SerializeField] private LayerMask _layerMask;
    [SerializeField] private Transform _muzzleTrans;
    [SerializeField] public Transform[] Gunbarrel; // Nòng súng xoay (dùng cho súng 6 nòng)
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
    private float currentRotationSpeed = 0f; // Tốc độ quay hiện tại của nòng súng
    private bool isShooting = false; // Trạng thái đang bắn
    private bool canShoot = false; // Trạng thái có thể bắn
    private Coroutine shootingCoroutine;

    private void Awake()
    {
        _camera = Camera.main;
        _cameraTransform = _camera.transform;
        _currentBulletCount = weaponInfo.bulletCount; // Khởi tạo số lượng đạn
        Debug.Log("Initial bullet count: " + _currentBulletCount);
        EventManager.Invoke("UpdateBulletCount", _currentBulletCount); // Gửi thông báo về số lượng đạn ban đầu
        AssignAnimationClips();
    }

    private void Update()
    {
        HandleGatlingGunRotation();
        OnShooting();
    }

    private void AssignAnimationClips()
    {
        if (_animation != null && weaponInfo != null)
        {
            _animation.AddClip(weaponInfo.Fire, "Fire");
            _animation.AddClip(weaponInfo.Idle, "Idle");
            _animation.AddClip(weaponInfo._reloadAnimIn, "ReloadIn");
            _animation.AddClip(weaponInfo._reloadAnimOn, "ReloadOn");
            _animation.AddClip(weaponInfo._reloadAnimOut, "ReloadOut");
        }
    }

    private void OnShooting()
    {
        if (_isReloading)
            return;

        _timeSinceLastShoot += Time.deltaTime;
        UICrosshairItem.Instance.Narrow_Crosshair();

        if (Input.GetMouseButton(0))
        {
            isShooting = true;

            if (weaponInfo.isGatlingGun)
            {
                if (!canShoot && shootingCoroutine == null)
                {
                    shootingCoroutine = StartCoroutine(StartShootingAfterDelay());
                }

                if (canShoot && _timeSinceLastShoot >= weaponInfo.shootDelay)
                {
                    if (_currentBulletCount <= 0 && !weaponInfo.infiniteBullet)
                    {
                        StartCoroutine(Reload());
                    }
                    else
                    {
                        Shoot();
                        _timeSinceLastShoot = 0f;

                        if (!weaponInfo.infiniteBullet)
                        {
                            _currentBulletCount--;
                            Debug.Log("Bullet fired. Remaining bullets: " + _currentBulletCount);
                            EventManager.Invoke("UpdateBulletCount", _currentBulletCount);
                        }
                    }
                }
            }
            else
            {
                if (_timeSinceLastShoot >= weaponInfo.shootDelay)
                {
                    if (_currentBulletCount <= 0 && !weaponInfo.infiniteBullet)
                    {
                        StartCoroutine(Reload());
                    }
                    else
                    {
                        Shoot();
                        _timeSinceLastShoot = 0f;

                        if (!weaponInfo.infiniteBullet)
                        {
                            _currentBulletCount--;
                            Debug.Log("Bullet fired. Remaining bullets: " + _currentBulletCount);
                            EventManager.Invoke("UpdateBulletCount", _currentBulletCount);
                        }
                    }
                }
            }
        }
        else
        {
            isShooting = false;
        }

        if ((GamePlayManager.Instance.Turn == ConfigManager.Instance.GetStepCount()) && !_isShowCard)
        {
            _isShowCard = true;
            UIManager.Instance.EndGameUI();
        }
    }

    private void HandleGatlingGunRotation()
    {
        if (weaponInfo.isGatlingGun)
        {
            if (isShooting)
            {
                currentRotationSpeed += (weaponInfo.MaxSpeedRotaBarrel / weaponInfo.WaitToShoot) * Time.deltaTime;
                if (currentRotationSpeed >= weaponInfo.MaxSpeedRotaBarrel)
                {
                    currentRotationSpeed = weaponInfo.MaxSpeedRotaBarrel;
                }
            }
            else if (currentRotationSpeed > weaponInfo.MinSpeedRotaBarrel)
            {
                currentRotationSpeed -= (weaponInfo.MaxSpeedRotaBarrel / weaponInfo.TimeMinSpeed) * Time.deltaTime;
                if (currentRotationSpeed <= weaponInfo.MinSpeedRotaBarrel)
                {
                    currentRotationSpeed = weaponInfo.MinSpeedRotaBarrel;
                }
            }

            RotateGunbarrels();
        }
    }

    private IEnumerator StartShootingAfterDelay()
    {
        yield return new WaitForSeconds(weaponInfo.WaitToShoot);
        canShoot = true;
        shootingCoroutine = null;
    }

    private void RotateGunbarrels()
    {
        foreach (var barrel in Gunbarrel)
        {
            var currentRotation = barrel.localRotation.eulerAngles;
            var newRotationZ = currentRotation.z + currentRotationSpeed * Time.deltaTime;
            var newRotation = Quaternion.Euler(currentRotation.x, currentRotation.y, newRotationZ);
            barrel.localRotation = newRotation;
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

        forward += new Vector3(
            Random.Range(-weaponInfo.recoilAmount, weaponInfo.recoilAmount),
            Random.Range(-weaponInfo.recoilAmount, weaponInfo.recoilAmount),
            Random.Range(-weaponInfo.recoilAmount, weaponInfo.recoilAmount)
        );

        var shotRotation = Quaternion.Euler(Random.insideUnitCircle * weaponInfo.inaccuracy) * forward;
        var ray = new Ray(_cameraTransform.transform.position, shotRotation);
        _animation.Play("Fire");
        _animation["Fire"].speed = 2.0f; // Tăng tốc độ phát clip "Fire" gấp đôi
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

        _animation.Play("ReloadIn");
        yield return new WaitForSeconds(weaponInfo.reloadTime / 3);

        _animation.Play("ReloadOn");
        yield return new WaitForSeconds(weaponInfo.reloadTime / 3);

        _animation.Play("ReloadOut");
        yield return new WaitForSeconds(weaponInfo.reloadTime / 3);

        _currentBulletCount = weaponInfo.bulletCount;
        _isReloading = false;
        Debug.Log("Reloaded. Current bullet count: " + _currentBulletCount);
        EventManager.Invoke("UpdateBulletCount", _currentBulletCount);
    }

    private IEnumerator DecreaseRotationSpeed()
    {
        while (currentRotationSpeed > weaponInfo.MinSpeedRotaBarrel)
        {
            currentRotationSpeed -= (weaponInfo.MaxSpeedRotaBarrel / weaponInfo.TimeMinSpeed) * Time.deltaTime;
            if (currentRotationSpeed < weaponInfo.MinSpeedRotaBarrel)
            {
                currentRotationSpeed = weaponInfo.MinSpeedRotaBarrel;
            }
            yield return null;
        }
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
        return distance < radius && IsClearShot(_cameraTransform.position, target);
    }

    private bool IsClearShot(Vector3 origin, Vector3 target)
    {
        var distance = Vector3.Distance(origin, target);
        var ray = new Ray(origin, target - origin);
        return !Physics.Raycast(ray, out _, distance, _layerMask);
    }

    // Thêm phương thức nhận AnimationEvent
    public void AnimationAudioEvent()
    {
        // Thực hiện hành động khi sự kiện AnimationAudioEvent được gọi
        Debug.Log("AnimationAudioEvent called");
    }
}
