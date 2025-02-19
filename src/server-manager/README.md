---
title: server-manager
index: true
icon: book
category:
  - server-manager
  - server
  - manager
dir:
  order: 38
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/cloud-storage)

<center>

[![](https://img.shields.io/crates/v/server-manager.svg)](https://crates.io/crates/server-manager)
[![](https://docs.rs/server-manager/badge.svg)](https://docs.rs/server-manager)
[![](https://github.com/ltpp-universe/server-manager/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/server-manager/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/server-manager.svg)](./LICENSE)

</center>

[Api Docs](https://docs.rs/server-manager/latest/server_manager/)

> `server-manager` 是一个用于管理服务器进程的 Rust 库。它封装了服务的启动、停止以及后台守护（daemon）模式，用户可以通过自定义配置来指定 PID 文件、日志文件等路径，同时可以将自己的异步服务器函数传入进行调用。该库支持同步和异步操作，在 Unix 和 Windows 平台下可以使用后台守护进程功能。

## 安装

在项目目录下执行下面的命令，将 server-manager 添加为依赖项：

```shell
cargo add server-manager
```

## 使用

```rust
use server_manager::*;
use std::fs;
use std::time::Duration;
let pid_file: String = "./process/test_pid.pid".to_string();
let _ = fs::remove_file(&pid_file);
let config: ServerManagerConfig = ServerManagerConfig {
    pid_file: pid_file.clone(),
};
let dummy_server = || async {
    tokio::time::sleep(Duration::from_secs(1)).await;
};
let manager = ServerManager::new(config, dummy_server);
let res: Result<(), Box<dyn std::error::Error>> = manager.start_daemon();
println!("start_daemon {:?}", res);
let res: Result<(), Box<dyn std::error::Error>> = manager.stop();
println!("stop {:?}", res);
manager.start().await;
let _ = fs::remove_file(&pid_file);
```

## 许可证

本项目遵循 MIT 许可证。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系方式

如有任何疑问，请通过 [ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip) 与作者联系。

<Bottom />
