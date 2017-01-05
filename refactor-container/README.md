# 介紹

本專案的目地是重構 state-full component。利用測試保護，進行重構。

你會看到如何使用 jest 寫測試，及引入 container 概念。

我們假設 Page component 是 state-full。
雖然我們引入 flux architecture( store、actions) 使邏輯清晰，但 Page component 本身確沒有因此得到重用性(重覆使用性)，程試碼職責稍微混亂，component 不易測試。
因此，我們會引入 container 概念，把 component 的職責再分的更清楚 - container 和 pure component。


# 檔案結構

- **app** React app 資料夾
- **public** 前端目錄
  - *inedex.html* 首頁
  - *favicon.ico* 網頁小圖標
  - **js** 打包後`bundle.js`和`vendor.bundle.js`放置位置
- *gulpfile.js* 打包前端程式
- *package.json* 專案設定檔。專案相依庫
- *server.js* 後端伺服器程式。設定公開目錄


# 安裝

請安裝 nodejs 且要有 npm(套件管理器)

``` shell
npm install
```


# 執行
1. 開啟網頁伺服器
``` shell
npm start
```
1. 用瀏覽器直接打開 `http://localhost:5105/index.html`
