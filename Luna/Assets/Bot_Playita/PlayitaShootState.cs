  using UnityEngine;

  public class PlayitaShootState : MonoBehaviour, IState
    {
        private Transform _transform;
        private readonly Vector3 _target;
        private readonly Animator _animator;
        private float _time;
        private float _shootingDelay;
        private StateConditionManager _stateConditionManager;
        private readonly GameObject _muzzle;
        private readonly AudioSource _audioSource;
        private readonly GameObject _bullet;

        public PlayitaShootState(StateConditionManager stateConditionManager, Transform transform, Vector3 target,
            Animator _animator, float shootingDelay, GameObject muzzle, AudioSource audioSource, GameObject bullet)
        {
            _transform = transform;
            _target = target;
            this._animator = _animator;
            _shootingDelay = shootingDelay;
            _muzzle = muzzle;
            _audioSource = audioSource;
            _stateConditionManager = stateConditionManager;
            _bullet = bullet;
        }

        public void EnterState()
        {
        }

        public void ExecuteState()
        {
            _transform.LookAt(_target);
            _animator.SetBool("isMoveDone", true);
            if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Shoot") &&
                _animator.GetCurrentAnimatorStateInfo(0).normalizedTime > 1.0f)
            {
                _time += Time.deltaTime;
                if (_time > Random.Range(5, 10)) _time = 0;

                _muzzle.SetActive(false);
                if (_shootingDelay > 0)
                {
                    _shootingDelay -= Time.deltaTime;
                }
                else
                {
                    _audioSource.clip = AudioManager.Instance.GetAudioAttackClip();
                    _audioSource.Play();
                    _muzzle.SetActive(true);
                    var targetDir = (_target - _muzzle.transform.position).normalized;
                    _muzzle.transform.rotation = Quaternion.LookRotation(targetDir);
                    _transform.rotation = Quaternion.LookRotation(targetDir);
                    var bullet = ObjectPool.Instance.PopFromPool(_bullet, instantiateIfNone: true);
                    bullet.transform.SetPositionAndRotation(_muzzle.transform.position, _muzzle.transform.rotation);
                    bullet.GetComponent<BulletTrail>().Init(targetDir);
                    bullet.SetActive(true);
                    _shootingDelay = Random.Range(1f, 3f);
                }
            }
        }

        public void ExitState()
        {
        }
    }