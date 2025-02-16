---
title: 关闭keep-alive
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 2
---

[GITHUB 地址](https://github.com/ltpp-universe/web-server-pressure-measurement/tree/master/close-keep-alive)

## QPS 测试结果

> 1000 并发，一共 100w 请求。QPS 结果如下：
>
> - 1.Hyperlane 框架：52206.36
> - 2.Tokio：51603.17
> - 3.Rocket 框架：50009.23
> - 4.Rust 标准库：31243.92
> - 5.Gin 框架：19514.88
> - 6.Go 标准库：19316.27
> - 7.Apache：18017.33
> - 8.Node 标准库：16605.69

### hyperlane 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   19.415 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      107000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    52206.36 [#/sec] (mean)
Time per request:       19.415 [ms] (mean)
Time per request:       0.019 [ms] (mean, across all concurrent requests)
Transfer rate:          5382.09 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    9  22.9      8    1109
Processing:     0   10   6.0      9     425
Waiting:        0    9   5.9      8     425
Total:          0   19  24.0     18    1129

Percentage of the requests served within a certain time (ms)
  50%      2
  66%      2
  75%      3
  80%      3
  90%      4
  95%     13
  98%     24
  99%     41
 100%   1129 (longest request)
```

### Rust 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            9000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   32.006 seconds
Complete requests:      1000000
Failed requests:        36
   (Connect: 0, Receive: 12, Length: 12, Exceptions: 12)
Total transferred:      87998944 bytes
HTML transferred:       4999940 bytes
Requests per second:    31243.92 [#/sec] (mean)
Time per request:       32.006 [ms] (mean)
Time per request:       0.032 [ms] (mean, across all concurrent requests)
Transfer rate:          2684.99 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   26 332.6      0   15760
Processing:     0    3   0.9      3      25
Waiting:        0    3   0.9      3      25
Total:          0   29 332.9      4   15764

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      4
  80%      4
  90%      4
  95%      4
  98%      7
  99%   1041
 100%  15764 (longest request)
```

### Tokio 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   19.379 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      88000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    51603.17 [#/sec] (mean)
Time per request:       19.379 [ms] (mean)
Time per request:       0.019 [ms] (mean, across all concurrent requests)
Transfer rate:          4434.65 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    9  20.6      9    1097
Processing:     0   10   5.6      9     296
Waiting:        0    9   5.4      8     296
Total:          0   19  21.9     18    1116

Percentage of the requests served within a certain time (ms)
  50%     18
  66%     21
  75%     23
  80%     25
  90%     29
  95%     33
  98%     37
  99%     41
 100%   1116 (longest request)
```

### Rocket 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   19.996 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      247000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    50009.23 [#/sec] (mean)
Time per request:       19.996 [ms] (mean)
Time per request:       0.020 [ms] (mean, across all concurrent requests)
Transfer rate:          12062.77 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   10  15.9      9    1105
Processing:     0   10   5.5     10     307
Waiting:        0    9   5.3      9     307
Total:          0   20  17.5     19    1122

Percentage of the requests served within a certain time (ms)
  50%     19
  66%     22
  75%     24
  80%     26
  90%     31
  95%     34
  98%     39
  99%     43
 100%   1122 (longest request)
```

### Apache

```sh
Server Hostname:        127.0.0.1
Server Port:            80

Document Path:          /
Document Length:        10918 bytes

Concurrency Level:      1000
Time taken for tests:   55.502 seconds
Complete requests:      1000000
Failed requests:        4
   (Connect: 0, Receive: 0, Length: 4, Exceptions: 0)
Total transferred:      11191955232 bytes
HTML transferred:       10917956328 bytes
Requests per second:    18017.33 [#/sec] (mean)
Time per request:       55.502 [ms] (mean)
Time per request:       0.056 [ms] (mean, across all concurrent requests)
Transfer rate:          196923.00 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    6  59.7      2    3164
Processing:     5   26 400.5     17   55489
Waiting:        0   24 386.5     16   55489
Total:          8   31 405.0     20   55493

Percentage of the requests served within a certain time (ms)
  50%     20
  66%     22
  75%     23
  80%     24
  90%     26
  95%     29
  98%     33
  99%     50
 100%  55493 (longest request)
```

### Gin 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   51.243 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      140000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    19514.88 [#/sec] (mean)
Time per request:       51.243 [ms] (mean)
Time per request:       0.051 [ms] (mean, across all concurrent requests)
Transfer rate:          2668.05 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   39 554.7      0   32237
Processing:     0    9   3.9      8      51
Waiting:        0    8   3.9      8      49
Total:          0   48 554.9      8   32267

Percentage of the requests served within a certain time (ms)
  50%      8
  66%      8
  75%      8
  80%      8
  90%      9
  95%     21
  98%     43
  99%   1048
 100%  32267 (longest request)
```

## Go 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   51.770 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      149000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    19316.27 [#/sec] (mean)
Time per request:       51.770 [ms] (mean)
Time per request:       0.052 [ms] (mean, across all concurrent requests)
Transfer rate:          2810.67 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   41 422.2      0   15840
Processing:     0    9   3.7      8      62
Waiting:        0    9   3.6      8      62
Total:          0   50 422.6      8   15849

Percentage of the requests served within a certain time (ms)
  50%      8
  66%      8
  75%      8
  80%      9
  90%      9
  95%     21
  98%   1042
  99%   1049
 100%  15849 (longest request)
```

## Node 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            8000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   60.220 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      114000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    16605.69 [#/sec] (mean)
Time per request:       60.220 [ms] (mean)
Time per request:       0.060 [ms] (mean, across all concurrent requests)
Transfer rate:          1848.68 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   46 457.3      0   32236
Processing:     2   13   1.6     13      41
Waiting:        2   12   1.6     12      41
Total:          3   58 457.7     13   32254

Percentage of the requests served within a certain time (ms)
  50%     13
  66%     13
  75%     14
  80%     14
  90%     14
  95%     15
  98%   1050
  99%   1054
 100%  32254 (longest request)
```

<Bottom />
