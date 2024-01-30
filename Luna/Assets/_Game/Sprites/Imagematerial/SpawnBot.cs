using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnBot : MonoBehaviour
{
    public GameObject botPrefab;
    public float spawnInterval = 1f;
    public int UPPER = 10;
    void Start()
    {
        StartCoroutine(SpawnBotRoutine());
    }

    // Coroutine để thực hiện việc spawn
    IEnumerator SpawnBotRoutine()
    {
        for (int i = 0; i < UPPER; i++)
        {
            SpawnBotInstance();
            yield return new WaitForSeconds(spawnInterval);
        }

    }
    // Hàm để spawn một đối tượng
    void SpawnBotInstance()
    {
        var gameObject=Instantiate(botPrefab, Vector3.zero, Quaternion.identity);
        gameObject.SetActive(true);
    }

    void Update()
    {
        // Các logic cập nhật khác có thể được thêm vào đây
    }
}