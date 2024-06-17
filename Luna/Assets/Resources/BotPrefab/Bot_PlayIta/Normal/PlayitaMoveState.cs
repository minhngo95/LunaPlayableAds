 using UnityEngine;

 public class PlayitaMoveState : IState
    {
        private readonly Transform transform;
        private readonly WayPoint path;
        private int moveIndex;
        private bool isMoveDone;
        private readonly int pointCount;
        private readonly float moveSpeed;
        private readonly StateConditionManager _stateConditionManager;

        public PlayitaMoveState(StateConditionManager stateConditionManager, Transform transform, WayPoint path, float moveSpeed)
        {
            _stateConditionManager = stateConditionManager;
            this.transform = transform;
            this.path = path;
            this.moveSpeed = moveSpeed;
            moveIndex = 1;
            pointCount = path.WayPoints.Count;
        }

        public void EnterState()
        {
        }

        public void ExecuteState()
        {
            if (moveIndex >= pointCount) return;
            MoveToPoint(path.WayPoints[moveIndex]);
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
                    _stateConditionManager.SetCondition("MoveDone", true);
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

        public void ExitState()
        {
        }

        public bool CheckIsMoveDone()
        {
            return isMoveDone;
        }
    }
