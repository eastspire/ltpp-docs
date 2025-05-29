---
title: HyperlaneWebSocket插件
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - utils
  - hyperlane-plugin-websocket
order: 21
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架推荐使用 `hyperlane-plugin-websocket` 库（需额外安装和导入）。
> 使用参考 [官方文档](../../hyperlane-plugin-websocket/README.md)。

## 示例代码

> [!tip]
> 以下代码实现了 `/:group_name` 和 `/:my_name/:your_name` 两个动态路由，分别实现了群聊和私聊功能。

```rust
use hyperlane::*;
use hyperlane_plugin_websocket::*;
use std::sync::OnceLock;

static BROADCAST_MAP: OnceLock<WebSocket> = OnceLock::new();

pub fn get_broadcast_map() -> &'static WebSocket {
    BROADCAST_MAP.get_or_init(|| WebSocket::new())
}

async fn websocket_callback(ws_ctx: Context) {
    let body: RequestBody = ws_ctx.get_request_body().await;
    ws_ctx.set_response_body(body).await;
}

async fn private_chat(ctx: Context) {
    let my_name: String = ctx.get_route_param("my_name").await.unwrap();
    let your_name: String = ctx.get_route_param("your_name").await.unwrap();
    get_broadcast_map()
        .run(
            &ctx,
            BroadcastType::PointToPoint(&my_name, &your_name),
            websocket_callback,
        )
        .await;
}

async fn group_chat(ctx: Context) {
    let your_name: String = ctx.get_route_param("group_name").await.unwrap();
    get_broadcast_map()
        .run(
            &ctx,
            BroadcastType::PointToGroup(&your_name),
            websocket_callback,
        )
        .await;
}

#[tokio::main]
async fn main() {
    let server: Server = Server::new();
    server.disable_inner_websocket_handle("/:group_name").await;
    server.route("/:group_name", group_chat).await;
    server
        .disable_inner_websocket_handle("/:my_name/:your_name")
        .await;
    server.route("/:my_name/:your_name", private_chat).await;
    server.run().await.unwrap();
}
```

<Bottom />
