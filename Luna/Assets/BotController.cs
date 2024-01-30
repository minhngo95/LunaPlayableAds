using UnityEngine;
using UnityEngine.Serialization;

public class BotController : MonoBehaviour
{
    public enum BotState
    {
        Move,
        Shoot,
        TakeDame,
        Die
    }

    public Animator _animator;
    private Path path;
    private readonly float moveSpeed = 5;
    public GameObject _muzzle;
    [FormerlySerializedAs("_muzzleFlash")] public GameObject bullet;
    public Transform target;
    public BotState currentState = BotState.Move;
    public int moveIndex;
    public bool isMoveDone;
    public bool isDie;
    [SerializeField] private bool isTakeDame;
    private bool isShooting;
    private int pointCount;
    private float nextFireTime;
    private float shootingDelay;
    [SerializeField]
    private  int maxHealth =100000;
    private int currentHealth ;
    [SerializeField] private MeshRenderer healthBarRenderer;
    [SerializeField] private MaterialPropertyBlock matBlock;


    private void Start()
    {
        path = PathSigleton.Instance.ChoosePathAndRemove();
        pointCount = path.points.Count;
        if (path == null) gameObject.SetActive(false);
        transform.position = path.points[moveIndex].position;
        ++moveIndex;
        currentState = BotState.Move;
        matBlock = new MaterialPropertyBlock();
        healthBarRenderer.enabled = false;
        healthBarRenderer.GetPropertyBlock(matBlock);
        currentHealth= maxHealth;
    }

    private void Update()
    {
        UpdateState();
        ChangeState();
    }

    private void UpdateState()
    {
        switch (currentState)
        {
            case BotState.Move:
                Move();
                break;
            case BotState.Shoot:
                Shoot();
                break;
            case BotState.TakeDame:
                TakeDame();
                break;
            case BotState.Die:
                Dead();
                break;
        }
    }

    private void ChangeState()
    {
        switch (currentState)
        {
            case BotState.Move:
                if (isMoveDone) currentState = BotState.Shoot;
                if (isTakeDame) currentState = BotState.TakeDame;
                if (isDie) currentState = BotState.Die;
                break;
            case BotState.Shoot:
                if (isTakeDame) currentState = BotState.TakeDame;
                if (isDie) currentState = BotState.Die;
                break;
            case BotState.TakeDame:
                if (!isTakeDame)
                {
                    if (isDie) currentState = BotState.Die;
                    if (isMoveDone)
                        currentState = BotState.Shoot;
                    else
                        currentState = BotState.Move;
                }

                break;
        }
    }

    public void TakeDame()
    {
        _animator.SetBool("isHit", true);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Hit") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
        {
            _animator.SetBool("isHit", false);
            _animator.SetBool("moveDone", isMoveDone);
            isTakeDame = false;
        }
    }

    public void TakeDamage(int dame)
    {
        currentHealth -= dame;
        healthBarRenderer.enabled = true;
        var newHealthPercentage = currentHealth / (float)maxHealth;
        matBlock.SetFloat("_Fill", newHealthPercentage);
        healthBarRenderer.SetPropertyBlock(matBlock);
        if (currentHealth <= 0)
        {
            isDie = true;
            isTakeDame = false;
            return;
        }
        isTakeDame = true;
        _muzzle.SetActive(false);
    }

    public void Dead()
    {
        _muzzle.SetActive(false);
        healthBarRenderer.enabled = false;
        _animator.SetBool("isDead", true);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Death") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
        {
            gameObject.SetActive(false);
        }
    }

    private void Move()
    {
        MoveToPoint(path.points[moveIndex]);
    }


    private void Shoot()
    {
        _animator.SetBool("moveDone", true);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Rifle_Idle") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime > 1.0f)
        {
            _muzzle.SetActive(false);
            if (shootingDelay > 0)
            {
                shootingDelay -= Time.deltaTime;
            }
            else
            {
                _muzzle.SetActive(true);
                _muzzle.transform.LookAt(target);
                transform.LookAt(target);
                GameObject bullet = ObjectPool.Instance.PopFromPool(this.bullet, instantiateIfNone: true);
                bullet.transform.SetPositionAndRotation(_muzzle.transform.position, _muzzle.transform.rotation);
                bullet.GetComponent<BulletTrail>().Init(_muzzle.transform.forward);
                bullet.SetActive(true);
                shootingDelay = 3f;
            }
        }
    }


    private void MoveToPoint(Transform point)
    {
        var targetRotation = Quaternion.LookRotation(point.position - transform.position);
        if (MoveDone(targetRotation, point))
        {
            var isLastPoint = moveIndex >= pointCount;
            if (isLastPoint)
            {
                transform.SetParent(null);
                isMoveDone = true;
            }
        }
    }

    private bool MoveDone(Quaternion targetRotation, Transform point)
    {
        if (Vector3.Distance(transform.position, point.position) < 0.1f)
        {
            moveIndex++;
            return true;
        }

        transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, 10 * Time.deltaTime);
        transform.position =
            Vector3.MoveTowards(transform.position, point.position, moveSpeed * Time.deltaTime);
        return false;
    }
}