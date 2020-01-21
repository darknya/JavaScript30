# Flex Pamel Gallery

### 說明&摘要

這篇主要是在操作 CSS `flex`

還有原作者有提醒，在不同的瀏覽器裡 `flex` 的 `'transitionend'` 抓到的 `event.propertyName` 會不太一樣

```
Safari transitionend event.propertyName === 'flex'
Chrome + FierFox transitionend event.propertyName === 'flex-grow'
```

所以才會在後面的 `transitionendHandler()` 裡用 `if(event.propertyName.includes('flex')) {}`


[DEMO](https://darknya.github.io/JavaScript30/05%20-%20Flex%20Panel%20Gallery/index-START.html)
