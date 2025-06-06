---
title: 框架推荐工具
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - utils
  - recommend-utils
order: 2
---

<Share colorful />

## hyperlane-utils

> [!tip]
>
> `hyperlane` 框架推荐使用 `hyperlane-utils` 库（需额外安装和导入），
> 使用参考 [官方文档](../../hyperlane-utils/README.md)。

## lombok

> [!tip]
>
> `hyperlane` 框架推荐使用 `lombok` 库（需额外安装和导入），
> 使用参考 [官方文档](../../lombok-macros/README.md)。

## clonelicious

> [!tip]
>
> `hyperlane` 框架推荐使用 `clonelicious` 库，内部提供变量捕获和克隆（需额外安装和导入），
> 使用参考 [官方文档](../../clonelicious/README.md)。

## future-fn

> [!tip]
>
> `hyperlane` 框架推荐使用 `future-fn` 库（需额外安装和导入），
> 使用参考 [官方文档](../../future-fn/README.md)。

## std-macro-extensions

> [!tip]
>
> `hyperlane` 框架推荐使用 `std-macro-extensions` 库（需额外安装和导入），
> 使用参考 [官方文档](../../std-macro-extensions/README.md)。

## color-output

> [!tip]
>
> `hyperlane` 框架推荐使用 `color-output` 库（需额外安装和导入），
> 使用参考 [官方文档](../../color-output/README.md)。

## bin-encode-decode

> [!tip]
>
> `hyperlane` 框架推荐使用 `bin-encode-decode` 库（需额外安装和导入），
> 使用参考 [官方文档](../../bin-encode-decode/README.md)。

## file-operation

> [!tip]
>
> `hyperlane` 框架推荐使用 `file-operation` 库（需额外安装和导入），
> 使用参考 [官方文档](../../file-operation/README.md)。

## compare-version

> [!tip]
>
> `hyperlane` 框架推荐使用 `compare-version` 库（需额外安装和导入），
> 使用参考 [官方文档](../../compare-version/README.md)。

## hyperlane-log

> [!tip]
>
> `hyperlane` 框架使用 `hyperlane-log` 库（需额外安装和导入），
> 使用参考 [官方文档](../../hyperlane-log/README.md)。

## hyperlane-time

> [!tip]
>
> `hyperlane` 框架推荐使用 `hyperlane-time` 库（需额外安装和导入），
> 使用参考 [官方文档](../../hyperlane-time/README.md)。

## recoverable-spawn

> [!tip]
>
> `hyperlane` 框架推荐使用 `recoverable-spawn` 库（需额外安装和导入），
> 使用参考 [官方文档](../../recoverable-spawn/README.md)。

## recoverable-thread-pool

> [!tip]
>
> `hyperlane` 框架推荐使用 `recoverable-thread-pool` 库（需额外安装和导入），
> 使用参考 [官方文档](../../recoverable-thread-pool/README.md)。

## http-request

> [!tip]
>
> `hyperlane` 框架推荐使用 `http-request` 库，支持 `http` 和 `https`（需额外安装和导入），
> 使用参考 [官方文档](../../http-request/README.md)。

## hyperlane-broadcast

> [!tip]
>
> `hyperlane` 框架推荐使用 `hyperlane-broadcast` 库（需额外安装和导入），
> 使用参考 [官方文档](../../hyperlane-broadcast/README.md)。

## hyperlane-plugin-websocket

> [!tip]
>
> `hyperlane` 框架推荐使用 `hyperlane-plugin-websocket` 库（需额外安装和导入），
> 使用参考 [官方文档](../../hyperlane-plugin-websocket/README.md)。

## urlencoding

> [!tip]
>
> `hyperlane` 框架推荐使用 `urlencoding` 库（需额外安装和导入），可以实现 `url` 编解码。

## server-manager

> [!tip]
>
> `hyperlane` 框架推荐使用 `server-manager` 库（需额外安装和导入），
> 使用参考 [官方文档](../../server-manager/README.md)。

## chunkify

> [!tip]
>
> `hyperlane` 框架推荐使用 `chunkify` 库（需额外安装和导入），
> 使用参考 [官方文档](../../chunkify/README.md)。

## china_identification_card

> [!tip]
>
> `hyperlane` 框架推荐使用 `china_identification_card` 库（需额外安装和导入），
> 使用参考 [官方文档](../../china-identification-card/README.md)。

## utoipa

> [!tip]
>
> `hyperlane` 框架推荐使用 `utoipa` 库实现 `openapi`，下面是一段简单的示例代码

```rust
use hyperlane::*;
use serde::Serialize;
use serde_json;
use utoipa::{OpenApi, ToSchema};
use utoipa_rapidoc::RapiDoc;
use utoipa_swagger_ui::SwaggerUi;

#[derive(Serialize, ToSchema)]
struct User {
    name: String,
    age: usize,
}

#[derive(OpenApi)]
#[openapi(
    components(schemas(User)),
    info(title = "Hyperlane", version = "1.0.0"),
    paths(index, user, openapi_json, swagger)
)]
struct ApiDoc;

#[utoipa::path(
    get,
    path = "/openapi.json",
    responses(
        (status = 200, description = "Openapi docs", body = String)
    )
)]
async fn openapi_json(ctx: Context) {
    ctx.send_response(200, ApiDoc::openapi().to_json().unwrap())
        .await
        .unwrap();
}

#[utoipa::path(
    get,
    path = "/{file}",
    responses(
        (status = 200, description = "Openapi json", body = String)
    )
)]
async fn swagger(ctx: Context) {
    SwaggerUi::new("/{file}").url("/openapi.json", ApiDoc::openapi());
    let res: String = RapiDoc::with_openapi("/openapi.json", ApiDoc::openapi()).to_html();
    ctx.set_response_header(CONTENT_TYPE, TEXT_HTML)
        .await
        .send_response(200, res)
        .await
        .unwrap();
}

#[utoipa::path(
    get,
    path = "/",
    responses(
        (status = 302, description = "Redirect to index.html")
    )
)]
async fn index(ctx: Context) {
    ctx.set_response_header(LOCATION, "/index.html")
        .await
        .send_response(302, vec![])
        .await
        .unwrap();
}

#[utoipa::path(
    get,
    path = "/user/{name}",
    responses(
        (status = 200, description = "User", body = User)
    )
)]
async fn user(ctx: Context) {
    let name: String = ctx.get_route_param("name").await.unwrap();
    let user: User = User { name, age: 0 };
    ctx.send_response(200, serde_json::to_vec(&user).unwrap())
        .await
        .unwrap();
}

#[tokio::main]
async fn main() {
    let server: Server = Server::new();
    server.route("/", index).await;
    server.route("/user/{name}", user).await;
    server.route("/openapi.json", openapi_json).await;
    server.route("/{file}", swagger).await;
    server.run().await.unwrap();
}
```

<Bottom />
