/* ====================
  环境配置
==================== */

module.exports = {
  // 开发环境
  development: {
    port: 3000, // 端口号
    secretKey: "562872563", // 后端交互加密 key
    // 后端服务模块
    target: {
      user: "https://devweb.yiqiniu.com:9000", // 用户体系
      market: "https://devweb.yiqiniu.com:9001", // 行情
      portfolio: "https://devweb.yiqiniu.com:9002", // 组合
      webapp: "https://devweb.yiqiniu.com:9003", // web app
      im: "https://devweb.yiqiniu.com:9004", // 即时通信
      adviser: "https://devweb.yiqiniu.com:9005", // 投顾，包含问答、观点
      cash: "https://devweb.yiqiniu.com:9006", // 支付
      coupon: "https://devweb.yiqiniu.com:9007", // 卡券
      financial: "https://devweb.yiqiniu.com:9009" // 理财
    },
  },
  // 测试环境
  test: {
    port: 3000, // 端口号
    secretKey: "562872563", // 后端交互加密 key
    // 后端服务模块
    target: {
      user: "https://devweb.yiqiniu.com:9000", // 用户体系
      market: "https://devweb.yiqiniu.com:9001", // 行情
      portfolio: "https://devweb.yiqiniu.com:9002", // 组合
      webapp: "https://devweb.yiqiniu.com:9003", // web app
      im: "https://devweb.yiqiniu.com:9004", // 即时通信
      adviser: "https://devweb.yiqiniu.com:9005", // 投顾，包含问答、观点
      cash: "https://devweb.yiqiniu.com:9006", // 支付
      coupon: "https://devweb.yiqiniu.com:9007", // 卡券
      financial: "https://devweb.yiqiniu.com:9009" // 理财
    },
  },
  // 预生产环境
  uat: {
    port: 3000, // 端口号
    secretKey: "562872563", // 后端交互加密 key
    // 后端服务模块
    target: {
      user: "https://uatweb.yiqiniu.com:9000", // 用户体系
      market: "https://uatweb.yiqiniu.com:9001", // 行情
      portfolio: "https://uatweb.yiqiniu.com:9002", // 组合
      webapp: "https://uatweb.yiqiniu.com:9003", // web app
      im: "https://uatweb.yiqiniu.com:9004", // 即时通信
      adviser: "https://uatweb.yiqiniu.com:9005", // 投顾，包含问答、观点
      cash: "https://uatweb.yiqiniu.com:9006", // 支付
      coupon: "https://uatweb.yiqiniu.com:9007", // 卡券
      financial: "https://uatweb.yiqiniu.com:9009" // 理财
    },
  },
  // 生产环境
  production: {
    port: 3000, // 端口号
    secretKey: "863632652", // 后端交互加密 key
    // 后端服务模块
    target: {
      user: "https://api.yiqiniu.com:9000", // 用户体系
      market: "https://api.yiqiniu.com:9001", // 行情
      portfolio: "https://api.yiqiniu.com:9002", // 组合
      webapp: "https://api.yiqiniu.com:9003", // web app
      im: "https://api.yiqiniu.com:9004", // 即时通信
      adviser: "https://api.yiqiniu.com:9005", // 投顾，包含问答、观点
      cash: "https://api.yiqiniu.com:9006", // 支付
      coupon: "https://api.yiqiniu.com:9007", // 卡券
      financial: "https://api.yiqiniu.com:9009" // 理财
    },
  }
};
