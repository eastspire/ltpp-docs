---
title: async-move
index: true
icon: book
category:
  - async-move
  - spawn
  - rust
dir:
  order: 36
---

[GITHUB 地址](https://github.com/ltpp-universe/async-move)

[LTPP-GIT 地址](https://git.ltpp.vip/root/async-move)

<Share colorful />
<Catalog />

[![](https://img.shields.io/crates/v/async-move.svg)](https://crates.io/crates/async-move)<br>
[![](https://docs.rs/async-move/badge.svg)](https://docs.rs/async-move)<br>
[![](https://img.shields.io/crates/l/async-move.svg)](./LICENSE)<br>
[![](https://github.com/ltpp-universe/async-move/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/async-move/actions?query=workflow:Rust)

[官方文档](https://docs.ltpp.vip/async-move/)

[API 文档](https://docs.rs/async-move/latest/async_move/)

> 一个 Rust 库，提供宏来简化异步闭包的创建，并捕获外部状态。用于轻松清晰地构建异步代码。

## 安装

要安装 `async-move`，请运行以下命令：

```sh
cargo add async-move
```

## 使用

```rust
use async_move::*;
let string: String = String::from("test");
let number: i32 = 1;
let func = async_func!(string, number, |data| {
    let tmp_string: String = String::from("test");
    assert_eq!(string, tmp_string);
    assert_eq!(data, 1);
    assert_eq!(number, 1);
});
func(1).await;
```

## 许可证

本项目遵循 MIT 许可证。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系方式

如有任何疑问，请通过 [ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip) 与作者联系。
