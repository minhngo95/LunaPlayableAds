using UnityEngine;
using UnityEngine.Serialization;

public class BotController : MonoBehaviour
{
    public Animator _animator;
    private Path path;
    private readonly float moveSpeed = 5;
    public GameObject _muzzle;
    public GameObject bullet;
    public Transform target;
    public BotState currentState;
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
        currentState = new MoveState();
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
          currentState.UpdateState(this);
    }
    protected virtual void ChangeState()
    {
        if (currentState is MoveState)
        {
            if (isTakeDame)
            {
                currentState = new TakeDameState();
            }
            else if (isDie)
            {
                currentState = new DieState();
            }
            else if (isMoveDone)
            {
                currentState = new ShootState();
            }
        }
        if (currentState is ShootState && isTakeDame)
        {
            if (isDie)
            {
                currentState = new DieState();
            }

            if (isTakeDame)
            {
                currentState = new TakeDameState();
            }
        }
        if (currentState is TakeDameState && !isTakeDame)
        {
            if (isDie)
                currentState = new DieState();
            else if (isMoveDone)
                currentState = new ShootState();
            else
                currentState = new MoveState();
        }
    }
    public void TakeDameAction()
    {
        _animator.SetBool("isHit", true);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Hit") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
        {
            _animator.SetBool("isHit", false);
            _animator.SetBool("isMoveDone", isMoveDone);
            isTakeDame = false;
        }
    }

    public void TakeDamage(int damage)
    {
        currentHealth -= damage;
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

    public void DieAction()
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

    private void MoveAction()
    {
        MoveToPoint(path.points[moveIndex]);
    }


    private void ShootAction()
    {
        _animator.SetBool("isMoveDone", true);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Shoot") &&
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

    public class MoveState : BotState
    {
        public override void UpdateState(BotController botController)
        {
            botController.MoveAction();
        }
    }

    public class ShootState : BotState
    {
        public override void UpdateState(BotController botController)
        {
            botController.ShootAction();
        }
    }

    public class DieState : BotState
    {
        public override void UpdateState(BotController botController)
        {
            botController.DieAction();
        }
    }

    public class TakeDameState : BotState
    {
        public override void UpdateState(BotController botController)
        {
            botController.TakeDameAction();
        }
    }
}

public abstract class BotState
{
    public abstract void UpdateState(BotController botController);
}