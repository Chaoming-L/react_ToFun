const fs = require('fs-extra')
const debug = require('debug')('app:bin:compile')
const webpackCompiler = require('../config/lib/webpack-compiler')
const webpackConfig = require('../config/lib/webpack.config')
const config = require('../config/lib/env.config')

const paths = config.utils_paths

const compile = () => {
  debug('开始编译')

  return Promise.resolve()
    .then(() => webpackCompiler(webpackConfig))
    .then(stats => {
      if (stats.warnings.length && config.compiler_fail_on_warning) {
        throw new Error('Config设置为失败警告, 退出状态码为“1”')
      }

      debug('复制img至dist文件夹')

      fs.copySync(paths.client('./assets/img'), paths.dist())
    })
    .then(() => {
      debug('编译成功')
    })
    .catch((err) => {
      debug('编译程序遇到一个错误', err)
      process.exit(1)
    })
}

compile()
