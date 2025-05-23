---
title: 配置文件示例
index: true
icon: book
category:
  - 配置文件示例
---

<Share colorful />

```json
{
  "server": [
    {
      "listen_ip": "0.0.0.0",
      "listen_port": 80,
      "bind_server_name": {
        "127.0.0.1": {
          "root_path": "./",
          "buffer_size": 10240,
          "gzip_level": 1,
          "log_dir_path": "./logs",
          "empty_path_try_files_path": "./index.html",
          "response_header_list": [
            "Server: RUST-WEB-SERVER",
            "Access-Control-Allow-Credentials: true",
            "Access-Control-Allow-Headers: *",
            "Access-Control-Allow-Methods: *",
            "Access-Control-Allow-Origin: *",
            "Git: https://github.com/eastspire/RUST-WEB-SERVE.git",
            "Content-Type: text/html",
            "Content-Encoding: gzip"
          ],
          "proxy": [],
          "proxy_timeout_seconds": 10,
          "hotlink_protection": []
        },
        "localhost": {
          "root_path": "./",
          "buffer_size": 10240,
          "gzip_level": 1,
          "log_dir_path": "./logs",
          "empty_path_try_files_path": "./index.html",
          "response_header_list": [
            "Server: RUST-WEB-SERVER",
            "Access-Control-Allow-Credentials: true",
            "Access-Control-Allow-Headers: *",
            "Access-Control-Allow-Methods: *",
            "Access-Control-Allow-Origin: *",
            "Git: https://github.com/eastspire/RUST-WEB-SERVE.git",
            "Content-Type: application/json",
            "Content-Encoding: gzip"
          ],
          "proxy": [
            "https://api.ltpp.vip",
            "https://api.ltpp.vip/Version/getVersion",
            "https://api.ltpp.vip/Version/getVersion?origin=proxy1"
          ],
          "proxy_timeout_seconds": 10,
          "hotlink_protection": []
        }
      }
    },
    {
      "listen_ip": "0.0.0.0",
      "listen_port": 81,
      "bind_server_name": {
        "127.0.0.1": {
          "root_path": "./",
          "buffer_size": 10240,
          "gzip_level": 1,
          "log_dir_path": "./logs",
          "empty_path_try_files_path": "./index.html",
          "response_header_list": [
            "Access-Control-Allow-Origin: *",
            "Access-Control-Allow-Methods: *",
            "Access-Control-Allow-Headers: *",
            "Access-Control-Allow-Credentials: true",
            "Server: RUST-WEB-SERVER",
            "Git: https://github.com/eastspire/RUST-WEB-SERVE.git",
            "Content-Type: application/json",
            "Content-Encoding: gzip"
          ],
          "proxy": ["https://api.ltpp.vip/Version/getVersion?origin=proxy1"],
          "proxy_timeout_seconds": 10,
          "hotlink_protection": ["origin=1$"]
        }
      }
    }
  ]
}
```

<Bottom />
