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

在`playHandler`function裡用`document.querySelector()`及`e.keycode`抓到正確的元素，在確定都有抓到之後就能執行播放聲音`audio.play()`、改變CSS`domStyle.classList.add('playing')`；`audio.currentTime = 0;`這段用意在強制聲音從頭開始播，不加這段的話，就是聲音一定要播完才能再播。

[HTMLMediaElement.currentTime](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/currentTime)

[HTMLMediaElement.play()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)

[Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)


3.CSS恢復原樣 :

這裡是要撥放完CSS動畫之後才把class拿掉，所以用`document.querySelectorAll('.key')`抓`class = key`的元素，再用`.forEach()`跟`addEventListener`找到有觸發`'transitionend'`的元素，並同時執行`removePlayingHandler`function。

```
document.querySelectorAll('.key').forEach(key => {
      key.addEventListener('transitionend', removePlayingHandler);
    });
```

因為這個範例是用`transition: all`，會觸發多次的`'transitionend'`，但是我們只要觸發一次拿掉`playing`就夠了，所以`removePlayingHandler`裡用`if(event.propertyName === 'transform'){}`過濾掉其他的 transitionend 並執行`event.currentTarget.classList.remove('playing')`拿掉playing
。

因意外的發現`event.currentTarget`，如果這個function是用在 event handler 的話 `this === event.currentTarget`。

[Event.currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

這裡補充 `document.querySelectorAll('.key')` 抓到的結果並不是 `Array` 而是 [NodeList](https://developer.mozilla.org/zh-TW/docs/Web/API/NodeList)


後記 : 當按鍵按著不放時會有"playing"不會被移除掉的BUG，等之後有空再回頭來處裡吧...
