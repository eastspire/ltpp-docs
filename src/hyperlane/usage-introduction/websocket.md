---
title: WebSocket
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - websocket
order: 8
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持 `websocket` 协议，服务端自动处理协议升级，支持请求中间件，路由处理，响应中间件

### 服务端代码

> [!tip]
>
> `hyperlane` 框架发送 `websocket` 响应使用`send_response_body`，与 `sse` 相同，
> 由于 `websocket`协议基于`http`，所以可以像使用 `http` 一样处理请求。
> 如果开发者尝试调用 `send_response` 服务端响应会正常发送，但是客户端解析会出问题
> （因为服务端发送响应前需要处理成符合`websocket` 规范的响应，客户端才能正确解析）所以对于 `websocket`，
> 请统一使用 `send_response_body` 方法

```rust
pub async fn handle(ctx: Context) {
    let request_body: Vec<u8> = ctx.get_request_body().await;
    let _ = ctx.send_response_body(request_body).await;
}
```

### 客户端代码

```js
const ws = new WebSocket('ws://localhost:60000/websocket');

ws.onopen = () => {
  console.log('WebSocket opened');
  setInterval(() => {
    ws.send(`Now time: ${new Date().toISOString()}`);
  }, 1000);
};

ws.onmessage = (event) => {
  console.log('Receive: ', event.data);
};

ws.onerror = (error) => {
  console.error('WebSocket error: ', error);
};

ws.onclose = () => {
  console.log('WebSocket closed');
};
```
