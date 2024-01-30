using UnityEngine;

public class WeaponController : MonoBehaviour
{
    private float nextFireTime;
    public LayerMask Mask;
    public int damage = 10;
    private float updateInterval = 0.1f;

    private readonly float shootDelay = 0.2f;
    private float timeSinceLastShoot;
    public Transform _muzzleTrans;
    public Animation _animation;
    public GameObject bullet;
    public GameObject _muzzleFlash;
    public AudioClip audioClip; // Assign your audio clip in the Unity Editor
    public AudioSource audioSource;
    public float SphereRadius = 0.01f;
    private void Update()
    {
        UICrosshairItem.Instance.Narrow_Crosshair();
        if (Input.GetMouseButton(0))
        {
            timeSinceLastShoot += Time.deltaTime;
            if (timeSinceLastShoot > shootDelay)
            {
                _muzzleFlash.SetActive(false);
                bullet.SetActive(false);
                Shoot();
                timeSinceLastShoot = 0f;
            }
        }

        ;
    }

    private void Shoot()
    {
        var screenCenter = new Vector3(Screen.width / 2, Screen.height / 2, 0);
        var ray = Camera.main.ScreenPointToRay(screenCenter);
        RaycastHit hit;
        _animation.Play();
        // audioSource.clip =audioClip;
        // audioSource.Play();
        _muzzleFlash.SetActive(true);
        this.bullet.SetActive(true);
        var bullet = ObjectPool.Instance.PopFromPool(this.bullet, instantiateIfNone: true);
        bullet.transform.SetPositionAndRotation(_muzzleTrans.transform.position, _muzzleTrans.transform.rotation);
        bullet.GetComponent<BulletTrail>().Init(Quaternion.Euler(Random.Range(-SphereRadius, SphereRadius),Random.Range(-SphereRadius, SphereRadius),0)*ray.direction);
        UICrosshairItem.Instance.Expand_Crosshair(15);
        if (Physics.SphereCast(bullet.transform.position, SphereRadius, ray.direction, out hit, Mathf.Infinity, Mask))
        {
            Debug.LogError("dame");
            BotController botController = hit.transform.root.gameObject.GetComponent<BotController>();
            if (botController != null)
            {
                botController.TakeDamage(damage);
            }
        }
    }
}