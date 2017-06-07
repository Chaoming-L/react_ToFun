const path = require('path') // 路径
const debug = require('debug')('app:env.config') // 控制台输出
const argv = require('yargs').argv  // yargs 模块能够解决如何处理命令行参数. yargs 模块提供 argv 对象，用来读取命令行参数。
const ip = require('ip') // IP地址实用工具

debug('创建默认配置')

/* ====================
 默认配置
 ==================== */
const config = {
  env: process.env.NODE_ENV || 'development', // 当前系统环境变量，没有设置则为development

  /* --------------------
   项目结构
   -------------------- */
  path_base: path.resolve(__dirname, '../../'),
  dir_client: 'src', // 客户端
  dir_dist: 'dist', // 最终发布版本
  dir_server: 'server', // 服务端
  dir_test: 'tests', // 测试

  /* --------------------
   服务端配置
   -------------------- */
  server_host: ip.address(), // 使用localhost可防止本地ip地址曝光
  server_port: process.env.PORT || 5656, // 端口号

  /* --------------------
   编译配置
   -------------------- */
  compiler_babel: {
    cacheDirectory: true,
    plugins: ['transform-runtime'],
    presets: ['es2015', 'react', 'stage-0']
  },
  compiler_devtool: 'source-map',
  compiler_hash_type: 'hash',
  compiler_fail_on_warning: false,
  compiler_quiet: false,
  compiler_public_path: '/',
  compiler_stats: {
    chunks: false,
    chunkModules: false,
    colors: true
  },
  compiler_vendors: [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'redux',
    'moment'
  ],

  /* --------------------
   测试配置
   -------------------- */
  coverage_reporters: [
    {
      type: 'text-summary'
    },
    {
      type: 'lcov',
      dir: 'coverage'
    }
  ]
}

/************************************************
 -------------------------------------------------

 所有内部配置编辑都有风险

 -------------------------------------------------
 ************************************************/

/* --------------------
 环境
 注意：此处添加的全局变量，必须添加到 .eslintrc
 -------------------- */
config.globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env)
  },
  'NODE_ENV': config.env,
  '__DEV__': config.env === 'development',
  '__PROD__': config.env === 'production',
  '__TEST__': config.env === 'test',
  '__GO__': config.env === 'go'
}


/* --------------------
 公用工具
 -------------------- */
function base () {
  const args = [config.path_base].concat([].slice.call(arguments))
  return path.resolve.apply(path, args)
}

config.utils_paths = {
  base: base,
  client: base.bind(null, config.dir_client),
  dist: base.bind(null, config.dir_dist)
}

/* --------------------
 环境配置
 -------------------- */
debug(`寻找是否有新的运行环境覆盖 NODE_ENV "${config.env}".`)

const environments = {
  // ======================================================
  //  当 NODE_ENV === 'development' 的时候
  // ======================================================
  // NOTE: 在开发环境下,静态资源都指向localhost
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  development: (config) => ({
    compiler_public_path: `http://${config.server_host}:${config.server_port}/`
  }),

  // ======================================================
  // 当 NODE_ENV === 'production' 的时候
  // ======================================================
  production: (config) => ({
    compiler_public_path: '/',
    compiler_fail_on_warning: false,
    compiler_hash_type: 'chunkhash',
    compiler_devtool: null,
    compiler_stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    }
  })
}

const overrides = environments[config.env]

if (overrides) {
  debug('发现新的运行环境，应用到默认配置')
  Object.assign(config, overrides(config))
} else {
  debug('没有新的运行环境，将使用默认配置')
}

module.exports = config
