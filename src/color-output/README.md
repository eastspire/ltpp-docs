---
title: 输出库
index: true
icon: book
category:
  - color-output
  - RUST
  - OUTPUT
dir:
  order: 16
---

[GITHUB 地址](https://github.com/ltpp-universe/color-output)

[LTPP-GIT 地址](https://git.ltpp.vip/root/color-output)

<Share colorful />
<Catalog />

[![](https://img.shields.io/crates/v/color-output.svg)](https://crates.io/crates/color-output)<br>
[![](https://docs.rs/color-output/badge.svg)](https://docs.rs/color-output)<br>
[![](https://img.shields.io/crates/l/color-output.svg)](./license)<br>
[![](https://github.com/ltpp-universe/color-output/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/color-output/actions?query=workflow:Rust)

## 说明

> [!tip]
> 一个基于 rust 的保证原子操作的输出库，支持函数，构造器等多种方式实现输出功能，支持文字颜色和背景颜色自定义

## 功能

- 支持输出格式化后时间
- 支持自定义文字颜色，背景颜色，文字粗细等配置
- 支持结构体定义，输出信息
- 支持构造器定义，输出信息
- 支持单行多任务输出
- 支持多行多任务输出
- 输出原子化

## 安装

```shell
cargo add ltpp-output
```

## 代码示例

### 结构体输出

#### 使用 `output` 函数

```rust
use color_output::*;
output(Output {
    text: "test_output_struct",
    text_color: ColorType::Use(Color::Default),
    text_bg_color: ColorType::Color256(0x000000),
    show_time: true,
    time_text_color: ColorType::Rgb(255, 255, 255),
    time_bg_color: ColorType::Use(Color::Yellow),
    split: " => ",
    split_color: ColorType::Use(Color::Cyan),
    split_bg_color: ColorType::Use(Color::Yellow),
    endl: true,
    ..Default::default()
});
```

#### 使用 `output` 方法

```rust
use color_output::*;
Output {
    text: "test_output_struct_output",
    text_color: ColorType::Use(Color::Default),
    text_bg_color: ColorType::Use(Color::Blue),
    show_time: true,
    time_text_color: ColorType::Rgb(255, 255, 255),
    time_bg_color: ColorType::Use(Color::Yellow),
    split: " => ",
    split_color: ColorType::Use(Color::Cyan),
    split_bg_color: ColorType::Use(Color::Yellow),
    endl: true,
    ..Default::default()
}
.output();
```

### 数组结构体

```rust
use color_output::*;
OutputList(vec![
    Output {
        text: "test_output_list_struct_1",
        text_color: ColorType::Use(Color::Default),
        text_bg_color: ColorType::Color256(0x000000),
        show_time: true,
        time_text_color: ColorType::Rgb(255, 255, 255),
        time_bg_color: ColorType::Use(Color::Yellow),
        split: " => ",
        split_color: ColorType::Use(Color::Cyan),
        split_bg_color: ColorType::Use(Color::Yellow),
        endl: false,
        ..Default::default()
    },
    Output {
        text: "test_output_struct_output_2",
        text_color: ColorType::Use(Color::Default),
        text_bg_color: ColorType::Use(Color::Blue),
        show_time: true,
        time_text_color: ColorType::Rgb(255, 255, 255),
        time_bg_color: ColorType::Use(Color::Yellow),
        split: " => ",
        split_color: ColorType::Use(Color::Cyan),
        split_bg_color: ColorType::Use(Color::Yellow),
        endl: true,
        ..Default::default()
    },
])
.output();
```

### 构造器输出

#### 使用 `output` 函数

```rust
use color_output::*;
output(
    OutputBuilder::new_from(Output::default())
        .text("test_output_builder")
        .text_color(ColorType::Color256(0xffffff))
        .text_bg_color(ColorType::Color256(0xffffff))
        .split_bg_color(ColorType::Color256(0xffffff))
        .time_text_color(ColorType::Rgb(255, 200, 255))
        .text_blod(true)
        .time_text_blod(true)
        .show_time(true)
        .endl(true)
        .build(),
);
```

#### 使用 `output` 方法

```rust
use color_output::*;
OutputBuilder::new()
    .text("test_output_builder_output")
    .text_bg_color(ColorType::Color256(0xffffff))
    .text_color(ColorType::Color256(0xffffff))
    .time_text_color(ColorType::Rgb(255, 200, 255))
    .text_blod(true)
    .time_text_blod(true)
    .show_time(true)
    .endl(true)
    .build()
    .output();
```

### 数组构造器

```rust
use color_output::*;
OutputListBuilder::new_from(vec![Output::default()])
    .add(
        OutputBuilder::new()
            .text("text")
            .text_bg_color(ColorType::Use(Color::Blue))
            .endl(false)
            .build(),
    )
    .add(Output {
        text: "test_new_from_output_list_builder_1",
        text_color: ColorType::Use(Color::Default),
        text_bg_color: ColorType::Color256(0x3f3f3f),
        split: " => ",
        split_color: ColorType::Use(Color::Cyan),
        split_bg_color: ColorType::Use(Color::Yellow),
        endl: false,
        ..Default::default()
    })
    .add(Output {
        text: "test_new_from_output_list_builder_2",
        text_color: ColorType::Use(Color::Default),
        text_bg_color: ColorType::Use(Color::Cyan),
        split: " => ",
        split_color: ColorType::Use(Color::Cyan),
        split_bg_color: ColorType::Use(Color::Yellow),
        endl: true,
        ..Default::default()
    })
    .run();
```

### 输出宏

#### 结构体传入

```rust
use color_output::*;
output_macro!(Output {
    text: "test_proc_macro",
    text_color: ColorType::default(),
    text_bg_color: ColorType::Use(Color::Yellow),
    show_time: true,
    time_text_color: ColorType::Use(Color::Green),
    time_bg_color: ColorType::Color256(0xffffff),
    split: " => ",
    split_color: ColorType::Use(Color::Cyan),
    split_bg_color: ColorType::Use(Color::Yellow),
    endl: true,
    ..Default::default()
});
```

#### 构造器传入

```rust
use color_output::*;
output_macro!(OutputBuilder::new()
    .text("test_output_builder")
    .text_color(ColorType::Use(Color::Cyan))
    .time_text_color(ColorType::Use(Color::Blue))
    .text_blod(true)
    .time_text_blod(true)
    .show_time(true)
    .endl(true)
    .build());
```

#### 多个传入

```rust
use color_output::*;
output_macro!(
    Output {
        text: "test_proc_macro",
        text_color: ColorType::default(),
        text_bg_color: ColorType::Use(Color::Yellow),
        show_time: true,
        time_text_color: ColorType::Use(Color::Green),
        time_bg_color: ColorType::Color256(0xffffff),
        split: " => ",
        split_color: ColorType::Use(Color::Cyan),
        split_bg_color: ColorType::Use(Color::Yellow),
        endl: true,
        ..Default::default()
    },
    OutputBuilder::new()
        .text("test_output_builder1")
        .text_color(ColorType::Color256(0xffffff))
        .time_text_color(ColorType::Rgb(255, 200, 255))
        .text_blod(true)
        .time_text_blod(true)
        .show_time(true)
        .endl(true)
        .build(),
    OutputBuilder::new()
        .text("test_output_builder2")
        .text_color(ColorType::Color256(0xffffff))
        .time_text_color(ColorType::Rgb(255, 200, 255))
        .text_blod(true)
        .time_text_blod(true)
        .show_time(true)
        .endl(true)
        .build()
);
```

### 颜色使用

- `ColorType::Use`: 使用内置颜色
- `ColorType::Color256`: 十六进制
- `ColorType::Rgb`: rgb 颜色(r, g, b)

#### ColorType::Use

```rust
ColorType::Use(Color::White)
```

#### ColorType::Color256

```rust
ColorType::Color256(0xffffff)
```

#### ColorType::Rgb

```rust
ColorType::Rgb(255,255,255)
```
