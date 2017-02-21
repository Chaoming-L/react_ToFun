const express = require('express')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const webpackConfig = require('../config/lib/webpack.config')
const config = require('../config/lib/env.config')


const app = express()
const paths = config.utils_paths

/*
 这会将所有路由请求重写到根/index.html文件（忽略文件请求）。
 如果要实现通用呈现，您需要删除此中间件。
 */
app.use(require('connect-history-api-fallback')())

/* --------------------
 应用Webpack HMR中间件
 -------------------- */
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('启用webpack dev和HMR中间件')

  // 资源服务器，文件修改自动打包
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath, // 公共路径绑定中间件
    contentBase: paths.client(),
    hot: true,
    quiet: config.compiler_quiet, // 不在控制台显示任何内容
    noInfo: config.compiler_quiet, // 显示没有信息到控制台（只有警告和错误）
    lazy: false, // 是否切换到懒惰模式，这意味着不是实时编译，而是在每次请求时编译
    stats: config.compiler_stats // 格式化统计信息的选项
  }))

  // 代码热替换,开发环境使用
  app.use(require('webpack-hot-middleware')(compiler))

  /* --------------------
   从~/src/static目录提供静态资源，因为webpack不知道这些文件。
   这个中间件不需要在开发环境之外启用，因为当编译应用程序时，此目录将被复制到~/dist目录。
   -------------------- */
  app.use(express.static(paths.client('static')))
} else {
  debug('服务器在实时开发模式之外运行，这意味着它将仅在~/dist目录中提供已编译的应用程序包。')

  // 指定静态文件目录
  app.use(express.static(paths.dist()))
}

module.exports = app
