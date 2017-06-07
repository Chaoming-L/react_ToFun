# 项目介绍
一个简单的留言板应用,使用Material-UI快速开发

## 需求配置
* node `^4.5.0`
* npm `^2.15.9`

## 开始

确认好你的环境配置，然后就可以开始以下步骤。

```bash
$ npm install                   # 安装项目依赖
$ npm start                     # 编译和运行
```

开发过程中，你用得最多的会是`npm start`，但是这里还有很多其它的处理：


|`npm run <script>`|解释|
|------------------|-----------|
|`start`|服务启动在localhost:9013，代码热替换开启。|
|`compile`|编译程序到dist目录下（默认目录~/dist）。|
|`clean`|删除dist文件夹。|
|`lint`|检查所有.js文件语法规范。|
|`build`|启动代码检查，测试，如果成功，编译到 dist 目录下。`NODE_ENV`值为"production"。|
|`build:dev`|与`build`相同，但是`NODE_ENV`值为"development"。|
|`build:test`|与`build`相同，但是`NODE_ENV`值为"test"。|
|`build:uat`|与`build`相同，但是`NODE_ENV`值为"uat"。|
|`deploy`|部署到生产环境。|
|`deploy:test`|部署到测试环境。|
|`deploy:uat`|部署到UAT环境。|

## 中间件

dependencies:

|名称|解释|
|------------------|-----------|
|`antd`|淘宝react-UI组件库。[更多](https://ant.design/)|
|`antd-mobile`|淘宝react-mobile-UI组件库。[更多](https://mobile.ant.design/)|
|`babel-loader`|Babel是编写下一代JavaScript的编译器。[更多](https://www.npmjs.com/package/babel-loader)|
|`babel-plugin-transform-runtime`|对帮助程序和内置程序的外部引用，自动聚合到代码，而不污染全局。[更多](https://www.npmjs.com/package/babel-plugin-transform-runtime)|
|`babel-polyfill`| babel转码规则。[更多](https://www.npmjs.com/package/babel-polyfill)|
|`babel-preset-es2015`| ES2015转码规则。[更多](https://www.npmjs.com/package/babel-preset-es2015)|
|`babel-preset-react`|react转码规则。[更多](https://www.npmjs.com/package/babel-preset-react)|
|`babel-preset-stage-0`|stage-0转码规则。[更多](https://www.npmjs.com/package/babel-preset-stage-0)|
|`babel-runtime`|代码优化。[更多](https://www.npmjs.com/package/babel-runtime)|
|`better-npm-run`|可自定义您项目的 npm 脚本。[更多](https://npmjs.com/package/better-npm-run)|
|`cssnano`|一个模块化的压缩器，构建在PostCSS生态系统之上。[更多](https://www.npmjs.com/package/cssnano)|
|`debug`|node.js 下的调试器。[更多](https://www.npmjs.com/package/debug)|
|`es6-promise`|一个轻量级库，提供用于组织异步代码的工具。[更多](https://www.npmjs.com/package/es6-promise)|
|`extract-text-webpack-plugin`|webpack解压缩用。[更多](https://www.npmjs.com/package/extract-text-webpack-plugin)|
|`fs-extra`|node.js 命令行扩展。[更多](https://www.npmjs.com/package/fs-extra)|
|`html-webpack-plugin`|webpack创建HTML文件插件。[更多](https://www.npmjs.com/package/html-webpack-plugin)|
|`isomorphic-fetch`|fetch API for node 和浏览器。[更多](https://www.npmjs.com/package/isomorphic-fetch)|
|`ip`|IP地址实用程序。[更多](https://www.npmjs.com/package/ip)|
|`less`|动态css。[更多](https://www.npmjs.com/package/less)|
|`lodash`|lodash库。[更多](https://www.npmjs.com/package/lodash)|
|`moment`|moment库(格式化时间用)。[更多](https://www.npmjs.com/package/moment)|
|`react-spinkit`|react加载动画组件库。[更多](https://github.com/KyleAMathews/react-spinkit)|
|`react`|react库。[更多](https://www.npmjs.com/package/react)|
|`react-dom`|react-dom库。[更多](https://www.npmjs.com/package/react-dom)|
|`react-modules`|react-redux库。[更多](https://www.npmjs.com/package/react-redux)|
|`react-router`|react-router库。[更多](https://www.npmjs.com/package/react-router)|
|`modules`|redux库[更多](https://www.npmjs.com/package/redux)|
|`webpack`|前端打包工具[更多](https://www.npmjs.com/package/webpack)|
|`yargs`|命令行扩展[更多](https://www.npmjs.com/package/yargs)|
|`rimraf`|node环境下一个深度删除文件模块[更多](https://www.npmjs.com/package/rimraf)|
|`***-loader`|各种加载器。[更多](https://www.npmjs.com/search?q=loader)|
|`postcss-pxtorem`|可以将css文件的px单位转化为rem单位的插件。[更多](https://www.npmjs.com/postcss-pxtorem)|

devDependencies:


|名称|解释|
|------------------|-----------|
|`express`|node.js  web服务框架。[更多](https://github.com/expressjs/express)|
|`babel-core`|babel编译器。[更多](https://github.com/babel/babel/tree/master/packages/babel-core)|
|`babel-eslint`|babel语法检查器。[更多](https://github.com/babel/babel-eslint)|
|`babel-plugin-istanbul`|代码测试插件。[更多](https://github.com/istanbuljs/babel-plugin-istanbul)|
|`enzyme`|airbnb的React的测试库。[更多](https://github.com/airbnb/enzyme)|
|`eslint`|javascript代码规范检查。[更多](https://github.com/eslint/eslint)|
|`eslint-config-standard`|javascript标准配置。[更多](https://github.com/feross/eslint-config-standard)|
|`eslint-config-standard-react`|react标准配置。[更多](https://github.com/feross/eslint-config-standard-react)|
|`eslint-plugin-babel`|eslint规则插件。[更多](https://github.com/babel/eslint-plugin-babel)|
|`eslint-plugin-promise`|eslint规则插件。[更多](https://github.com/xjamundx/eslint-plugin-promise)|
|`eslint-plugin-react`|eslint规则插件。[更多](https://github.com/yannickcr/eslint-plugin-react)|
|`eslint-plugin-standard`|eslint规则插件。[更多](https://github.com/xjamundx/eslint-plugin-standard)|
|`connect-history-api-fallback`|利用history-api使所有的路由都直接指向index.html文件。[更多](https://github.com/bripkens/connect-history-api-fallback)|
|`karma`|单元测试。[更多](https://www.npmjs.com/package/karma)|
|`karma-coverage`|单元测试。[更多](https://www.npmjs.com/package/karma-coverage)|
|`karma-mocha`|单元测试。[更多](https://www.npmjs.com/package/karma-mocha)|
|`karma-mocha-reporter`|单元测试。[更多](https://www.npmjs.com/package/karma-mocha-reporter)|
|`karma-plantomjs-launcher`|单元测试。[更多](https://www.npmjs.com/package/karma-plantomjs-launcher)|
|`karma-webpack-with-fast-source-map`|单元测试。[更多](https://www.npmjs.com/package/karma-webpack-with-fast-source-map)|
|`mocha`|单元测试。[更多](https://www.npmjs.com/package/mocha)|
|`nodemon`|监控node应用的变化,重启node服务,测试环境使用。[更多](https://www.npmjs.com/package/nodemon)|
|`plantomjs-prebuilt`|node环境下一个无界面webkit浏览器,用于测试。[更多](https://www.npmjs.com/package/plantomjs-prebuilt)|
|`react-addons-test-utils`|react测试附属组件。[更多](https://www.npmjs.com/package/plantomjs-prebuilt)|
|`redbox-react`|react报红抛出错误的组件。[更多](https://www.npmjs.com/package/redbox-react)|
|`webpack-dev-middleware`|用于开发的webpack中间件。[更多](https://www.npmjs.com/package/webpack-dev-middleware)|
|`webpack-hot-middleware`|webpack热插拔中间件。(用于开发环境)[更多](https://www.npmjs.com/package/webpack-hot-middleware)|

## 项目结构

这个项目的结构使用的是 **fractal(不规则碎片形：适合大型项目)**，分组主要是依照特性而不是文件类型。这种结构谐在让程序更容易扩展，想了解更多请[点击这里](https://github.com/justingreenberg)。


```
.
├── bin                         # 启动脚本和编译脚本
├── dist                        # 发版文件
├── build                       # shell 脚本
├── config                      # 项目配置文件
│   ├── api                     # 相关模块 Api 请求地址
│   ├── data                    # 相关配置
│   │   ├── maintain.js         # 站点维护配置
│   │   └── env.js              # Api环境配置
│   ├── lib                     # 第三方配置(包含webpack打包配置)
│   │   ├── env.config.js       # 默认环境配置
│   │   ├── webpack-complier.js # webpack编译函数
│   │   └── webpack.config.js   # webpack配置
│   └── config.js               # 相关配置处理
├── node_modules                # 项目依赖
├── server                      # Express 程序 (使用 webpack 中间件)
│   └── app.js                  # 服务端程序入口文件
├── src                         # 程序源文件
│   ├── app.js                  # 程序启动和渲染
│   ├── index.html              # web页面入口
│   ├── components              # 全局可复用的表现组件
│   ├── containers              # 全局可复用的容器组件
│   ├── modules                 # 可复用组件的reducers/actions的集合
│   ├── layouts                 # 主页结构
│   ├── assets                  # Redux指定块
│   │   ├── img                 # 静态图片资源
│   │   ├── css                 # 公共样式
│   │   └── utils               # js公共方法
│   ├── store                   # Redux指定块
│   │   ├── createStore.js      # 创建和使用redux store
│   │   ├── location.js         # location 的action 和 reducer
│   │   └── reducers.js         # Reducer注册和注入
│   └── routes                  # 主路由和异步分割点
│       ├── index.js            # react路由配置文件
│       ├── Root.js             # providers包住组件,注入store 和 routes
│       └── Home                # 不规则路由
│           ├── index.js        # 路由定义和代码异步分割
│           ├── assets          # 组件引入的静态资源
│           ├── components      # 直观React组件
│           ├── containers      # 连接actions和store
│           ├── modules         # reducers/actions的集合
│           └── routes **       # 不规则子路由(** 可选择的)
├── package.json                # 项目信息文件
└── tests                       # 单元测试

```

## 样式

所有的css和less都支持会被预处理。只要被引入，都会经过[PostCSS](https://github.com/postcss/postcss)压缩，加前缀，所有px单位都会转换成rem单位。
编写css的时候,样式值都写成和视觉稿上标注的值（视觉稿标注一般以设备物理点为单位，像 iPhone6 屏幕 750 的宽度）一样即可。
index.html中会嵌入一段脚本代码,设置html的font-size根值为100px。
样式表在生产环境下会提取到一个css文件下。

## 加载动画
加载动画引用react-spinkit。使用方法:
```
var Spinner = require('react-spinkit');
<Spinner spinnerName='double-bounce' />
```

## 服务端

这个项目的服务端使用express。需要注意的是，只有一个目的那就是提供了`webpack-dev-middleware` 和 `webpack-hot-middleware`（代码热替换）。使用自定义的express程序替换[webpack-dev-server](https://github.com/webpack/webpack-dev-server)，让它更容易实现universal 渲染和为了不使这个包过于庞大。

## 打包优化

Babel被配置[babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime)可以让代码更优化。另外，在生产环境，我们使用[react-optimize](https://github.com/thejameskyle/babel-react-optimize)来优化React代码。
在生产环境下，webpack会导出一个css文件并压缩Javascript，并把js模块优化到最好的性能。

## 静态部署

如果你正在使用nginx处理程序，确保所有的路由都直接指向 `~/dist/index.html` 文件，然后让react-router处理剩下的事。如果你不是很确定应该怎么做，[文档在这里](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#configuring-your-server)。Express在脚手架中用于扩展服务和代理API，或者其它你想要做的事，这完全取决于你。

Thanks you guys all the time.
