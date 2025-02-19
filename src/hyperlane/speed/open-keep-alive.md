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
> - 1.Hyperlane 框架：301133.53
> - 2.Tokio：305815.63
> - 3.Rocket 框架：274398.41
> - 4.Rust 标准库：260514.56
> - 5.Go 标准库：226550.34
> - 6.Gin 框架：224296.16
> - 7.Node 标准库：85357.18

### hyperlane 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   3.321 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      107000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    301133.53 [#/sec] (mean)
Time per request:       3.321 [ms] (mean)
Time per request:       0.003 [ms] (mean, across all concurrent requests)
Transfer rate:          31466.10 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       8
Processing:     0    3   1.4      3      29
Waiting:        0    3   1.4      3      29
Total:          0    3   1.4      3      29

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      4
  75%      4
  80%      4
  90%      5
  95%      6
  98%      7
  99%      7
 100%     29 (longest request)
```

### Rust 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   3.839 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      93000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    260514.56 [#/sec] (mean)
Time per request:       3.839 [ms] (mean)
Time per request:       0.004 [ms] (mean, across all concurrent requests)
Transfer rate:          23660.01 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0  21.2      0    1069
Processing:     0    3   5.5      3     419
Waiting:        0    3   5.5      3     419
Total:          0    4  23.4      3    1286

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      4
  75%      4
  80%      4
  90%      5
  95%      6
  98%      8
  99%      8
 100%   1286 (longest request)
```

### Tokio 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   3.270 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      93000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    305815.63 [#/sec] (mean)
Time per request:       3.270 [ms] (mean)
Time per request:       0.003 [ms] (mean, across all concurrent requests)
Transfer rate:          27774.27 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0      12
Processing:     0    3   1.3      3      29
Waiting:        0    3   1.3      3      29
Total:          0    3   1.3      3      29

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      3
  75%      4
  80%      4
  90%      5
  95%      6
  98%      6
  99%      6
 100%     29 (longest request)
```

### Rocket 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   3.644 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      271000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    274398.41 [#/sec] (mean)
Time per request:       3.644 [ms] (mean)
Time per request:       0.004 [ms] (mean, across all concurrent requests)
Transfer rate:          72619.11 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0      14
Processing:     0    4   1.4      3      20
Waiting:        0    4   1.4      3      20
Total:          0    4   1.4      3      21

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      4
  75%      5
  80%      5
  90%      6
  95%      6
  98%      7
  99%      7
 100%     21 (longest request)
```

### Gin 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   4.458 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      145000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    224296.16 [#/sec] (mean)
Time per request:       4.458 [ms] (mean)
Time per request:       0.004 [ms] (mean, across all concurrent requests)
Transfer rate:          31760.69 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       7
Processing:     0    4   4.7      4     181
Waiting:        0    4   4.7      4     181
Total:          0    4   4.8      4     184

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      5
  75%      5
  80%      6
  90%      8
  95%     10
  98%     12
  99%     13
 100%    184 (longest request)
```

## Go 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   4.414 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      154000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    226550.34 [#/sec] (mean)
Time per request:       4.414 [ms] (mean)
Time per request:       0.004 [ms] (mean, across all concurrent requests)
Transfer rate:          34071.05 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       7
Processing:     0    4   3.9      4     172
Waiting:        0    4   3.9      4     172
Total:          0    4   4.0      4     176

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      5
  80%      5
  90%      7
  95%      8
  98%      8
  99%      9
 100%    176 (longest request)
```

## Node 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   11.715 seconds
Complete requests:      1000000
Failed requests:        811908
   (Connect: 0, Receive: 14737, Length: 499810, Exceptions: 297361)
Keep-Alive requests:    500200
Total transferred:      59523800 bytes
HTML transferred:       6502600 bytes
Requests per second:    85357.18 [#/sec] (mean)
Time per request:       11.715 [ms] (mean)
Time per request:       0.012 [ms] (mean, across all concurrent requests)
Transfer rate:          4961.70 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    3  33.5      0    1082
Processing:     0    8   9.6      7     247
Waiting:        0    7  10.5      3     247
Total:          0   12  35.3      9    1102

Percentage of the requests served within a certain time (ms)
  50%      9
  66%     15
  75%     17
  80%     18
  90%     21
  95%     23
  98%     27
  99%     30
 100%   1102 (longest request)
```

<Bottom />
