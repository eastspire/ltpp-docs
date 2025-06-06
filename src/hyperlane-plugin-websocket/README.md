---
title: HyperlaneWebSocket插件
index: false
icon: book
category:
  - hyperlane-plugin-websocket
dir:
  order: 46
---

<Share colorful />

[GITHUB 地址](https://github.com/eastspire/hyperlane-plugin-websocket)

<center>

[![](https://img.shields.io/crates/v/hyperlane-plugin-websocket.svg)](https://crates.io/crates/hyperlane-plugin-websocket)
[![](https://img.shields.io/crates/d/hyperlane-plugin-websocket.svg)](https://img.shields.io/crates/d/hyperlane-plugin-websocket.svg)
[![](https://docs.rs/hyperlane-plugin-websocket/badge.svg)](https://docs.rs/hyperlane-plugin-websocket)
[![](https://github.com/eastspire/hyperlane-plugin-websocket/workflows/Rust/badge.svg)](https://github.com/eastspire/hyperlane-plugin-websocket/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/hyperlane-plugin-websocket.svg)](./LICENSE)

</center>

[官方文档](https://docs.ltpp.vip/hyperlane-plugin-websocket/)

[API 文档](https://docs.rs/hyperlane-plugin-websocket/latest/hyperlane_plugin_websocket/)

> hyperlane 框架的 WebSocket 插件

## 安装

使用以下命令添加此依赖：

```shell
cargo add hyperlane-plugin-websocket
```

## 使用示例

```rust
use hyperlane::*;
use hyperlane_plugin_websocket::*;

static BROADCAST_MAP: OnceLock<WebSocket> = OnceLock::new();

fn get_broadcast_map() -> &'static WebSocket {
    BROADCAST_MAP.get_or_init(|| WebSocket::new())
}

async fn on_ws_connected(ctx: Context) {
    tokio::spawn(async move {
        let group_name: String = ctx.get_route_param("group_name").await.unwrap();
        let broadcast_type: BroadcastType<'_> = BroadcastType::PointToGroup(&group_name);
        let receiver_count: OptionReceiverCount =
            get_broadcast_map().receiver_count(broadcast_type);
        let data: String = format!("receiver_count => {:?}", receiver_count).into();
        get_broadcast_map().send(broadcast_type, data).unwrap();
        println!("[on_ws_connected]receiver_count => {:?}", receiver_count);
        let _ = std::io::Write::flush(&mut std::io::stderr());
    });
}

async fn group_chat(ws_ctx: Context) {
    let group_name: String = ws_ctx.get_route_param("group_name").await.unwrap();
    let key: BroadcastType<'_> = BroadcastType::PointToGroup(&group_name);
    let mut receiver_count: OptionReceiverCount = get_broadcast_map().receiver_count(key);
    let mut body: RequestBody = ws_ctx.get_request_body().await;
    if body.is_empty() {
        receiver_count = get_broadcast_map().pre_decrement_receiver_count(key);
        body = format!("receiver_count => {:?}", receiver_count).into();
    }
    ws_ctx.set_response_body(body).await;
    println!("[group_chat]receiver_count => {:?}", receiver_count);
    let _ = std::io::Write::flush(&mut std::io::stderr());
}

async fn group_closed(ctx: Context) {
    let group_name: String = ctx.get_route_param("group_name").await.unwrap();
    let key: BroadcastType<'_> = BroadcastType::PointToGroup(&group_name);
    let receiver_count: OptionReceiverCount =
        get_broadcast_map().pre_decrement_receiver_count(key);
    let body: String = format!("receiver_count => {:?}", receiver_count);
    ctx.set_response_body(body).await;
    println!("[group_closed]receiver_count => {:?}", receiver_count);
    let _ = std::io::Write::flush(&mut std::io::stderr());
}

async fn private_chat(ctx: Context) {
    let my_name: String = ctx.get_route_param("my_name").await.unwrap();
    let your_name: String = ctx.get_route_param("your_name").await.unwrap();
    let key: BroadcastType<'_> = BroadcastType::PointToPoint(&my_name, &your_name);
    let mut receiver_count: OptionReceiverCount = get_broadcast_map().receiver_count(key);
    let mut body: RequestBody = ctx.get_request_body().await;
    if body.is_empty() {
        receiver_count = get_broadcast_map().pre_decrement_receiver_count(key);
        body = format!("receiver_count => {:?}", receiver_count).into();
    }
    ctx.set_response_body(body).await;
    println!("[private_chat]receiver_count => {:?}", receiver_count);
    let _ = std::io::Write::flush(&mut std::io::stderr());
}

async fn private_closed(ctx: Context) {
    let my_name: String = ctx.get_route_param("my_name").await.unwrap();
    let your_name: String = ctx.get_route_param("your_name").await.unwrap();
    let key: BroadcastType<'_> = BroadcastType::PointToPoint(&my_name, &your_name);
    let receiver_count: OptionReceiverCount =
        get_broadcast_map().pre_decrement_receiver_count(key);
    let body: String = format!("receiver_count => {:?}", receiver_count);
    ctx.set_response_body(body).await;
    println!("[private_closed]receiver_count => {:?}", receiver_count);
    let _ = std::io::Write::flush(&mut std::io::stderr());
}

async fn sended(ctx: Context) {
    let msg: String = ctx.get_response_body_string().await;
    println!("[on_sended]msg => {}", msg);
    let _ = std::io::Write::flush(&mut std::io::stderr());
}

async fn private_chat_route(ctx: Context) {
    let my_name: String = ctx.get_route_param("my_name").await.unwrap();
    let your_name: String = ctx.get_route_param("your_name").await.unwrap();
    let key: BroadcastType<'_> = BroadcastType::PointToPoint(&my_name, &your_name);
    get_broadcast_map()
        .run(&ctx, 1024, key, private_chat, sended, private_closed)
        .await;
}

async fn group_chat_route(ctx: Context) {
    let your_name: String = ctx.get_route_param("group_name").await.unwrap();
    let key: BroadcastType<'_> = BroadcastType::PointToGroup(&your_name);
    get_broadcast_map()
        .run(&ctx, 1024, key, group_chat, sended, group_closed)
        .await;
}

#[tokio::main]
async fn main() {
    let server: Server = Server::new();
    server.host("0.0.0.0").await;
    server.port(60000).await;
    server.enable_nodelay().await;
    server.disable_linger().await;
    server.http_line_buffer_size(4096).await;
    server.ws_buffer_size(4096).await;
    server.disable_internal_ws_handler("/{group_name}").await;
    server.route("/{group_name}", group_chat_route).await;
    server
        .disable_internal_ws_handler("/{my_name}/{your_name}")
        .await;
    server
        .route("/{my_name}/{your_name}", private_chat_route)
        .await;
    server.on_ws_connected(on_ws_connected).await;
    server.run().await.unwrap();
}
```

## 许可证

本项目使用 MIT 协议，详情请参见 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献代码！请提交 issue 或 pull request。

## 联系方式

如有任何问题，请联系作者 [root@ltpp.vip](mailto:root@ltpp.vip)。

<Bottom />
