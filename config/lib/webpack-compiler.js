const webpack = require('webpack')
const debug = require('debug')('app:build:webpack-compiler')
const config = require('./env.config')

function webpackCompiler (webpackConfig, statsFormat) {
  statsFormat = statsFormat || config.compiler_stats

  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig)

    compiler.run((err, stats) => {
      if (err) {
        debug('编译器遇到webpack致命错误', err)
        return reject(err)
      }

      const jsonStats = stats.toJson()
      debug('webpack编译完成')
      debug(stats.toString(statsFormat))

      if (jsonStats.errors.length > 0) {
        debug('编译器遇到webpack错误')
        debug(jsonStats.errors.join('\n'))
        return reject(new Error('编译器遇到webpack错误'))
      } else if (jsonStats.warnings.length > 0) {
        debug('编译器遇到webpack警告')
        debug(jsonStats.warnings.join('\n'))
      } else {
        debug('没有遇到错误或警告')
      }

      resolve(jsonStats)
    })
  })
}

module.exports = webpackCompiler
