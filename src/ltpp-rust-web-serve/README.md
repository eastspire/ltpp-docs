---
title: LTPP-WEB服务器
index: true
icon: book
category:
  - LTPP-WEB服务器文档
  - RUST
  - WEB
  - 服务端
dir:
  order: 7
---

[GITHUB 地址](https://github.com/ltpp-universe/RUST-WEB-SERVE)

[GITLAB 地址](https://jihulab.com/ltpp-universe/RUST-WEB-SERVE)

<Share colorful />
<Catalog />

> [!tip]
> 该项目于 2024 年 5 月 1 日开始开发

## 预期功能

| 功能                     | 支持情况 | 当前情况 |
| ------------------------ | -------- | -------- |
| 多线程支持               | 是       | 是       |
| 服务支持配置化           | 是       | 是       |
| 防盗链支持               | 是       | 是       |
| gzip 支持                | 是       | 是       |
| 反向代理支持             | 是       | 是       |
| 自定义状态码对应资源文件 | 是       | 是       |
| 日志支持                 | 是       | 是       |
| 负载均衡支持             | 是       | 是       |
| 域名绑定解析支持         | 是       | 是       |
| 资源解析                 | 是       | 是       |
| history 模式支持         | 是       | 是       |
| 自定义响应头             | 是       | 是       |

## 目前进度

- [x] 自定义响应头
- [x] 多线程支持
- [x] 配置化
- [x] 日志输出
- [x] 资源解析
- [x] history 模式支持
- [x] 域名绑定支持
- [x] 一个端口对应多域名支持
- [x] 反向代理支持
- [x] 负载均衡支持
- [x] 防盗链支持
- [x] gzip 支持

## 错误页

- 在 `root_path` 下名称为 `对应状态码.html`，例如 `404` 对应页面 `404.html`

## JSON 示例

> 首次运行会自动生成 `config.json` 配置文件，填写好后重新运行即可

> [!tip]
> 以上配置将当前目录作为访问地址的根目录，
> 监听了 `80` 和 `81` 端口，绑定 `IP` 和 `域名` 为 `127.0.0.1` 和 `localhost` 用来处理请求，
> 当访问为空则重写路径到当前目录的 `index.html`（适用于 `Vue` 等打包后的资源），
> 日志保存在当前目录 `logs` 下

> [!tip]
> 配置中的 `listen_ip` 为服务端 `IP`， `bind_server_name` 下的 `key` 为域名或者 `IP`， 一般 `listen_ip` 为 `127.0.0.1`，
> 如果 `bind_server_name` 配置了 `localhost` 域名，那么可以使用 `localhost` 访问，
> 但是不支持 `127.0.0.1`，如需支持 `127.0.0.1`，在 `bind_server_name` 中添加即可
> 如果本地做了映射，需要同时添加映射的域名和 `127.0.0.1`

## 反向代理

- 系统会检测 `proxy` 数组里每个元素是否是合法 `URL`，如果是合法 `URL` 那么系统会加入到反向代理的列表，如果最终反向代理列表为空则会加载静态资源
- 反向代理会映射请求路径和请求参数，如果配置文件 `proxy` 中的元素加了路径，系统会忽略
- 反向代理时，会随机从反向代理列表中获取一个代理地址 `PROXY_URL` ，系统会截取 `PROXY_URL` 字段除了 `path` 部分的 `url`，实际 `path` 来自请求时的 `path`，参数会进行拼接，如果 `PROXY_URL` 参数和请求参数冲突，请求参数会追加在 `PROXY_URL` 参数后面

## 负载均衡

- 反向代理时，会随机从反向代理列表中获取一个代理地址 `PROXY_URL`

## GZIP

- 请求头 `Accept-Encoding` 需要包含 `gzip` 并且响应头 `Content-Encoding` 需要包含 `gzip`
- 配置 `gzip_level` 用于设置压缩率，范围从 `1 - 9`，越大压缩的越小，耗时也会更久，建议 4/5 即可

## 异常

- 如果出现页面/请求加载异常的情况，需要增加 `buffer_size` 数值

## 防盗链

- `hotlink_protection` 使用正则进行匹配（系统内部会额外处理../防盗链情况）

## 运行效果

[配置文件示例](./config.md)

[运行效果](./run.md)

## 日志

> 支持配置，日期和完整请求记录

[日志地址](./log.md)

<Bottom />
