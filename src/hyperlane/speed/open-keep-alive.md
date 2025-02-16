---
title: 开启keep-alive
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 3
---

[GITHUB 地址](https://github.com/ltpp-universe/web-server-pressure-measurement/tree/master/open-keep-alive)

## QPS 测试结果

> 测试 `1000` 并发，一共 `100w` 请求。`QPS` 结果如下：
>
> - 1.Hyperlane 框架：90294.11
> - 2.Tokio：49932.79
> - 3.Rocket 框架：43373.54
> - 4.Rust 标准库：40615.65
> - 5.Go 标准库：23476.99
> - 6.Gin 框架：22663.06
> - 7.Node 标准库：19746.54
> - 8.Apache：18042.94

### hyperlane 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   11.075 seconds
Complete requests:      1000000
Failed requests:        520141
   (Connect: 0, Receive: 6, Length: 500002, Exceptions: 20133)
Keep-Alive requests:    500002
Total transferred:      53500535 bytes
HTML transferred:       2500025 bytes
Requests per second:    90294.11 [#/sec] (mean)
Time per request:       11.075 [ms] (mean)
Time per request:       0.011 [ms] (mean, across all concurrent requests)
Transfer rate:          4717.56 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    6  35.4      0    1107
Processing:     0    5   8.9      3     403
Waiting:        0    5   9.1      1     403
Total:          0   11  37.3      4    1122

Percentage of the requests served within a certain time (ms)
  50%      4
  66%     14
  75%     17
  80%     19
  90%     25
  95%     30
  98%     36
  99%     41
 100%   1122 (longest request)
```

### Rust 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            9000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   24.621 seconds
Complete requests:      1000000
Failed requests:        309
   (Connect: 0, Receive: 103, Length: 103, Exceptions: 103)
Total transferred:      87990936 bytes
HTML transferred:       4999485 bytes
Requests per second:    40615.65 [#/sec] (mean)
Time per request:       24.621 [ms] (mean)
Time per request:       0.025 [ms] (mean, across all concurrent requests)
Transfer rate:          3490.05 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   20 225.1      0   15675
Processing:     0    2   1.2      2      20
Waiting:        0    2   1.2      2      20
Total:          0   22 225.6      2   15677

Percentage of the requests served within a certain time (ms)
  50%      2
  66%      3
  75%      3
  80%      3
  90%      5
  95%      7
  98%      9
  99%   1038
 100%  15677 (longest request)
```

### Tokio 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            10000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   20.027 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      88000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    49932.79 [#/sec] (mean)
Time per request:       20.027 [ms] (mean)
Time per request:       0.020 [ms] (mean, across all concurrent requests)
Transfer rate:          4291.10 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   16 176.9      1    7203
Processing:     0    3   3.6      2      46
Waiting:        0    3   3.5      2      46
Total:          0   19 177.2      3    7218

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      3
  75%      4
  80%      4
  90%      5
  95%     12
  98%     24
  99%   1026
 100%   7218 (longest request)
```

### Rocket 框架

```sh
Server Software:        Rocket
Server Hostname:        127.0.0.1
Server Port:            8000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   29.557 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      247000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    33833.25 [#/sec] (mean)
Time per request:       29.557 [ms] (mean)
Time per request:       0.030 [ms] (mean, across all concurrent requests)
Transfer rate:          8160.95 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   22 277.3      0   15672
Processing:     0    5   4.6      4      57
Waiting:        0    5   4.6      4      57
Total:          0   27 277.7      4   15682

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      5
  80%      6
  90%     10
  95%     17
  98%     27
  99%   1037
 100%  15682 (longest request)
```

### Apache

```sh
Server Hostname:        127.0.0.1
Server Port:            80

Document Path:          /
Document Length:        10918 bytes

Concurrency Level:      1000
Time taken for tests:   55.423 seconds
Complete requests:      1000000
Failed requests:        8
   (Connect: 0, Receive: 0, Length: 8, Exceptions: 0)
Total transferred:      11191910464 bytes
HTML transferred:       10917912656 bytes
Requests per second:    18042.94 [#/sec] (mean)
Time per request:       55.423 [ms] (mean)
Time per request:       0.055 [ms] (mean, across all concurrent requests)
Transfer rate:          197202.16 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    5  57.2      2    3171
Processing:     6   24 421.0     17   55411
Waiting:        0   23 394.1     16   55411
Total:          9   30 425.0     19   55417

Percentage of the requests served within a certain time (ms)
  50%     19
  66%     21
  75%     21
  80%     22
  90%     24
  95%     25
  98%     28
  99%     32
 100%  55417 (longest request)
```

### Gin 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   44.125 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      121000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    22663.06 [#/sec] (mean)
Time per request:       44.125 [ms] (mean)
Time per request:       0.044 [ms] (mean, across all concurrent requests)
Transfer rate:          2677.96 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   36 404.6      0   32244
Processing:     0    7   3.1      7      48
Waiting:        0    7   3.1      7      48
Total:          0   43 404.9      7   32254

Percentage of the requests served within a certain time (ms)
  50%      7
  66%      7
  75%      8
  80%      8
  90%      8
  95%     12
  98%     45
  99%   1047
 100%  32254 (longest request)
```

## Go 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   42.595 seconds
Complete requests:      1000000
Failed requests:        3
   (Connect: 0, Receive: 1, Length: 1, Exceptions: 1)
Total transferred:      130000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    23476.99 [#/sec] (mean)
Time per request:       42.595 [ms] (mean)
Time per request:       0.043 [ms] (mean, across all concurrent requests)
Transfer rate:          2980.48 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   34 312.9      0   15839
Processing:     0    7   2.9      7      48
Waiting:        0    7   2.9      7      48
Total:          0   41 313.4      7   15846

Percentage of the requests served within a certain time (ms)
  50%      7
  66%      7
  75%      7
  80%      8
  90%      8
  95%     11
  98%   1039
  99%   1048
 100%  15846 (longest request)
```

## Node 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            8000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   50.642 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      114000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    19746.54 [#/sec] (mean)
Time per request:       50.642 [ms] (mean)
Time per request:       0.051 [ms] (mean, across all concurrent requests)
Transfer rate:          2198.35 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   38 400.5      0   32236
Processing:     2   11   1.7     11      45
Waiting:        1   10   1.7     10      44
Total:          3   49 401.0     11   32249

Percentage of the requests served within a certain time (ms)
  50%     11
  66%     11
  75%     11
  80%     11
  90%     12
  95%     13
  98%   1043
  99%   1052
 100%  32249 (longest request)
```

<Bottom />
