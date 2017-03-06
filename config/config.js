
/* --------------------
  环境配置
-------------------- */
var _env = require(__dirname + '/data/env.js');

/* 返回当前环境的配置信息 */
var env = exports.env = (() => {
  var node_env = process.env.NODE_ENV;

  if (typeof node_env === 'undefined') {
    return _env.development;
  } else {
    return _env[node_env];
  }
})();

/* --------------------
  Api 接口
-------------------- */
class Api {
  constructor(target, url) {
    this.target = target;
    this.url = url;
    this.fullApi = {};
  }

  // 基本的api拼接方法，子类根据需要进行改写
  api() {
    for (var i in this.url) {
      this.fullApi[i] = this.target + '/' + this.url[i];
    }

    return this.fullApi;
  }
}

/* --------------------
  站点维护配置
-------------------- */
exports.maintain = require(__dirname + '/data/maintain.js');
