# 介紹

本專案包含基本的 React app ，且使用 [alt](http://alt.js.org) ([flux 框架](https://facebook.github.io/flux/docs/in-depth-overview.html#content)) 框架來組織前端。

雖然本專案包含前端、後端和測試，但本專案的目地在建立前端的練習和測試環境，所以我們簡化後端程式。

首先，我們不會提及太多的細節，但會儘力用白話的方法讓您了解概觀。因為一個能獨立運作的網頁，它會含蓋前後端甚至發佈環境，他們的範圍太大，所以我們只專注在前端。

接下來，有幾件事您需要先了解：
1. React app 是用 ES6 語法撰寫的。因為 ES6 還不是標準，但還是可以用轉換器(`babel`)轉成原生的 javascript 語法。可以參考[ECMAScript 6 入門](http://es6.ruanyifeng.com)
1. React app 我們不會直接送到網頁，我們會利用打包程式(`gulp`)把所有檔案打包成一個檔案(`bundle.js`)；也就是說網頁只需載入一份檔案就可以
1. 打包程式(`gulp`)會做三件事，你會在 `public/js` 資料夾看到它們
 1. 轉換 ES6 語法
 1. 打包 React app 成 `bundle.js`
 1. 打包相依的前端庫 `vendor.bundle.js`
1. `public` 同時會放靜態檔(`index.html`，`favicon.ico`)和動態檔(`bundle.js`，`vendor.bundle.js`)
1. 我們將後端伺服器的公開目錄設定在 `public`；也就是說當你在瀏覽器輸入 `http://localhost:5105/index.html` 會得到 `public/index.html`

最後，您可以自行修改這份專案，若你要撰寫後端，後端的結構是需要改善的。你亦可以使用一些框架，像 [express MVC 框架](http://expressjs.com)…等，可以讓後端有維護性。


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
