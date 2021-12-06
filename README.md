# @tarojs/plugin-cli-public-path

> Taro 命令修改publicPath插件

## 安装

在 Taro 项目根目录下安装

```bash
$ npm i @wanxl/plugin-cli-public-path --save
```

## 使用

### 引入插件

请确保 Taro CLI 已升级至 Taro 2/3 的最新版本。

修改项目 `config/index.js` 中的 plugins 配置为如下

```js
const config = {
  ...
  plugins: [
    ...其余插件

    '@wanxl/plugin-cli-public-path'
  ]
  ...
}
```

然后在执行调试或者编译H5的指令后加上 --publicPath /yourPath/ 就实现动态改变原本在config/index.js里配置的publicPath了

例子：
taro build --type h5 --publicPath /yourPath/
