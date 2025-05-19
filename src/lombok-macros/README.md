---
title: lombok属性宏
index: true
icon: book
category:
  - lombok-macros
  - macros
  - rust
dir:
  order: 27
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/lombok-macros)

<center>

[![](https://img.shields.io/crates/v/lombok-macros.svg)](https://crates.io/crates/lombok-macros)
[![](https://img.shields.io/crates/d/lombok-macros.svg)](https://img.shields.io/crates/d/lombok-macros.svg)
[![](https://docs.rs/lombok-macros/badge.svg)](https://docs.rs/lombok-macros)
[![](https://github.com/ltpp-universe/lombok-macros/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/lombok-macros/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/lombok-macros.svg)](./license)

</center>

[API 文档](https://docs.rs/lombok-macros/latest/lombok_macros/)

> 一组提供 Lombok 类似功能的 Rust 宏。

## 安装

要使用此 crate，可以运行以下命令：

```shell
cargo add lombok-macros
```

## 使用

### DisplayDebug

#### 代码

```rust
use lombok_macros::*;
use std::fmt::Debug;

#[derive(Data, Debug, Clone, DisplayDebug)]
struct LombokTest<'a, 'b, T: Clone + Debug> {
    #[get(pub(crate))]
    #[set(pub(crate))]
    list: Vec<String>,
    #[get(pub(crate))]
    opt_str_lifetime_a: Option<&'a T>,
    #[set(private)]
    #[get_mut(pub(crate))]
    opt_str_lifetime_b: Option<&'b str>,
}

fn main() {
    let mut data: LombokTest<usize> = LombokTest {
        list: Vec::new(),
        opt_str_lifetime_a: None,
        opt_str_lifetime_b: None,
    };
    let list: Vec<String> = vec!["hello".to_string(), "world".to_string()];
    data.set_list(list.clone());
    match data.get_list() {
        left_val => {
            assert_eq!(*left_val, list);
        }
    }
    let get_opt_str_lifetime_a: Option<usize> = data.get_opt_str_lifetime_a().cloned();
    assert_eq!(get_opt_str_lifetime_a, None);
    let get_mut_opt_str_lifetime_b: &mut Option<&str> = data.get_mut_opt_str_lifetime_b();
    *get_mut_opt_str_lifetime_b = Some("opt_str_lifetime_b");
    assert_eq!(
        data.get_mut_opt_str_lifetime_b().clone(),
        Some("opt_str_lifetime_b")
    );
    println!("{}", data.to_string());
}
```

#### 宏展开结果

```rs
#![feature(prelude_import)]
#[prelude_import]
use std::prelude::rust_2021::*;
#[macro_use]
extern crate std;
use lombok_macros::*;
use std::fmt::Debug;
struct LombokTest<'a, 'b, T: Clone + Debug> {
    #[get(pub(crate))]
    #[set(pub(crate))]
    list: Vec<String>,
    #[get(pub(crate))]
    opt_str_lifetime_a: Option<&'a T>,
    #[set(private)]
    #[get_mut(pub(crate))]
    opt_str_lifetime_b: Option<&'b str>,
}
impl<'a, 'b, T: Clone + Debug> LombokTest<'a, 'b, T> {
    pub(crate) fn get_list(&self) -> &Vec<String> {
        &self.list
    }
    pub(crate) fn set_list(&mut self, val: Vec<String>) -> &mut Self {
        self.list = val;
        self
    }
    pub fn get_mut_list(&mut self) -> &mut Vec<String> {
        &mut self.list
    }
    pub(crate) fn get_opt_str_lifetime_a(&self) -> &Option<&'a T> {
        &self.opt_str_lifetime_a
    }
    pub fn get_mut_opt_str_lifetime_a(&mut self) -> &mut Option<&'a T> {
        &mut self.opt_str_lifetime_a
    }
    pub fn set_opt_str_lifetime_a(&mut self, val: Option<&'a T>) -> &mut Self {
        self.opt_str_lifetime_a = val;
        self
    }
    fn set_opt_str_lifetime_b(&mut self, val: Option<&'b str>) -> &mut Self {
        self.opt_str_lifetime_b = val;
        self
    }
    pub(crate) fn get_mut_opt_str_lifetime_b(&mut self) -> &mut Option<&'b str> {
        &mut self.opt_str_lifetime_b
    }
    pub fn get_opt_str_lifetime_b(&self) -> &Option<&'b str> {
        &self.opt_str_lifetime_b
    }
}
#[automatically_derived]
impl<'a, 'b, T: ::core::fmt::Debug + Clone + Debug> ::core::fmt::Debug
for LombokTest<'a, 'b, T> {
    fn fmt(&self, f: &mut ::core::fmt::Formatter) -> ::core::fmt::Result {
        ::core::fmt::Formatter::debug_struct_field3_finish(
            f,
            "LombokTest",
            "list",
            &self.list,
            "opt_str_lifetime_a",
            &self.opt_str_lifetime_a,
            "opt_str_lifetime_b",
            &&self.opt_str_lifetime_b,
        )
    }
}
#[automatically_derived]
impl<'a, 'b, T: ::core::clone::Clone + Clone + Debug> ::core::clone::Clone
for LombokTest<'a, 'b, T> {
    fn clone(&self) -> LombokTest<'a, 'b, T> {
        LombokTest {
            list: ::core::clone::Clone::clone(&self.list),
            opt_str_lifetime_a: ::core::clone::Clone::clone(&self.opt_str_lifetime_a),
            opt_str_lifetime_b: ::core::clone::Clone::clone(&self.opt_str_lifetime_b),
        }
    }
}
impl<'a, 'b, T: Clone + Debug> std::fmt::Display for LombokTest<'a, 'b, T> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_fmt(format_args!("{0:?}", self))
    }
}
fn main() {
    let mut data: LombokTest<usize> = LombokTest {
        list: Vec::new(),
        opt_str_lifetime_a: None,
        opt_str_lifetime_b: None,
    };
    let list: Vec<String> = <[_]>::into_vec(
        #[rustc_box]
        ::alloc::boxed::Box::new(["hello".to_string(), "world".to_string()]),
    );
    data.set_list(list.clone());
    match data.get_list() {
        left_val => {
            match (&*left_val, &list) {
                (left_val, right_val) => {
                    if !(*left_val == *right_val) {
                        let kind = ::core::panicking::AssertKind::Eq;
                        ::core::panicking::assert_failed(
                            kind,
                            &*left_val,
                            &*right_val,
                            ::core::option::Option::None,
                        );
                    }
                }
            };
        }
    }
    let get_opt_str_lifetime_a: Option<usize> = data.get_opt_str_lifetime_a().cloned();
    match (&get_opt_str_lifetime_a, &None) {
        (left_val, right_val) => {
            if !(*left_val == *right_val) {
                let kind = ::core::panicking::AssertKind::Eq;
                ::core::panicking::assert_failed(
                    kind,
                    &*left_val,
                    &*right_val,
                    ::core::option::Option::None,
                );
            }
        }
    };
    let get_mut_opt_str_lifetime_b: &mut Option<&str> = data
        .get_mut_opt_str_lifetime_b();
    *get_mut_opt_str_lifetime_b = Some("opt_str_lifetime_b");
    match (&data.get_mut_opt_str_lifetime_b().clone(), &Some("opt_str_lifetime_b")) {
        (left_val, right_val) => {
            if !(*left_val == *right_val) {
                let kind = ::core::panicking::AssertKind::Eq;
                ::core::panicking::assert_failed(
                    kind,
                    &*left_val,
                    &*right_val,
                    ::core::option::Option::None,
                );
            }
        }
    };
    {
        ::std::io::_print(format_args!("{0}\n", data.to_string()));
    };
}
```

### DisplayDebugFormat

#### 代码

```rust
use lombok_macros::*;
use std::fmt::Debug;

#[derive(Lombok, Debug, Clone, DisplayDebugFormat)]
struct LombokTest<'a, 'b, T: Clone + Debug> {
    #[get(pub(crate))]
    #[set(pub(crate))]
    list: Vec<String>,
    #[get(pub(crate))]
    opt_str_lifetime_a: Option<&'a T>,
    #[set(private)]
    #[get_mut(pub(crate))]
    opt_str_lifetime_b: Option<&'b str>,
}

fn main() {
    let mut data: LombokTest<usize> = LombokTest {
        list: Vec::new(),
        opt_str_lifetime_a: None,
        opt_str_lifetime_b: None,
    };
    let list: Vec<String> = vec!["hello".to_string(), "world".to_string()];
    data.set_list(list.clone());
    match data.get_list() {
        left_val => {
            assert_eq!(*left_val, list);
        }
    }
    let get_opt_str_lifetime_a: Option<usize> = data.get_opt_str_lifetime_a().cloned();
    assert_eq!(get_opt_str_lifetime_a, None);
    let get_mut_opt_str_lifetime_b: &mut Option<&str> = data.get_mut_opt_str_lifetime_b();
    *get_mut_opt_str_lifetime_b = Some("opt_str_lifetime_b");
    assert_eq!(
        data.get_mut_opt_str_lifetime_b().clone(),
        Some("opt_str_lifetime_b")
    );
    println!("{}", data.to_string());
}
```

#### 宏展开结果

```rs
#![feature(prelude_import)]
#[prelude_import]
use std::prelude::rust_2021::*;
#[macro_use]
extern crate std;
use lombok_macros::*;
use std::fmt::Debug;
struct LombokTest<'a, 'b, T: Clone + Debug> {
    #[get(pub(crate))]
    #[set(pub(crate))]
    list: Vec<String>,
    #[get(pub(crate))]
    opt_str_lifetime_a: Option<&'a T>,
    #[set(private)]
    #[get_mut(pub(crate))]
    opt_str_lifetime_b: Option<&'b str>,
}
impl<'a, 'b, T: Clone + Debug> LombokTest<'a, 'b, T> {
    pub(crate) fn get_list(&self) -> &Vec<String> {
        &self.list
    }
    pub(crate) fn set_list(&mut self, val: Vec<String>) -> &mut Self {
        self.list = val;
        self
    }
    pub fn get_mut_list(&mut self) -> &mut Vec<String> {
        &mut self.list
    }
    pub(crate) fn get_opt_str_lifetime_a(&self) -> &Option<&'a T> {
        &self.opt_str_lifetime_a
    }
    pub fn get_mut_opt_str_lifetime_a(&mut self) -> &mut Option<&'a T> {
        &mut self.opt_str_lifetime_a
    }
    pub fn set_opt_str_lifetime_a(&mut self, val: Option<&'a T>) -> &mut Self {
        self.opt_str_lifetime_a = val;
        self
    }
    fn set_opt_str_lifetime_b(&mut self, val: Option<&'b str>) -> &mut Self {
        self.opt_str_lifetime_b = val;
        self
    }
    pub(crate) fn get_mut_opt_str_lifetime_b(&mut self) -> &mut Option<&'b str> {
        &mut self.opt_str_lifetime_b
    }
    pub fn get_opt_str_lifetime_b(&self) -> &Option<&'b str> {
        &self.opt_str_lifetime_b
    }
}
#[automatically_derived]
impl<'a, 'b, T: ::core::fmt::Debug + Clone + Debug> ::core::fmt::Debug
for LombokTest<'a, 'b, T> {
    fn fmt(&self, f: &mut ::core::fmt::Formatter) -> ::core::fmt::Result {
        ::core::fmt::Formatter::debug_struct_field3_finish(
            f,
            "LombokTest",
            "list",
            &self.list,
            "opt_str_lifetime_a",
            &self.opt_str_lifetime_a,
            "opt_str_lifetime_b",
            &&self.opt_str_lifetime_b,
        )
    }
}
#[automatically_derived]
impl<'a, 'b, T: ::core::clone::Clone + Clone + Debug> ::core::clone::Clone
for LombokTest<'a, 'b, T> {
    fn clone(&self) -> LombokTest<'a, 'b, T> {
        LombokTest {
            list: ::core::clone::Clone::clone(&self.list),
            opt_str_lifetime_a: ::core::clone::Clone::clone(&self.opt_str_lifetime_a),
            opt_str_lifetime_b: ::core::clone::Clone::clone(&self.opt_str_lifetime_b),
        }
    }
}
impl<'a, 'b, T: Clone + Debug> std::fmt::Display for LombokTest<'a, 'b, T> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_fmt(format_args!("{0:#?}", self))
    }
}
fn main() {
    let mut data: LombokTest<usize> = LombokTest {
        list: Vec::new(),
        opt_str_lifetime_a: None,
        opt_str_lifetime_b: None,
    };
    let list: Vec<String> = <[_]>::into_vec(
        #[rustc_box]
        ::alloc::boxed::Box::new(["hello".to_string(), "world".to_string()]),
    );
    data.set_list(list.clone());
    match data.get_list() {
        left_val => {
            match (&*left_val, &list) {
                (left_val, right_val) => {
                    if !(*left_val == *right_val) {
                        let kind = ::core::panicking::AssertKind::Eq;
                        ::core::panicking::assert_failed(
                            kind,
                            &*left_val,
                            &*right_val,
                            ::core::option::Option::None,
                        );
                    }
                }
            };
        }
    }
    let get_opt_str_lifetime_a: Option<usize> = data.get_opt_str_lifetime_a().cloned();
    match (&get_opt_str_lifetime_a, &None) {
        (left_val, right_val) => {
            if !(*left_val == *right_val) {
                let kind = ::core::panicking::AssertKind::Eq;
                ::core::panicking::assert_failed(
                    kind,
                    &*left_val,
                    &*right_val,
                    ::core::option::Option::None,
                );
            }
        }
    };
    let get_mut_opt_str_lifetime_b: &mut Option<&str> = data
        .get_mut_opt_str_lifetime_b();
    *get_mut_opt_str_lifetime_b = Some("opt_str_lifetime_b");
    match (&data.get_mut_opt_str_lifetime_b().clone(), &Some("opt_str_lifetime_b")) {
        (left_val, right_val) => {
            if !(*left_val == *right_val) {
                let kind = ::core::panicking::AssertKind::Eq;
                ::core::panicking::assert_failed(
                    kind,
                    &*left_val,
                    &*right_val,
                    ::core::option::Option::None,
                );
            }
        }
    };
    {
        ::std::io::_print(format_args!("{0}\n", data.to_string()));
    };
}
```

## 许可

本项目采用 MIT 许可证，详细内容请参见 [license](license) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系

如有任何问题，请通过邮件联系作者 [ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
