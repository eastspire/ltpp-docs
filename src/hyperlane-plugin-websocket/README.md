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
static BROADCAST_MAP: OnceLock<WebSocket> = OnceLock::new();

fn get_broadcast_map() -> &'static WebSocket {
    BROADCAST_MAP.get_or_init(|| WebSocket::new())
}

async fn callback(ws_ctx: Context) {
    let group_name: String = ws_ctx.get_route_param("group_name").await.unwrap();
    let receiver_count: OptionReceiverCount =
        get_broadcast_map().receiver_count(BroadcastType::PointToGroup(&group_name));
    let body: RequestBody = ws_ctx.get_request_body().await;
    ws_ctx.set_response_body(body).await;
    println!("receiver_count => {:?}", receiver_count);
    let _ = std::io::Write::flush(&mut std::io::stderr());
}

async fn send_callback(_: Context) {}

async fn client_closed_callback(ctx: Context) {
    callback(ctx).await;
}

async fn private_chat(ctx: Context) {
    let my_name: String = ctx.get_route_param("my_name").await.unwrap();
    let your_name: String = ctx.get_route_param("your_name").await.unwrap();
    get_broadcast_map()
        .run(
            &ctx,
            DEFAULT_BUFFER_SIZE,
            BroadcastType::PointToPoint(&my_name, &your_name),
            callback,
            send_callback,
            client_closed_callback,
        )
        .await;
}

async fn group_chat(ctx: Context) {
    let your_name: String = ctx.get_route_param("group_name").await.unwrap();
    get_broadcast_map()
        .run(
            &ctx,
            DEFAULT_BUFFER_SIZE,
            BroadcastType::PointToGroup(&your_name),
            callback,
            send_callback,
            client_closed_callback,
        )
        .await;
}
```

## 许可证

本项目使用 MIT 协议，详情请参见 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献代码！请提交 issue 或 pull request。

## 联系方式

如有任何问题，请联系作者 [root@ltpp.vip](mailto:root@ltpp.vip)。

<Bottom />
