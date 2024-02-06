using System;
using UnityEngine;
using UnityEngine.Serialization;
using Random = UnityEngine.Random;

public class BotController : MonoBehaviour
{
    public Animator _animator;
    public GameObject _muzzle;
    public GameObject bullet;
    public Vector3 target;
    public int moveIndex;
    public bool isMoveDone;
    public bool isDie;
    [SerializeField] protected bool isTakeDame;

    [SerializeField] protected int maxHealth = 100000;

    [SerializeField] protected MeshRenderer healthBarRenderer;
    protected readonly float moveSpeed = 5;
    protected int currentHealth;
    public BotState currentState;
    protected bool isShooting;
    [SerializeField] protected MaterialPropertyBlock matBlock;
    protected float nextFireTime;
    protected Path path;
    protected int pointCount;
    protected float shootingDelay;
    public Action OnBotDead { get; set; }
    [SerializeField] protected AudioSource _audioSource;
    [SerializeField] protected AudioSource _callTeamAudioSource;
    [SerializeField] protected AudioSource _hitAudioSource;
    

    protected virtual void Awake()
    {
        path = PathManager.Instance.ChoseWayPointNormal();
        pointCount = path.WayPoints.Count;
        if (path == null) gameObject.SetActive(false);
        transform.position = path.WayPoints[moveIndex].position;
        ++moveIndex;
        currentState = new MoveState();
        matBlock = new MaterialPropertyBlock();
        healthBarRenderer.enabled = false;
        healthBarRenderer.GetPropertyBlock(matBlock);
        currentHealth = maxHealth;
        _audioSource.clip=AudioManager.Instance.GetAudioCallTeamClip();
        _audioSource.Play();
        
    }

    protected void Update()
    {
        UpdateState();
        ChangeState();
    }

    protected void UpdateState()
    {
        currentState.UpdateState(this);
    }

    protected virtual void ChangeState()
    {
        if (currentState is MoveState)
        {
            if (isTakeDame)
                currentState = new TakeDameState();
            else if (isDie)
                currentState = new DieState();
            else if (isMoveDone) currentState = new ShootState();
        }

        if (currentState is ShootState)
        {
            if (isDie) currentState = new DieState();

            if (isTakeDame) currentState = new TakeDameState();
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

    protected virtual void TakeDameAction()
    {
        if (!_hitAudioSource.isPlaying)
        {
            _hitAudioSource.clip = AudioManager.Instance.GetAudioHitClip();
            _hitAudioSource.Play();
        }
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

    protected virtual void DieAction()
    {
        _muzzle.SetActive(false);
        healthBarRenderer.enabled = false;
        _animator.SetBool("isDead", true);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Death") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime >= 1.0f)
        {
            OnBotDead.Invoke();
            gameObject.SetActive(false);
        }
                
    }

    protected virtual void MoveAction()
    {
        MoveToPoint(path.WayPoints[moveIndex]);
    }

    private float time = 0;
    protected void ShootAction()
    {
         _animator.SetBool("isMoveDone", true);
        if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Shoot") &&
            _animator.GetCurrentAnimatorStateInfo(0).normalizedTime > 1.0f)
        {
            time += Time.deltaTime;
            if (time > Random.Range(5,10))
            {
                time = 0;
                if (!_callTeamAudioSource.isPlaying)
                {
                    _callTeamAudioSource.clip=AudioManager.Instance.GetAudioCallTeamOnFireClip();
                    _callTeamAudioSource.Play();
                }
            }
            
            _muzzle.SetActive(false);
            if (shootingDelay > 0)
            {
                shootingDelay -= Time.deltaTime;
                
            }
            else
            {
                _audioSource.clip=AudioManager.Instance.GetAudioAttackClip();
                _audioSource.Play();
                _muzzle.SetActive(true);
                transform.LookAt(target);
                Vector3 targetDir = (target - transform.position).normalized;
                _muzzle.transform.rotation = Quaternion.LookRotation(targetDir);
                transform.rotation = Quaternion.LookRotation(targetDir);

                GameObject bullet = ObjectPool.Instance.PopFromPool(this.bullet, instantiateIfNone: true);
                bullet.transform.SetPositionAndRotation(_muzzle.transform.position, _muzzle.transform.rotation);
                bullet.GetComponent<BulletTrail>().Init(targetDir);
                bullet.SetActive(true);
                shootingDelay =Random.Range(1f, 3f);
            }
        }
    }


    protected void MoveToPoint(Transform point)
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

    protected bool MoveDone(Quaternion targetRotation, Transform point)
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