using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BotNetwork : MonoBehaviour,ITakeDamage
{
    [SerializeField] int _maxHealth = 100;
    [SerializeField] List<Transform> _fireAssistCheckPos = new List<Transform>();
    [SerializeField] Path _path;
    [SerializeField] int _currentHealth;
    [SerializeField] private bool isDead;
    public bool IsDead => isDead;
    public Action<int> OnTakeDamage { get; set; }
    public Action OnBotDead { get; set; }
    public Path Path => _path;
    public List<Transform> FireAssistCheckPos=> _fireAssistCheckPos;
    private void Awake()
    {
        OnBotDead+= Die;
        OnTakeDamage += CacularHealth;
        _currentHealth = _maxHealth;
    }

    public void TakeDamage(int damage)
    {
        OnTakeDamage.Invoke(damage);
    }
    public void CacularHealth(int damage)
    {
        _currentHealth -= damage;
        if (_currentHealth <= 0)
        {
            isDead= true;
            OnBotDead.Invoke();
        }
    }
    public void Die()
    {
        isDead = true;
    }
    public void SetPath(Path path)
    {
        _path = path;
    }
}


