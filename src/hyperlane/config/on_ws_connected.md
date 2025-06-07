---
title: Websocket连接回调
index: true
icon: book
category:
  - clone
  - web
  - rust
  - config
  - on_ws_connected
order: 9
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持配置 `websocket` 连接回调，此方法会在 `websocket` 握手成功后调用。

## 配置单个 `websocket` 连接回调

```rust
server.on_ws_connected(|ctx: Context| async move {
    // 处理
}).await;
```

## 配置多个 `websocket` 连接回调

```rust
server.on_ws_connected(|ctx: Context| async move {
    // 1
}).await;
server.on_ws_connected(|ctx: Context| async move {
    // 2
}).await;
server.on_ws_connected(|ctx: Context| async move {
    // 3
}).await;
server.on_ws_connected(|ctx: Context| async move {
    // 4
}).await;
```

<Bottom />
