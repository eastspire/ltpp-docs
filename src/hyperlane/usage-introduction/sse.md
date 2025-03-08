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
order: 7
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持 `SSE`，服务端主动推送，下面是每隔 `1s` 完成一次推送，并在 `10` 次后关闭连接

```rust
use crate::*;
use hyperlane::tokio::time::sleep;
use std::time::Duration;

pub async fn root(controller_data: ControllerData) {
    let _ = controller_data
        .set_response_header(CONTENT_TYPE, TEXT_EVENT_STREAM)
        .await
        .send_response(200, "")
        .await;
    for i in 0..10 {
        let _ = controller_data
            .send_response_body(format!("data: {}{}", i, HTTP_DOUBLE_BR))
            .await;
        sleep(Duration::from_secs(1)).await;
    }
    let _ = controller_data.close().await;
}
```
