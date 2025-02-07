---
title: LTPP-在线开发平台
index: true
icon: book
category:
  - LTPP-在线开发平台
  - LTPP
dir:
  order: 2
---

[WEB 系统地址](https://ltpp.vip)

[GITHUB 地址](https://github.com/ltpp-universe/LTPP-APP-Flutter)

<Share colorful />
<Catalog />

## 简介

> [!tip]
> LTPP `WEB` 基于 `Vue2.js` + `VueX` + `EventBus` + `WebWorker` + `Echarts` + `ElementUI` + `Animate.css` 开发 <br>
> LTPP `后端` 基于 `Webman` + `GatewayWorker` 框架开发 <br>
> LTPP 运行在 `Docker` 环境 <br>
> LTPP `APP` 基于`Flutter`框架开发 <br>
> LTPP `客户端` 基于`Electron` 和 `Tauri` 框架开发

## 部署

> [!tip]
> 如需私有部署，请在首页点击“联系作者”

## 注意事项

### 端口（请勿修改）

- 1236（内网|即时通讯系统注册）
- 3000（公网|音乐|开启 SSL）
- 4466（内网|Mysql）
- 6379（内网|Redis）
- 40025（公网|邮箱系统）
- 40080（公网|直播推流前端访问地址）
- 40080（内网|PHPMYADMIN 访问地址）
- 41935（公网|直播推流）
- 47272（内网|后端|即时通讯|开启 SSL）
- 48787（内网|后端|开启 SSL）
- 49999（内网|SSH 服务）

### MYSQL

#### 用户

![](markdown-images/image-72.png)

#### 数据表

![](markdown-images/image-70.png)

![](markdown-images/image-71.png)

### PHP 插件

> 如果使用机器人接口需要卸载 `swoole` 插件

### Docker 使用

> [!tip]
> 在 `windows` 使用 `docker` 容器访问宿主主机 `ip/域名` 使用 `host.docker.internal` > `linux` 则使用 `172.17.0.1`

### Redis 数据库

| Redis 数据库编号 | 功能                                |
| ---------------- | ----------------------------------- |
| 0                | 黑名单                              |
| 1                | 请求限速                            |
| 2                | 验证码限速                          |
| 3                | 短句限速                            |
| 4                | 竞赛相关                            |
| 5                | 设置                                |
| 6                | 判题机                              |
| 7                | 发布问题限速                        |
| 8                | 用户信息                            |
| 9                | 登录限速                            |
| 10               | 发布文章限速                        |
| 11               | 保存浏览器信息                      |
| 12               | 在线课堂                            |
| 13               | 注册验证码                          |
| 14               | 单点登录                            |
| 15               | 用户更新锁                          |
| 16               | 私聊的未读消息数目                  |
| 17               | 群聊的未读消息数目                  |
| 18               | 缓存的 css 以及 js                  |
| 19               | 消息队列                            |
| 20               | 群信息缓存                          |
| 21               | 竞赛信息缓存                        |
| 22               | 题单信息缓存                        |
| 23               | 404 页面缓存                        |
| 24               | 竞赛排名计算缓冲区                  |
| 25               | 文章信息                            |
| 26               | 题库信息                            |
| 27               | 机器人已参赛并已经提交代码的竞赛 ID |
| 28               | 竞赛代码缓存                        |
| 29               | 代码结果缓存                        |
| 30               | 文件系统缓存                        |
| 31               | 题库测试用例缓存                    |
| 32               | 竞赛查重锁                          |
| 33               | 代码缓存                            |
| 34               | 题单题目列表缓存                    |
| 35               | MD5 缓存                            |
| 36               | 应用缓存                            |
| 37               | OJ 样例更新时间缓存                 |
| 38               | 代码分享                            |

### 判题系统

- 1. 使用 `C 语言` 编写判题机，自建沙箱环境，主进进程监控资源使用
- 2. 用户提交代码会先保存数据库和缓存，消息队列消费运行用户代码，异步更新代码结果，前端使用轮询查询代码状态

![](markdown-images/image-61.png)
![](markdown-images/image-60.png)
![](markdown-images/image-59.png)

### 竞赛系统

- 1. 使用排名读取和排名写入分离的策略，用户仅能从缓存读取排名，消息队列负责通知排名计算和排名更新
- 2. 使用定时器作为缓冲，定期通知消息队列更新排名
- 3. 排名实时更新
- 4. 排名支持外链分享

![](markdown-images/image-55.png)

- 5. 支持竞赛代码查重

![](markdown-images/image-56.png)
![](markdown-images/image-57.png)
![](markdown-images/image-58.png)

- 6. 支持题目一键下载
- 7. 支持题解自动生成和一键下载
- 8. 支持 `ACM/OI/IOI` 等多种赛制
- 9. 支持赛题重判

![](markdown-images/image-51.png)
![](markdown-images/image-52.png)
![](markdown-images/image-53.png)
![](markdown-images/image-54.png)

### 限速系统

- 1. 使用缓存和中间件完成请求限速

### 文件系统

- 1. 使用中间件完成文件访问的拦截
- 2. 对于特定文件例如 `markdown` 和代码文件，系统自动添加样式进行展示
- 3. 静态资源永久有效
- 4. 配合缓存和 `gzip` 优化体验

### 即时通讯系统

- 1. 支持私聊

![](markdown-images/image-44.png)

- 2. 支持群聊

![](markdown-images/image-45.png)

- 3. 支持全局通知

![](markdown-images/image-47.png)
![](markdown-images/image-46.png)

- 4. 支持机器人对话

![](markdown-images/image-48.png)

- 5. 支持云文件上传

![](markdown-images/image-49.png)

- 6. 支持云文件双击下载

![](markdown-images/image-50.png)

### 背景系统

- 1. 支持用户自定义背景
- 2. 背景支持图片和视频背景
- 3. 支持图片和视频背景共存

![](markdown-images/image-43.png)

### 文章系统

- 1. 支持文章搜索
- 2. 支持文章查看
- 3. 支持文章评论
- 4. 支持文章收藏
- 5. 支持文章取消收藏
- 6. 支持文章点赞
- 7. 支持文章下载
- 8. 支持文章外链分享
- 9. 支持个人文章管理
- 10. 支持题解跳转到详情页
- 11. 支持文章权限设置

![](markdown-images/image-40.png)
![](markdown-images/image-41.png)
![](markdown-images/image-42.png)

### 问答系统

- 1. 支持问答搜索
- 2. 支持问答查看
- 3. 支持回复问题
- 4. 支持问题下载
- 5. 支持个人问答管理

![](markdown-images/image-37.png)
![](markdown-images/image-38.png)
![](markdown-images/image-39.png)

### 消息通知系统

- 1. 支持站内通知
- 2. 支持删除通知
- 3. 支持一键清空通知

![](markdown-images/image-36.png)

### 商店系统

- 1. 支持商品的购买

![](markdown-images/image-33.png)

- 2. 支持商品的下载

![](markdown-images/image-34.png)

- 3. root 用户支持商品上传

![](markdown-images/image-35.png)

### 题单系统

- 1. 支持用户创建管理题单

![](markdown-images/image-30.png)

- 2. 支持加入题单

![](markdown-images/image-31.png)

- 3. 支持查看我加入的题单

![](markdown-images/image-32.png)

### 应用系统

- 1. 支持创建和管理应用

![](markdown-images/image-27.png)

- 2. 支持打开应用

![](markdown-images/image-28.png)
![](markdown-images/image-29.png)

### 云盘系统

- 1. 支持文件上传，分享，下载和删除

![](markdown-images/image-22.png)
![](markdown-images/image-23.png)
![](markdown-images/image-25.png)

- 2. 支持云盘代码文件在线运行

![](markdown-images/image-26.png)

- 3. 支持静态资源在线预览

![](markdown-images/image-24.png)

- 4. root 用户支持设置普通用户默认云盘空间大小

### 云服务器系统

- 1. 支持购买云服务器
- 2. 支持用户使用 `SSH` 登录
- 3. 支持用户访问在线版本 `VSCODE`
- 4. 支持用户重启，开启，关闭云服务器
- 5. 支持用户创建快照，回滚，重置云服务器

![](markdown-images/image-20.png)

![](markdown-images/image-21.png)

### 在线课堂系统

- 1. 支持推流
- 2. 支持在线观看直播
- 3. 支持课堂实时评论

![](markdown-images/image-19.png)

### 短视频系统

- 1. 支持视频在线播放，收藏，点赞，取消收藏，取消点赞和评论

![](markdown-images/image-15.png)

![](markdown-images/image-16.png)

- 2. 支持视频分享

![](markdown-images/image-17.png)

- 3. 支持视频搜索

![](markdown-images/image-18.png)

### 题库系统

- 1. 支持题目搜索

![](markdown-images/image-5.png)

- 2. 支持题目提交记录查看

![](markdown-images/image-6.png)
![](markdown-images/image-7.png)

- 3. 支持题目题解查看

![](markdown-images/image-8.png)
![](markdown-images/image-9.png)

- 4. 题解支持一键跳转到题目详情页

![](markdown-images/image-11.png)
![](markdown-images/image-10.png)

- 5. 支持每日一题

![](markdown-images/image-12.png)

### 音乐系统

- 1. 支持网易云音乐扫码登陆

![](markdown-images/image-13.png)

- 2. 支持歌单拉取

![](markdown-images/image-3.png)

- 3. 支持在线播放音乐

![](markdown-images/image-14.png)

- 4. 支持修改歌单

![](markdown-images/image-4.png)

### 机器人系统

- 1. 支持调用 `GPT` 接口
- 2. 支持机器人问答

![](markdown-images/image-2.png)

### 首页系统

- 1. 支持首页公告
- 2. 支持首页短语
- 3. 支持首页轮播图

![](markdown-images/image.png)

### 监控系统

- 1. 支持用户监控
- 2. 支持时间检索

![](markdown-images/image-1.png)

### 录屏系统

- 1. 网页端支持录制窗口选择
- 2. 客户端支持全屏录制
- 3. 支持录屏保存

#### 客户端

![](markdown-images/image-69.png)

#### 网页端

![](markdown-images/image-73.png)
![](markdown-images/image-74.png)

<Bottom />
