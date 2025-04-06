---
title: SSE
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - sse
order: 8
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/hyperlane-quick-start/tree/sse)

> [!tip]
>
> `hyperlane` 框架支持 `SSE`，服务端主动推送，下面是每隔 `1s` 完成一次推送，并在 `10` 次后关闭连接

> [!tip]
> SSE 规范: 服务器使用 "Content-Type: text/event-stream" 表示响应是一个 SSE 事件流。
> 接着使用 "data" 字段来发送事件数据，每个事件以 "data:" 开头，后面跟着事件的内容和一个空行。
> 客户端收到这样的响应后，就可以解析其中的事件数据并进行相应的处理。

### 服务端代码

```rust
use crate::{tokio::time::sleep, *};
use std::time::Duration;

pub async fn root(ctx: Context) {
    let _ = ctx
        .set_response_header(CONTENT_TYPE, TEXT_EVENT_STREAM)
        .await
        .send_response(200, "")
        .await;
    for i in 0..10 {
        let _ = ctx
            .send_response_body(format!("data:{}{}", i, HTTP_DOUBLE_BR))
            .await;
        sleep(Duration::from_secs(1)).await;
    }
    let _ = ctx.close().await;
}
```

### 客户端代码

## 客户端代码

#### 断线重连

```js
const eventSource = new EventSource('http://127.0.0.1:60000');

eventSource.onopen = function (event) {
  console.log('Connection opened.');
};

eventSource.onmessage = function (event) {
  const eventData = JSON.parse(event.data);
  console.log('Received event data:', eventData);
};

eventSource.onerror = function (event) {
  if (event.eventPhase === EventSource.CLOSED) {
    console.log('Connection was closed.');
  } else {
    console.error('Error occurred:', event);
  }
};
```

#### 取消断线重连

```js
const eventSource = new EventSource('http://127.0.0.1:60000');

eventSource.onopen = function (event) {
  console.log('Connection opened.');
};

eventSource.onmessage = function (event) {
  const eventData = JSON.parse(event.data);
  console.log('Received event data:', eventData);
};

eventSource.onerror = function (event) {
  if (event.eventPhase === EventSource.CLOSED) {
    console.log('Connection was closed.');
    // 关闭连接，防止自动重连
    eventSource.close();
  } else {
    console.error('Error occurred:', event);
  }
};
```
