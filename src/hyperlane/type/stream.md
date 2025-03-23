---
title: Stream
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - type
  - stream
order: 8
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `Stream` 内部具体类型定义如下

```rust
pub type ArcStream = Arc<TcpStream>;
pub type OptionArcTcpStream = Option<ArcStream>;
pub type OptionArcRwLockStream = Option<ArcRwLockStream>;
pub type RwLockReadGuardTcpStream<'a> = RwLockReadGuard<'a, TcpStream>;
pub type RwLockWriteGuardTcpStream<'a> = RwLockWriteGuard<'a, TcpStream>;
pub type ArcRwLockWriteGuardTcpStream<'a> = Arc<RwLockWriteGuard<'a, TcpStream>>;
pub type OptionArcRwLockWriteGuardTcpStream<'a> = Option<ArcRwLockWriteGuardTcpStream<'a>>;
pub type ArcMutexGuardTcpStream<'a> = Arc<MutexGuard<'a, TcpStream>>;
pub type OptionArcMutexGuardTcpStream<'a> = Option<ArcMutexGuardTcpStream<'a>>;
pub type SocketHost = IpAddr;
pub type SocketPort = u16;
pub type OptionSocketHost = Option<SocketHost>;
pub type OptionSocketPort = Option<SocketPort>;
pub type OptionSocketAddr = Option<SocketAddr>;

#[derive(Clone, Debug)]
pub struct ArcRwLockStream(pub(super) ArcRwLock<TcpStream>);
```

<Bottom />
