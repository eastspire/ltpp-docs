---
title: 开启keep-alive
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - speed
  - open
  - keep-alive
order: 4
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/web-server-pressure-measurement/tree/master/open-keep-alive)

### wrk

#### 压测命令

```sh
wrk -c360 -d60s http://127.0.0.1:60000/
```

#### 压测结果

> [!tip]
> 测试 `360` 并发，持续 `60s` 请求。`QPS` 结果如下：
>
> - 1 `Tokio` ：340130.92
> - 2 `Hyperlane框架` ：324323.71
> - 3 `Rocket框架` ：298945.31
> - 4 `Rust标准库` ：291218.96
> - 5 `Gin框架` ：242570.16
> - 6 `Go标准库` ：234178.93
> - 7 `Node标准库` ：139412.13

#### hyperlane 框架

```sh
Running 1m test @ http://127.0.0.1:60000/
  2 threads and 360 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.46ms    7.74ms 230.59ms   99.57%
    Req/Sec   163.12k     9.54k  187.65k    67.75%
  19476349 requests in 1.00m, 1.94GB read
Requests/sec: 324323.71
Transfer/sec:     33.10MB
```

#### Rust 标准库

```sh
Running 1m test @ http://127.0.0.1:60000/
  2 threads and 360 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.64ms    8.62ms 238.68ms   99.48%
    Req/Sec   146.49k    20.42k  190.38k    61.42%
  17494266 requests in 1.00m, 1.52GB read
Requests/sec: 291218.96
Transfer/sec:     25.83MB
```

#### Tokio 框架

```sh
Running 1m test @ http://127.0.0.1:60000/
  2 threads and 360 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.22ms    5.96ms 230.76ms   99.76%
    Req/Sec   171.05k     7.56k  192.19k    70.08%
  20423683 requests in 1.00m, 1.77GB read
Requests/sec: 340130.92
Transfer/sec:     30.17MB
```

#### Rocket 框架

```sh
Running 1m test @ http://127.0.0.1:60000/
  2 threads and 360 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.42ms    6.67ms 228.04ms   99.67%
    Req/Sec   150.37k     7.48k  172.42k    70.08%
  17955815 requests in 1.00m, 4.00GB read
Requests/sec: 298945.31
Transfer/sec:     68.14MB
```

#### Gin 框架

```sh
Running 1m test @ http://127.0.0.1:60000/
  2 threads and 360 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.67ms    4.67ms 249.72ms   99.63%
    Req/Sec   122.08k     4.39k  133.88k    69.58%
  14577127 requests in 1.00m, 1.97GB read
Requests/sec: 242570.16
Transfer/sec:     33.54MB
```

#### Go 标准库

```sh
Running 1m test @ http://127.0.0.1:60000/
  2 threads and 360 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.58ms    1.15ms  32.24ms   78.06%
    Req/Sec   117.80k     4.43k  130.07k    70.67%
  14064777 requests in 1.00m, 1.90GB read
Requests/sec: 234178.93
Transfer/sec:     32.38MB
```

#### Node 标准库

```sh
Running 1m test @ http://127.0.0.1:60000/
  2 threads and 360 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.58ms  837.62us  45.39ms   89.66%
    Req/Sec    70.11k     2.79k   74.29k    98.33%
  8371733 requests in 1.00m, 1.16GB read
Requests/sec: 139412.13
Transfer/sec:     19.81MB
```

### ab

#### 压测命令

```sh
ab -n 1000000 -c 1000 -r -k http://127.0.0.1:60000/
```

#### 压测结果

> [!tip]
> 测试 `1000` 并发，一共 `100w` 请求。`QPS` 结果如下：
>
> - 1 `Tokio` ：308596.26
> - 2 `Hyperlane框架` ：307568.90
> - 3 `Rocket框架` ：267931.52
> - 4 `Rust标准库` ：260514.56
> - 5 `Go标准库` ：226550.34
> - 6 `Gin框架` ：224296.16
> - 7 `Node标准库` ：85357.18

#### hyperlane 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   3.251 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      107000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    307568.90 [#/sec] (mean)
Time per request:       3.251 [ms] (mean)
Time per request:       0.003 [ms] (mean, across all concurrent requests)
Transfer rate:          32138.55 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0      11
Processing:     0    3   1.4      3      13
Waiting:        0    3   1.4      3      13
Total:          0    3   1.4      3      16

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      4
  75%      4
  80%      4
  90%      5
  95%      6
  98%      7
  99%      7
 100%     16 (longest request)
```

#### Rust 标准库

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

#### Tokio 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   3.240 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      93000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    308596.26 [#/sec] (mean)
Time per request:       3.240 [ms] (mean)
Time per request:       0.003 [ms] (mean, across all concurrent requests)
Transfer rate:          28026.81 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0      11
Processing:     0    3   1.3      3      16
Waiting:        0    3   1.3      3      16
Total:          0    3   1.4      3      16

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      4
  75%      4
  80%      4
  90%      5
  95%      6
  98%      7
  99%      7
 100%     16 (longest request)
```

#### Rocket 框架

```sh
Server Software:        Rocket
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   3.732 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      271000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    267931.52 [#/sec] (mean)
Time per request:       3.732 [ms] (mean)
Time per request:       0.004 [ms] (mean, across all concurrent requests)
Transfer rate:          70907.66 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0      14
Processing:     0    4   1.4      4      17
Waiting:        0    4   1.4      4      17
Total:          0    4   1.4      4      21

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      5
  80%      5
  90%      6
  95%      6
  98%      7
  99%      8
 100%     21 (longest request)
```

#### Gin 框架

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

#### Go 标准库

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

#### Node 标准库

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
