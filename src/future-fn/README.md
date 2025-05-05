---
title: future-fn
index: true
icon: book
category:
  - future-fn
  - spawn
  - rust
dir:
  order: 36
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/future-fn)

<center>

[![](https://img.shields.io/crates/v/future-fn.svg)](https://crates.io/crates/future-fn)
[![](https://img.shields.io/crates/d/future-fn.svg)](https://img.shields.io/crates/d/future-fn.svg)
[![](https://docs.rs/future-fn/badge.svg)](https://docs.rs/future-fn)
[![](https://github.com/ltpp-universe/future-fn/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/future-fn/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/future-fn.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/future-fn/latest/async_move/)

> 一个 Rust 库，提供宏来简化异步闭包的创建，并捕获外部状态。用于轻松清晰地构建异步代码。

## 安装

要安装 `future-fn`，请运行以下命令：

```sh
cargo add future-fn
```

## 使用

```rust
use async_move::*;

let string: String = String::from("test");
let number: i32 = 1;
let future_fn = future_fn!(string, number, {
    let tmp_string: String = String::from("test");
    assert_eq!(string, tmp_string);
    assert_eq!(number, 1);
});
future_fn().await;

let future_fn = future_fn!(string, number, |data| {
    let tmp_string: String = String::from("test");
    assert_eq!(string, tmp_string);
    assert_eq!(data, 1);
    assert_eq!(number, 1);
});
future_fn(1).await;
```

## 许可证

本项目遵循 MIT 许可证。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系方式

如有任何疑问，请通过 [ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip) 与作者联系。

<Bottom />
