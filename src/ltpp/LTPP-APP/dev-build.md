---
title: 开发构建说明
index: true
icon: book
category:
  - LTPP-在线开发平台APP
  - APP
---

## 查看设备命令如下

```shell
flutter devices
```

```shell
# 输出类似如下，这里选择 21051182C
21051182C (mobile) • 670e4f20 • android-arm64  • Android 13 (API 33)
Windows (desktop)• windows  • windows-x64    • Microsoft Windows [版本 10.0.19045.4651]
Chrome (web)     • chrome   • web-javascript • Google Chrome 126.0.6478.127
Edge (web)       • edge     • web-javascript • Microsoft Edge 126.0.2592.102
```

## 运行命令如下

```shell
flutter run -d 21051182C
```

## 构建 `APK` 命令如下

```shell
flutter build apk
```

## Execution failed for task ‘:path_provider:verifyReleaseResources’.

> [!tip]
> 看到了 path_provider ，应该是 path_provider 的问题。解决办法就是修改 path_provider 的 build.gradle 中的 compileSdkVersion 版本为 28，就可以成功了。
> 该文件的目录是在 flutter 的安装目录 C:\Users\14915\AppData\Local\Pub\Cache\hosted\pub.flutter-io.cn\path_provider-0.4.1\android\build.gradle

## Flutter 卡在 Running Gradle task ‘assembleDebug‘... 的解决方法

> [!tip]
> flutter 项目的 android 目录中，项目的 build.gradle

```dart
    maven { url 'https://maven.aliyun.com/repository/google' }
    maven { url 'https://maven.aliyun.com/repository/jcenter' }
    maven { url 'https://maven.aliyun.com/nexus/content/groups/public'}
    google()
    mavenCentral()
```

> [!tip]
> flutter 的 sdk 中进行设置，处于此目录下 C:\fluttersdk\packages\flutter_tools\gradle\flutter.gradle

```dart
buildscript {
    repositories {
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'https://maven.aliyun.com/nexus/content/groups/public' }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.4.0'
    }
}
```

> [!tip]
> flutter 的 sdk 中进行设置，处于此目录下，C:\fluttersdk\packages\flutter_tools\gradle\resolve_dependencies.gradle

```dart
repositories {
    maven { url 'https://maven.aliyun.com/repository/google' }
    maven { url 'https://maven.aliyun.com/repository/jcenter' }
    maven { url 'https://maven.aliyun.com/nexus/content/groups/public' }
    maven {
        url "https://storage.flutter-io.cn/download.flutter.io"
    }
}
```

## A network error occurred while checking “https://maven.google.com/”: 信号灯超时时间已到

> [!tip]
>
> - 1、找到 flutter sdk 的文件目录，打开 flutter\packages\flutter_tools\lib\src\http_host_validator.dart
> - 2、将https://maven.google.com/ 修改为https://dl.google.com/dl/android/maven2/
> - 3、关闭 cmd 命令窗口，重新打开 cmd 窗口
> - 4、先将原 cache 文件备份到任意文件夹下。去到 flutter\bin 目录，删除 cache 文件夹
> - 5、在 cmd 命令窗口重新运行 flutter doctor,问题解决。
