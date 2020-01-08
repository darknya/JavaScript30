# Drum kit

### 說明&摘要

#### 大致方向 : 這篇主要練習的是利用`鍵盤觸發`，然後`播放聲音及顯示CSS`，最後`CSS恢復原樣`

1.鍵盤觸發 : 
```
  window.addEventListener('keydown', playHandler);
```
現在所在的頁面監聽`keydown`鍵盤按下這個事件，有事件發生時就觸發`playHandler`function。

[EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

2.播放聲音及顯示CSS : 
用`document.querySelector()`及`e.keycode`抓到正確的dom

[HTMLMediaElement.currentTime](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/currentTime)
[HTMLMediaElement.play()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)
當按鍵按著不放時會有"playing"不會被移除掉的BUG
