---
title: 帮助
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
dir:
  order: 23
---

<Share colorful />
<Catalog />

## 死锁问题

> [!tip]
> 框架为了保证数据在多线程之间安全并发访问，使用 tokio 提供的读写锁，需要注意在代码中获取了写锁，
> 如果此锁没有释放，后面重复获取锁会导致死锁，下面举一个简单的示例:
> 此代码会导致死锁，原因是先通过 `get_rw_lock_write_controller_data` 获取到写锁，
> 但是改锁在离开 `test_middleware` 后才会释放，后续再通过
> `get_socket_addr` 获取读锁就会导致死锁

```rust
async fn test_middleware(arc_lock_controller_data: ArcRwLockControllerData) {
    let mut controller_data: RwLockWriteControllerData =
        get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
    let response: &mut Response = controller_data.get_mut_response();
    let socket_addr: String = get_socket_addr(&arc_lock_controller_data)
        .await
        .unwrap_or_default();
    response
        .set_header(SERVER, "hyperlane")
        .set_header(CONNECTION, CONNECTION_KEEP_ALIVE)
        .set_header("SocketAddr", socket_addr);
}
```

> 修改后的代码: 此代码先获取读锁并释放了该锁，后续可以继续获取写锁

```rust
async fn test_middleware(arc_lock_controller_data: ArcRwLockControllerData) {
    let socket_addr: String = get_socket_addr(&arc_lock_controller_data)
        .await
        .unwrap_or_default();
    let mut controller_data: RwLockWriteControllerData =
        get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
    let response: &mut Response = controller_data.get_mut_response();
    response
        .set_header(SERVER, "hyperlane")
        .set_header(CONNECTION, CONNECTION_KEEP_ALIVE)
        .set_header("SocketAddr", socket_addr);
}
```

## 异步

> 由于框架本身涉及到锁的数据均采取 `tokio`中的实现，所以涉及到锁的方法调用均需要 `await`

<Bottom />
