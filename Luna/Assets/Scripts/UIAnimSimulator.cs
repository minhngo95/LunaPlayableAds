using System.Collections;
using UnityEngine;

public class UIAnimSimulator : MonoBehaviour
{
    public RectTransform TextRect;
    public CanvasGroup TextCanvas;
    public float durationAppear = 2.0f; // Thời gian để chữ hiện rõ và to lên hoặc ngược lại
    public float durationDisappear = 2.0f; // Thời gian để chữ hiện rõ và to lên hoặc ngược lại
    public float existTime = 2.0f; // Thời gian để chữ hiện rõ và to lên hoặc ngược lại
    public Vector3 DefaultScale; // Thời gian để chữ hiện rõ và to lên hoặc ngược lại
    public Vector3 targetScale; // Kích thước tối đa của chữ



    public void StartAnimateTextAppear()
    {
        StartCoroutine(AnimateTextAppear());
    }

    IEnumerator AnimateTextAppear()
    {
        yield return new WaitForSeconds(0.5f);
        Vector3 initialScale = DefaultScale;
        TextCanvas.alpha = 0;
        TextRect.localScale = initialScale;
        float elapsedTime = 0f;

        while (elapsedTime < durationAppear)
        {
            float t = elapsedTime / durationAppear;
            TextCanvas.alpha = Mathf.Lerp(0, 1, t);
            TextRect.localScale = Vector3.Lerp(initialScale, targetScale, t);
            elapsedTime += Time.deltaTime;
            yield return null;
        }

        TextCanvas.alpha = 1;
        TextRect.localScale = targetScale;

        yield return new WaitForSeconds(existTime);
        float initialAlpha = TextCanvas.alpha;
        float elapsedTime2 = 0f;

        while (elapsedTime2 < durationDisappear)
        {
            float t = elapsedTime2 / durationDisappear;
            TextCanvas.alpha = Mathf.Lerp(initialAlpha, 0, t);
            TextRect.localScale = Vector3.Lerp(targetScale, DefaultScale, t);
            elapsedTime2 += Time.deltaTime;
            yield return null;
        }

        TextCanvas.alpha = 0;
        TextRect.localScale = DefaultScale;
    }
}
