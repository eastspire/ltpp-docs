---
title: 日志示例
index: true
icon: book
category:
  - 日志示例
---

<Share colorful />
<Catalog />

```php
[2024-06-01 11:17:42]
Resource load fail => ./index.html
Error => Matched to hotlink protection


[2024-06-01 11:17:42]
Resource load fail => ./index.html
Error => Matched to hotlink protection


[2024-06-01 11:17:42]
Resource load fail => ./index.html


[2024-06-01 11:17:42]
Resource load fail => ./index.html


[2024-06-01 11:17:42]
HttpRequest {
    path: "/",
    method: "GET",
    headers: {
        "sec-ch-ua": "\"Microsoft Edge\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "connection": "keep-alive",
        "sec-ch-ua-mobile": "?0",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0",
        "host": "127.0.0.1",
        "cookie": "SameSite=Lax; Hm_lvt_9793f42b498361373512340937deb2a0=1689155374; _ga=GA1.1.39230079.1707025003; _ga_69MPZE94D5=GS1.1.1707025002.1.1.1707026740.0.0.0; pma_lang=zh_CN; pma_theme=bootstrap; pmaUser-1=5RJrrwsVlvqY7uteEWcRoXI%2BvTKWWpA23SKZpX9BCDRw8Q17ueAcTXRd8Po%3D",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "cache-control": "max-age=0",
        "sec-fetch-dest": "document",
        "accept-encoding": "gzip, deflate, br, zstd",
        "upgrade-insecure-requests": "1",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "sec-fetch-mode": "navigate",
    },
    body: {},
}

[2024-06-01 11:17:42]
Resource load fail => ./index.html


[2024-06-01 11:17:44]
HttpRequest {
    path: "/_static/out/browser/serviceWorker.js",
    method: "GET",
    headers: {
        "cookie": "SameSite=Lax; Hm_lvt_9793f42b498361373512340937deb2a0=1689155374; _ga=GA1.1.39230079.1707025003; _ga_69MPZE94D5=GS1.1.1707025002.1.1.1707026740.0.0.0; pma_lang=zh_CN; pma_theme=bootstrap; pmaUser-1=5RJrrwsVlvqY7uteEWcRoXI%2BvTKWWpA23SKZpX9BCDRw8Q17ueAcTXRd8Po%3D",
        "host": "127.0.0.1",
        "service-worker": "script",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0",
        "connection": "keep-alive",
        "cache-control": "max-age=0",
        "accept": "*/*",
        "sec-fetch-mode": "same-origin",
        "referer": "http://127.0.0.1/_static/out/browser/serviceWorker.js",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "sec-fetch-dest": "serviceworker",
    },
    body: {},
}

[2024-06-01 11:17:44]
Resource load fail => ./_static/out/browser/serviceWorker.js


[2024-06-01 11:17:44]
HttpRequest {
    path: "/Version/getVersion",
    method: "GET",
    headers: {
        "sec-fetch-site": "none",
        "connection": "keep-alive",
        "host": "localhost",
        "cookie": "SameSite=Lax; NMTID=00O6oBSFUZ8KxSqKEY4tcbYD677Qa8AAAGKxntltw; pma_lang=zh_CN; pma_theme=bootstrap; pmaUser-1=c3t%2FwkS4xVdqQ2GLp7IkQdf9cc4d3ClA8ae5euc5DJ4EKvgSZv6qnjCaabI%3D; BD_HOME=1",
        "cache-control": "max-age=0",
        "sec-fetch-mode": "navigate",
        "sec-ch-ua-mobile": "?0",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0",
        "sec-ch-ua": "\"Microsoft Edge\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "accept-encoding": "gzip, deflate, br, zstd",
        "sec-fetch-dest": "document",
    },
    body: {},
}

[2024-06-01 11:17:44]
Proxy url info => https://api.ltpp.vip:443/Version/getVersion?origin=proxy1


[2024-06-01 11:17:44]
Proxy request info:
GET https://api.ltpp.vip:443/Version/getVersion?origin=proxy1 HTTP/1.1
content-type: application/x-www-form-urlencoded
sec-fetch-site: none
connection: close
host: api.ltpp.vip
cookie: SameSite=Lax; NMTID=00O6oBSFUZ8KxSqKEY4tcbYD677Qa8AAAGKxntltw; pma_lang=zh_CN; pma_theme=bootstrap; pmaUser-1=c3t%2FwkS4xVdqQ2GLp7IkQdf9cc4d3ClA8ae5euc5DJ4EKvgSZv6qnjCaabI%3D; BD_HOME=1
cache-control: max-age=0
content-length: 13
sec-fetch-mode: navigate
sec-ch-ua-mobile: ?0
accept-language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0
referer: https://api.ltpp.vip:443/Version/getVersion
sec-ch-ua: "Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
sec-ch-ua-platform: "Windows"
sec-fetch-user: ?1
origin: https://api.ltpp.vip:443/Version/getVersion
upgrade-insecure-requests: 1
accept-encoding: gzip, deflate, br, zstd
sec-fetch-dest: document

origin=proxy1


[2024-06-01 11:17:45]
Request response info:
HTTP/1.1 200 OK
content-length: 90
access-control-allow-methods: GET, POST, PATCH
content-encoding: gzip
access-control-allow-headers: Authorization,Requestid,Key,Content-Type,If-Match,If-Modified-Since,If-None-Match,If-Unmodified-Since,X-CSRF-TOKEN,X-Requested-With
content-type: application/json
connection: close
access-control-allow-credentials: true
git: https://git.ltpp.vip/root/RUST-WEB-SERVE.git
access-control-allow-origin: https://api.ltpp.vip:443/Version/getVersion
access-control-max-age: 88888888
server: nginx
date: Sat, 01 Jun 2024 03:17:42 GMT
strict-transport-security: max-age=88888888


{"code":1,"version":"2.8.0","ltpp_win_download_url":"","ltpp_mac_download_url":"","ltpp_apk_download_url":""}



```
