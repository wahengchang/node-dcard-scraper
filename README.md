# node-dcard-scraper
這個一個網站圖片爬蟲的範例, 在Node.js 的環境下, 使用 Cheerio Library 查找網頁中的圖片. 獲得圖片的 URL 後, 為了確保每一張圖片能成功下載, 所以通過 Promise 的形式連續地一張接一張下載, 利用 Node 原生的 request Library 以 streaming 的下載放到 local.

## Install
```
$ git clone git@github.com:wahengchang/node-dcard-scraper.git
$ npm install
```

Run
```js
$ npm start
```
