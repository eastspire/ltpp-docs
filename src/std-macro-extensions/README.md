---
title: 标准库宏扩展
index: true
icon: book
category:
  - std-macro-extensions
  - std
  - macro
  - rust
dir:
  order: 17
---

<Share colorful />

[GITHUB 地址](https://github.com/eastspire/std-macro-extensions)

<center>

[![](https://img.shields.io/crates/v/std-macro-extensions.svg)](https://crates.io/crates/std-macro-extensions)
[![](https://img.shields.io/crates/d/std-macro-extensions.svg)](https://img.shields.io/crates/d/std-macro-extensions.svg)
[![](https://docs.rs/std-macro-extensions/badge.svg)](https://docs.rs/std-macro-extensions)
[![](https://github.com/eastspire/std-macro-extensions/workflows/Rust/badge.svg)](https://github.com/eastspire/std-macro-extensions/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/std-macro-extensions.svg)](./license)

</center>

## 说明

> [!tip]
> 这是一个为 Rust 标准库数据结构提供的宏扩展集合，简化了常见集合（如 `HashMap`、`Vec` 等）的创建和操作。

## 特性

- **简化初始化**：使用宏轻松创建常见数据结构的实例。
- **支持多种数据结构**：包括 `Vec`、`HashMap`、`Arc` 等的宏。
- **易于使用**：直观的语法使数据结构的创建更加迅速。

## 安装

要安装 `std-macro-extensions`，请运行以下命令：

```sh
cargo add std-macro-extensions
```

## 用法

以下是如何使用该 crate 提供的宏的一些示例：

### 示例：使用 `arc!`

```rust
use std_macro_extensions::*;

fn main() {
    let value = arc!(5);
}
```

### 示例：使用 `b_tree_map!`

```rust
use std_macro_extensions::*;

fn main() {
    let empty_map: BTreeMap<i32, i32> = b_tree_map!();
    let b_tree_map_a: BTreeMap<&str, &str> = b_tree_map!(
        "a" => "a",
        "b" => "b"
    );
}
```

### 示例：使用 `b_tree_map!`

```rust
use std_macro_extensions::*;

fn main() {
    let empty_set: BTreeSet<i32> = b_tree_set!();
    let number_set: BTreeSet<i32> = b_tree_set!(1, 2, 3);
}
```

### 示例：使用 `boxed!`

```rust
use std_macro_extensions::*;

fn main() {
    let boxed_value = boxed!(10);
}
```

### 示例：使用 `cell!`

```rust
use std_macro_extensions::*;

fn main() {
    let cell_value: Cell<i32> = cell!(5);
}
```

### 示例：使用 `hash_map!`

```rust
use std_macro_extensions::*;

fn main() {
    let my_map: HashMap<&str, i32> = hash_map!();
    let my_map: HashMap<&str, i32> = hash_map!("a" => 1, "b" => 2);
}
```

### 示例：使用 `hash_set!`

```rust
use std_macro_extensions::*;

fn main() {
    let my_set: HashSet<i32> = hash_set!();
    let my_set: HashSet<i32> = hash_set!(1, 2, 3);
}
```

### 示例：使用 `linked_list!`

```rust
use std_macro_extensions::*;

fn main() {
    let my_list: LinkedList<i32> = linked_list!();
    let my_list: LinkedList<i32> = linked_list!(1, 2, 3);
}
```

### 示例：使用 `mutex!`

```rust
use std_macro_extensions::*;

fn main() {
    let my_mutex: Mutex<i32> = mutex!(5);
    let lock: MutexGuard<'_, i32> = my_mutex.lock().unwrap();
}
```

### 示例：使用 `rc!`

```rust
use std_macro_extensions::*;

fn main() {
    let my_rc = rc!(5);
}
```

### 示例：使用 `refcell!`

```rust
use std_macro_extensions::*;

fn main() {
    let my_refcell = refcell!(5);
}
```

### 示例：使用 `rw_lock!`

```rust
use std_macro_extensions::*;

fn main() {
    let my_rwlock = rw_lock!(5);
}
```

### 示例：使用 `string!`

```rust
use std_macro_extensions::*;

fn main() {
    let empty_string = string!();
    let hello_string = string!("Hello");
}
```

### 示例：使用 `vector!`

```rust
use std_macro_extensions::*;

fn main() {
    let empty_vector: Vec<i32> = vector!();
    let numbers = vector!(1, 2, 3);
}
```

### 示例：使用 `vector_deque!`

```rust
use std_macro_extensions::*;

fn main() {
    let empty_deque: VecDeque<i32> = vector_deque!();
    let numbers = vector_deque!(1, 2, 3);
}
```

### 示例：使用 `join_paths!`

```rust
let combined_path: String = join_paths!("/home/", "/user/", "/documents", "file.txt");
let another_path: String = join_paths!("C:/", "/Program Files", "App");
```

### 示例：使用 `cin!`

```rust
let input: String = cin!();
println!("You typed: {}", input);
```

### 示例：使用 `cin_parse!`

```rust
let input: &str = "1 2 3";
let numbers: Vec<i32> = cin_parse!(input, Vec<i32>);
assert_eq!(numbers, vec![1, 2, 3]);
let single_input: &str = "12";
let number: i32 = cin_parse!(single_input, i32);
assert_eq!(number, 12);
```

### 示例：使用 `cout!`

```rust
let name: &str = "Alice";
let age: i32 = 30;
cout!("Name: {}, Age: {}\n", name, age);
```

### 示例：使用 `endl!`

```rust
endl!();
```

### 示例：使用 `cout_endl!`

```rust
let name: &str = "Alice";
let age: i32 = 30;
cout_endl!("Name: {}, Age: {}\n", name, age);
```

### 示例：使用 `execute!`

```rust
fn sum(data: &[i32]) -> i32 {
    data.iter().sum()
}
fn add_offset(data: &[i32], offset: i32) -> i32 {
    data.iter().map(|x| x + offset).sum()
}
let nums: Vec<i32> = vec![1, 2, 3];
let total: i32 = execute!(sum, &nums);
assert_eq!(total, 6);
let total_with_offset: i32 = execute!(add_offset, &nums, 10);
assert_eq!(total_with_offset, 36);
```

### 示例：使用 `execute_async!`

```rust
let data: Vec<i32> = vec![1, 2, 3];
async fn async_func(data: &[i32], offset: i32) -> i32 {
    data.iter().map(|x| x + offset).sum()
}
let res: i32 = execute_async!(async_func, &data, 1).await;
assert_eq!(res, 9);
```

## 可用的宏

- `arc!`：创建一个 `Arc<T>`。
- `vector!`：创建一个 `Vec<T>`。
- `map!`：创建一个 `HashMap<K, V>`。
- `set!`：创建一个 `HashSet<T>`。
- `b_tree_map!`：创建一个 `BTreeMap<K, V>`。
- `b_tree_set!`：创建一个 `BTreeSet<T>`。
- `list!`：创建一个 `LinkedList<T>`。
- `heap!`：创建一个 `BinaryHeap<T>`。
- `string!`：创建一个 `String`。
- `boxed!`：创建一个 `Box<T>`。
- `rc!`：创建一个 `Rc<T>`。
- `arc!`：创建一个 `Arc<T>`。
- `mutex!`：创建一个 `Mutex<T>`。
- `rw_lock!`：创建一个 `RwLock<T>`。
- `cell!`：创建一个 `Cell<T>`。
- `ref_cell!`：创建一个 `RefCell<T>`。
- `vector_deque!`: Creates a `VecDeque<T>`。
- `join_paths!`: 将多个路径组合成一个有效的路径，并处理重叠的斜杠。
- `cin!`: 从标准输入读取一行字符串输入。
- `cin_parse!`: 将输入解析为指定的类型或类型数组。
- `cout!`: 将格式化输出打印到标准输出（不换行）。
- `endl!`: 打印一个换行符到标准输出。
- `cout_endl!`: 打印格式化输出并追加一个换行符到标准输出，同时刷新缓冲区。
- `execute!`: 使用提供的参数调用并执行指定函数。
- `execute_async!`: 使用提供的参数调用并异步执行指定函数。

## 许可证

本项目根据 MIT 许可证授权。有关详细信息，请参见 [license](license) 文件。

## 贡献

欢迎贡献！请打开一个问题或提交拉取请求。

## 联系方式

如有任何询问，请联系作者 [root@ltpp.vip](mailto:root@ltpp.vip)。

<Bottom />
