using UnityEngine;

[CreateAssetMenu(fileName = "WeaponInfo", menuName = "ScriptableObjects/WeaponInfo", order = 1)]
public class WeaponInfo : ScriptableObject
{
    public int damage = 10;
    public float shootDelay = 0.1f;
  
    public AudioClip audioClip;
    public float inaccuracy = 0.01f;
    public float recoilAmount = 0.1f;
    public int bulletCount = 30; // Số lượng đạn trong băng
    public float reloadTime = 2f; // Thời gian nạp đạn
    public bool infiniteBullet = false; // Chế độ đạn vô hạn

    public AnimationClip Fire;
    public AnimationClip Idle;
    public AnimationClip _reloadAnimIn;
    public AnimationClip _reloadAnimOn;
    public AnimationClip _reloadAnimOut;

    public float LocalTimeScale;

}
