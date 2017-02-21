/* ====================
  配置处理
==================== */

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

/* 用户体系接口 */
class userApi extends Api {
  constructor() {
    super(env.target.user, require(__dirname + '/api/user.js'));
  }
}

/* 行情模块接口 */
class marketApi extends Api {
  constructor() {
    super(env.target.market, require(__dirname + '/api/market.js'));
  }
}

/* 组合模块接口 */
class portfolioApi extends Api {
  constructor() {
    super(env.target.portfolio, require(__dirname + '/api/portfolio.js'));
  }
}

/* web app 接口 */
class webappApi extends Api {
  constructor() {
    super(env.target.webapp, require(__dirname + '/api/webapp.js'));
  }
}

/* 及时通讯模块接口 */
class imApi extends Api {
  constructor() {
    super(env.target.im, require(__dirname + '/api/im.js'));
  }
}

/* 投顾模块模块接口 */
class adviserApi extends Api {
  constructor() {
    super(env.target.adviser, require(__dirname + '/api/adviser.js'));
  }
}

/* 支付模块接口 */
class cashApi extends Api {
  constructor() {
    super(env.target.cash, require(__dirname + '/api/cash.js'));
  }
}

/* 卡券模块接口 */
class couponApi extends Api {
  constructor() {
    super(env.target.coupon, require(__dirname + '/api/coupon.js'));
  }
}

/* 理财模块接口 */
class financialApi extends Api {
  constructor() {
    super(env.target.financial, require(__dirname + '/api/financial.js'));
  }
}

/* 导出接口 */
exports.api = {
  user: new userApi().api(),
  market: new marketApi().api(),
  portfolio: new portfolioApi().api(),
  webapp: new webappApi().api(),
  im: new imApi().api(),
  adviser: new adviserApi().api(),
  cash: new cashApi().api(),
  coupon: new couponApi().api(),
  financial: new financialApi().api()
};

/* --------------------
  站点维护配置
-------------------- */
exports.maintain = require(__dirname + '/data/maintain.js');
