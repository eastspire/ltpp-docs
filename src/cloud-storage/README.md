---
title: cloud-storage
index: true
icon: book
category:
  - cloud-storage
  - picture
  - bed
dir:
  order: 37
---

<Share colorful />
<Catalog />

[GITHUB 地址](https://github.com/ltpp-universe/cloud-storage)

> 基于 Rust hyperlane 框架开发的图床服务端，支持多种文件类型上传

## 使用现有地址（服务器不在大陆且经过多个服务器中转，接口会比较慢）

> 接口地址：https://file.ltpp.vip

## 本地部署

### 克隆

```sh
git clone git@github.com:ltpp-universe/cloud-storage.git
```

### 运行

```sh
cargo run
```

## 接口

### 添加资源接口

#### 请求信息

| 请求方法 | 请求路径  | 查询参数         | 请求体           | 描述                                             |
| -------- | --------- | ---------------- | ---------------- | ------------------------------------------------ |
| POST     | /add_file | key: `file_name` | 文件的二进制内容 | 上传文件，`file_name` 为文件完整名称（包含后缀） |

#### 返回信息

| 字段 | 类型   | 描述                             |
| ---- | ------ | -------------------------------- |
| code | int    | 请求处理结果，成功为 1，失败为 0 |
| msg  | string | 说明信息                         |
| data | string | 返回的 URL 地址                  |

### 接口返回示例

#### 成功

```json
{
  "code": 1,
  "msg": "ok",
  "data": "https://file.ltpp.vip/aaaVaabOaabVaabTaabLaaaVaabWaabPaabJaab0aab1aabYaabLaabFaabIaabLaabKaaaVaabMaabPaabSaabLaaaVaaaYaaaWaaaYaaa1aaaVaaaWaaaYaaaVaaaWaaa1aaaVaabJaaa0aaaWaaa2aabIaaaXaaa0aabLaaa1aaa5aabKaabIaaa0aabLaabJaaa2aabJaaa1aabHaaa1aabHaaa0aaa4aaa5aabKaaaWaaaWaaaXaabKaabMaabJaabLaabHaabHaaa3aaa4aaa2aaa0aabHaabMaaa5aaaWaaaZaabHaabMaabHaabLaaa0aaa1aabLaabHaaa3aabHaabIaaa0aaa5aaaWaaaXaaa5aabIaaaWaaa3aaa3aabH.png"
}
```

#### 失败

```json
{
  "code": 0,
  "msg": "missing file_name",
  "data": ""
}
```

### 资源加载接口

> 使用添加接口返回的地址即可

## 许可证

本项目遵循 MIT 许可证。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系方式

如有任何疑问，请通过 [ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip) 与作者联系。

<Bottom />
