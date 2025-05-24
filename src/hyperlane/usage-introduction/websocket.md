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
order: 9
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持 `websocket` 协议，服务端自动处理协议升级，支持请求中间件，路由处理，响应中间件。

### 服务端代码

> [!tip]
>
> `hyperlane` 框架发送 `websocket` 响应使用`send_response_body`，与 `sse` 相同。
> 由于 `websocket`协议基于`http`，所以可以像使用 `http` 一样处理请求。
> 如果开发者尝试调用 `send_response` 服务端响应会正常发送，但是客户端解析会出问题
> （因为服务端发送响应前需要处理成符合`websocket` 规范的响应，客户端才能正确解析）。所以对于 `websocket`，
> 请统一使用 `send_response_body` 方法。

#### 单点发送

```rust
pub async fn handle(ctx: Context) {
    let request_body: Vec<u8> = ctx.get_request_body().await;
    let _ = ctx.send_response_body(request_body).await;
}
```

#### 广播发送

> [!tip]
>
> 需要阻塞住当前处理函数，将后续所有请求在处理函数中处理。
> 这里使用 `tokio` 的 `select` 来处理多个请求，使用 [`hyperlane-broadcast`](../../hyperlane-broadcast/README.md) 来实现广播。
> 需要特别注意，如果 `server` 没有配置 [`enable_inner_websocket_handle`](../config/enable_inner_websocket_handle.md) ，群发消息必须要求客户端连接后主动向服务端发送一条消息（空消息即可），否则不会接收到广播的信息，
> 因为服务端在框架内部会先完成握手，然后等待读取一次客户端请求，才会执行到用户代码。
> 如果配置了则连接后即可接收到广播的信息。

> [!tip]
>
> 完整代码参考 [`GroupChat`](../project/group-chat.md) 。

```rust
use super::*;

static BROADCAST_CHANNEL: OnceLock<Broadcast<ResponseBody>> = OnceLock::new();

fn ensure_broadcast_channel() -> Broadcast<ResponseBody> {
    BROADCAST_CHANNEL
        .get_or_init(|| Broadcast::default())
        .clone()
}

pub async fn handle(ctx: Context) {
    if ctx.get_stream().await.is_none() {
        ctx.aborted().await;
        return;
    }
    let stream: ArcRwLockStream = ctx.get_stream().await.unwrap();
    let mut first_request: Request = ctx.get_request().await;
    let broadcast: Broadcast<ResponseBody> = ensure_broadcast_channel();
    let mut receiver: BroadcastReceiver<Vec<u8>> = broadcast.subscribe();
    loop {
        tokio::select! {
            request_res = Request::websocket_request_from_stream(&stream, 10000) => {
                if request_res.is_err() {
                    break;
                }
                let request = request_res.unwrap_or_default();
                let body: RequestBody = request.get_body().clone();
                first_request.set_body(body.clone());
                if broadcast.send(body).is_err() {
                    break;
                }
            },
            msg_res = receiver.recv() => {
                if let Ok(msg) = msg_res {
                    if ctx.send_response_body(msg).await.is_err() || ctx.flush().await.is_err() {
                        break;
                    }
                }
           }
        }
    }
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
