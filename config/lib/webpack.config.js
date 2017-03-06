const webpack = require('webpack')
const cssnano = require('cssnano')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./env.config')
const debug = require('debug')('app:webpack:config')
const pxtorem = require('postcss-pxtorem')

const paths = config.utils_paths
const env = config.globals.NODE_ENV
const __DEV__ = config.globals.__DEV__
const __PROD__ = config.globals.__PROD__
const __TEST__ = config.globals.__TEST__
const __UAT__ = config.globals.__UAT__


debug('正在创建配置')
debug('当前环境是：' + env)


/* --------------------
 WebPack基本配置
 -------------------- */
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool, // 值是：source-map
  /* 其他解决方案配置 */
  resolve: {
    // 查找module的话从这里开始查找
    root: paths.client(),
    // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['', '.web.js', '.js', '.jsx', '.json']
  },
  module: {}
}

/* --------------------
 页面入口文件配置
 -------------------- */
const APP_ENTRY = paths.client('app.js')

webpackConfig.entry = {
  app: __DEV__
    ? [APP_ENTRY].concat(`webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`)
    : [APP_ENTRY],
  vendor: config.compiler_vendors
}

/* --------------------
 入口文件输出配置
 -------------------- */
webpackConfig.output = {
  filename: `[name].[${config.compiler_hash_type}].js`,
  chunkFilename: '[chunkhash].js',
  path: paths.dist(),
  publicPath: config.compiler_public_path
}

/* --------------------
 插件项
 -------------------- */
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  new HtmlWebpackPlugin({
    // webpack需要模板的路径
    template: paths.client('index.html'),
    // 如果为true，这对缓存清除很有用
    hash: false,
    // 将指定的favicon路径添加至html
    favicon: paths.client('./assets/img/favicon.ico'),
    // 要将html写入的文件，默认为index.html；您也可以在这里指定一个子目录（例如：assets/admin.html）
    filename: 'index.html',
    // 可选项（true|'head'|'body'|false），值为true或'body'时，所有javascript资源将放置在body元素的底部；值为'head'时，讲javascript资源放置在head元素中。
    inject: 'body',
    // 将html-minifier选项对象专递给minifier输出
    minify: {
      collapseWhitespace: true
    }
  })
]

/* 针对不同的运行环境启用不同的插件 */
if (__DEV__) {
  // 开发环境启用如下插件
  debug('启用开发插件 (HMR, NoErrors).')

  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),  // 模块热加载
    new webpack.NoErrorsPlugin()
  )
} else if (__PROD__) {
  // 生产环境启用如下插件
  debug('启用生产插件 (OccurenceOrder, Dedupe & UglifyJS).')

  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),            // 删除重复代码插件
    new webpack.optimize.UglifyJsPlugin({           // JS压缩插件
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

/* 在测试期间不要拆分包，因为我们只需要导入一个包
 CommonsChunkPlugin插件，可以用于提取多个入口文件的公共脚本部分，然后生成一个common.js来方便多页面之间进行复用。 */
if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  )
}

/* --------------------
    JS 和 JSON 加载器
 -------------------- */
webpackConfig.module.loaders = [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: config.compiler_babel
}, {
  test: /\.json$/,
  loader: 'json'
}]

/* --------------------
 样式加载器
 -------------------- */
// 因为使用postcss及cssnano处理样式，所以css-loader中不压缩代码
const BASE_CSS_LOADER = 'css?-minimiz'

webpackConfig.module.loaders.push({
  test: /\.less$/,
  exclude: null,
  loaders: [
    'style',
    BASE_CSS_LOADER,
    'postcss',
    'less'
  ]
})

webpackConfig.module.loaders.push({
  test: /\.css$/,
  exclude: null,
  loaders: [
    'style',
    BASE_CSS_LOADER,
    'postcss'
  ]
})

webpackConfig.lessLoader = {
  includePaths: paths.client('./assets/styles')
}

webpackConfig.postcss = [
  cssnano({
    autoprefixer: {
      add: true, // 添加前缀
      remove: true, // 删除过时前缀
      browsers: ['> 1% in CN', 'iOS 6']   // 支持iOS6以上
    },
    discardComments: {
      removeAll: true // 删除所有注释
    },
    discardUnused: false,
    mergeIdents: false,
    reduceIdents: false,
    safe: true,
    sourcemap: false
  })
]

// 将样式的px单位转化为rem单位
webpackConfig.postcss.push(pxtorem({
  rootValue: 100,        //页面根font-size = 100px
  propWhiteList: [],
  minPixelValue: 2
}));

/* --------------------
 文件加载器
 -------------------- */
webpackConfig.module.loaders.push(
  { test: /\.woff(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:20].[ext]&limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:20].[ext]&limit=10000&mimetype=application/font-woff2' },
  { test: /\.otf(\?.*)?$/, loader: 'file?prefix=fonts/&name=[hash:base64:20].[ext]&limit=10000&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:20].[ext]&limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/, loader: 'file?prefix=fonts/&name=[hash:base64:20].[ext]' },
  { test: /\.svg(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:20].[ext]&limit=10000&mimetype=image/svg+xml' },
  { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' } // 表示将所有小于8kb的图片都转为base64形式（其实应该说超过8kb的才使用 url-loader 来映射到文件，否则转为data url形式）。
)

/* --------------------
 完成配置
 -------------------- */
// 当我们不知道公共路径，我们需要使用extractTextPlugin来解决这个问题：
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
if (!__DEV__) {
  // 不在开发环境下
  debug('使用ExtractTextPlugin作为CSS加载程序')

  webpackConfig.module.loaders.filter((loader) =>
    loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[0]))
  ).forEach((loader) => {
    const first = loader.loaders[0]
    const rest = loader.loaders.slice(1)

    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))

    delete loader.loaders
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true
    })
  )
}

module.exports = webpackConfig
