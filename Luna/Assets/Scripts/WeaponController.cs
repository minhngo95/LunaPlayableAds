using System.Linq;
using UnityEngine;

public class WeaponController : MonoBehaviour
{
    [SerializeField] private float _nextFireTime;
    [SerializeField] private LayerMask _layerMask;
    [SerializeField] private int _damage = 10;
    private readonly float _shootDelay = 0.1f;
    [SerializeField] private float _timeSinceLastShoot;
    [SerializeField] private Transform _muzzleTrans;
    [SerializeField] private Animation _animation;
    [SerializeField] private GameObject _bullet;
    [SerializeField] private GameObject _muzzleFlash;
    [SerializeField] private AudioClip _audioClip; // Assign your audio clip in the Unity Editor
    [SerializeField] private AudioSource _audioSource;
    [SerializeField] private float _SphereRadius = 0.01f;
    [SerializeField] private GameObject _effect;
    [SerializeField] private bool _isShowCard;

    private void FixedUpdate()
    {
        UICrosshairItem.Instance.Narrow_Crosshair();
        if (Input.GetMouseButton(0))
        {
            _timeSinceLastShoot += Time.deltaTime;
            if (_timeSinceLastShoot > _shootDelay)
            {
                _muzzleFlash.SetActive(false);
                _bullet.SetActive(false);
                Shoot();
                _timeSinceLastShoot = 0f;
            }

            if ((GamePlayManager.Instance.Turn == ConfigManager.Instance.GetStepCount()) & !_isShowCard)
            {
                _isShowCard = true;
                UIManager.Instance.EndGameUI();
            }
        }
    }

    private readonly float inaccuracy = 0.02f;

    private void Shoot()
    {
        if (this == null || Camera.main.transform == null) return;

        var forward = Camera.main.transform.forward;
        if (FindPointedTransform() != null)
        {
            if (Vector3.SqrMagnitude( FindPointedTransform().position- Camera.main.transform.position) > 0)
                forward = (FindPointedTransform().position - Camera.main.transform.position).normalized;
        }
        var shotRotation = Quaternion.Euler(Random.insideUnitCircle * inaccuracy) * forward;
        var ray = new Ray(Camera.main.transform.position, shotRotation);
        // var screenCenter = new Vector3(Screen.width / 2, Screen.height / 2, 0);
        // var ray = Camera.main.ScreenPointToRay(screenCenter);
        RaycastHit hit;
        _animation.Play();
        _audioSource.clip = _audioClip;
        _audioSource.Play();
        _muzzleFlash.SetActive(true);
        _bullet.SetActive(true);
        var bullet = ObjectPool.Instance.PopFromPool(_bullet, instantiateIfNone: true);
        bullet.transform.SetPositionAndRotation(_muzzleTrans.transform.position, _muzzleTrans.transform.rotation);
        bullet.GetComponent<BulletTrail>().Init(ray.direction);
        UICrosshairItem.Instance.Expand_Crosshair(15);
        if (Physics.Raycast(transform.position, ray.direction, out hit, Mathf.Infinity, _layerMask))
        {
            var takeDamageController = hit.transform.root.gameObject.GetComponent<ITakeDamage>();
            if (takeDamageController != null) takeDamageController.TakeDamage(_damage);
            var effect = ObjectPool.Instance.PopFromPool(_effect, instantiateIfNone: true);
            effect.GetComponent<Effect>().Init(hit.point);
        }
    }

    private Transform FindPointedTransform()
    {
        var minCrossHairDistance = float.MaxValue;
        Transform pointedTransform = null;

        var bots = BotManagerTest.Instance.BotNetworks;

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
        var viewPosition = Camera.main.WorldToScreenPoint(target);
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
               && IsClearShot(Camera.main.transform.position, target);
    }

    private bool IsClearShot(Vector3 origin, Vector3 target)
    {
        var distance = Vector3.Distance(origin, target);
        var ray = new Ray(origin, target - origin);
        return !Physics.Raycast(ray, out _, distance, _layerMask);
    }
}