---
title: 'httpモジュールとexpressを使ってサーバー構築してみた'
description: '今回は、Node.jsに標準搭載されているhttpモジュールとexpressを使ってwebサーバーを構築していきます。'
pubDate: '2023/10/06'
heroImage: '/express-server.jpg'
---

# http モジュールを使ったサーバー

```
const http = require('http');
const express = require('express');

const PORT = 3000;

const app = express();

//expressとhttpでサーバーを生成
const server = http.createServer(app);

//ルーティング
app.get('/', (req, res) => {
    res.send('root url!');
});
server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}!`);
});
```

# Express のみを使ったサーバー

```
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('root url!');
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
```

# なぜ http を併用するサーバーを構築する必要がある？

Express のみでサーバーを作れるなら、なぜ http モジュールを併用する必要があるのでしょうか？

## http モジュールを使う意味

http モジュールを使うと、通信プロトコルを自由に設定することができます。
Express のみを使うと、http 以外のプロトコルを使うことができません。
まず、web サイトの URL を見てみましょう。
そうすると、http://〜〜.com といったように http や https といった文字の羅列から始まっているのはわかると思います。
この http。通信プロトコルと言われていて、通信の規格みたいなものなんです！
この http のおかげでインターネットから web サイトを見ることができているのですが、時々違う通信規格を使う時があるのですよ。
一つ例を挙げると webScket と言われる通信プロトコルがあります。
双方向の通信を可能にするプロトコルなのですが、詳しくは説明しません。
<img src="/http-websocket.jpg" width="500" alt="httpとwebsocket通信の違い">
チャット機能や通話時に使われていて、URL は wss://〜〜から始まります。

## http モジュールを使った websocket サーバーの構築

```
const http = require('http');
const express = require('express');
const WebSocket = require('ws');

const PORT = 3000;

const app = express();

//expressとhttpでサーバーを生成
const server = http.createServer(app);

//ルーティング
app.get('/', (req, res) => {
    res.send('root url!');
});

//websocketサーバーを生成
const wss = new WebSocket.Server({ server });

//websocketサーバーに接続した時の処理
wss.on('connection', (ws) => {
    console.log('websocket connected!');
    ws.on('message', (message) => {
        console.log(message);
    });
});

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}!`);
});
```
