---
title: '(こんな原因かよ。。。) Nodejs address already in use :::5000の対処法'
description: 'Appleチップ搭載のMacを使用していると、特に他のプログラムを動かしていないのにも関わらず、address already in useが発生してしまうことがあります💦
その対処法をまとめました！'
pubDate: '2023/10/04'
heroImage: '/fix-address-arleady-in-use.jpg'
---
# エラー内容
Expressで構築したサーバーをローカルで起動しようとすると、以下のエラーが発生。
```
Nodejs address already in use :::5000
```
# 結論
MacがAirPlayの中継機として、ポート5000番を常にlistenしているそうです！
システム環境設定→共有→AirPlayレシーバーのチェックを外す

