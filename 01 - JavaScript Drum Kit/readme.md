# Drum kit

### 說明&摘要

#### 大致方向 : 這篇主要練習的是利用`鍵盤觸發`，然後`播放聲音及改變CSS`，最後`CSS恢復原樣`

1.鍵盤觸發 : 
```
  window.addEventListener('keydown', playHandler);
```
現在所在的頁面監聽`keydown`鍵盤按下這個事件，有事件發生時就觸發`playHandler`function。

[EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

2.播放聲音及改變CSS : 
用`document.querySelector()`及`e.keycode`抓到正確的dom，在確定都有抓到之後就能執行播放聲音`audio.play()`、改變CSS`domStyle.classList.add('playing')`；`audio.currentTime = 0;`這段用意在強制聲音從頭開始播，不加這段的話，就是聲音一定要播完才能再播。

[HTMLMediaElement.currentTime](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/currentTime)

[HTMLMediaElement.play()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)

[Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

3.CSS恢復原樣 :


當按鍵按著不放時會有"playing"不會被移除掉的BUG
