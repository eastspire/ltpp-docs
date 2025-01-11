---
title: LTPP-在线运行代码
index: true
icon: book
category:
  - LTPP-在线运行代码
  - WEB
  - IDE
  - 后端
dir:
  order: 13
---

<Share colorful />
<Catalog />

## 前端文档

[前端文档](../LTPP-WEB-IDE/README.md)

## 功能

> [!tip]
> 支持在线运行代码

## 接口

### https://code.ltpp.vip/

#### 请求参数

```json
{
  "language": "c|cpp|rust|javascript|typescript|php|python|ruby|java|go|csharp",
  "code": "需要运行的代码",
  "testin": "标准输入"
}
```

#### 响应参数

##### 运行成功

```json
{
  "code": 1,
  "data": "代码标准输出",
  "time": 代码用时（MS）,
  "memory": 代码内存消耗（KB）
}
```

##### 运行错误/失败

```json
{
  "code": -1,
  "data": "代码错误输出/失败信息",
  "time": 代码用时（MS）,
  "memory": 代码内存消耗（KB）
}
```

<Bottom />
