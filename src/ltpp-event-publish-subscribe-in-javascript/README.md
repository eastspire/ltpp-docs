---
title: LTPP-统一管理浏览器JS事件
index: true
icon: book
category:
  - LTPP-EVENT-PUBLISH-SUBSCRIBE-IN-JAVASCRIPT
dir:
  order: 15
---

<Share colorful />
<Catalog />

[GITHUB 地址](https://github.com/ltpp-universe/ltpp-event-publish-subscribe-in-javascript)

## 说明

> 统一管理浏览器环境 JS 事件，注册，取消注册，查看某个事件列表和所有事件列表

## 安装

```sh
npm i ltpp-event-publish-subscribe-in-javascript
```

## 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>test</title>
  </head>
  <script type="module">
    import { event_listener } from '../build/bundle.esm.js';
    const fn = () => {
      console.log(1);
    };
    // Registration Click Event
    event_listener.add('click', fn);
    // Registration Click Event
    event_listener.add('click', () => {
      console.log(2);
    });
    // Registration Click Event
    event_listener.add('click', fn);
    // Cancel registration click event
    event_listener.remove('click', fn);
    // View the list of click events
    console.log(event_listener.list('click'));
    // View the floating event list
    console.log(event_listener.list('hover'));
    // View all event lists
    console.log(event_listener.listAll());
  </script>

  <body></body>
</html>
```

<Bottom />
