# [webpack-qrcode-plugin](https://reactjs.org/)
 [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/cookedByIshaq/webpack-qrcode-plugin/blob/main/LICENSE)

webpack-qrcode-plugin is a JavaScript library for terminal qrcode for launch project url  by scanning.

Easy way to mobile responsive test.

## Installation

```bash
$ npm i webpack-qrcode-plugin
```

### Usage

![alt text](https://github.com/cookedByIshaq/webpack-qrcode-plugin/blob/main/static/qrcode.png?raw=true)

#### http://192.168.1.16:4000/

#### webpack.config.js
```JavaScript
const QRCodePlugin = require("webpack-qrcode-plugin");
module.exports = {
    devServer: {
    ...
    port: 4000,
  },
  plugins: [
    new QRCodePlugin()
  ]
}
```