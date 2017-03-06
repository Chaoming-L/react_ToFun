/* --------------------
 我们只需导入初始渲染的所需模块
 -------------------- */
// 布局元素
import CoreLayout from "../layouts/CoreLayout";
// 主路由
import Home from "./home";
// 错误处理路由
import PageNotFound from "./PageNotFound";
import Redirect from "./PageNotFound/redirect";

/*
 * 注意：建议使用react-router中的PlainRoute对象来构建路由，而不是使用JSX
 */
export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: {component: Home},
  childRoutes: [
    PageNotFound(),
    Redirect
  ]
})

/*  注意：childRoutes可以分块或以其他方式
 使用带有以下签名的getChildRoutes以编程方式加载：

 getChildRoutes (location, cb) {
 require.ensure([], (require) => {
 cb(null, [
 // Remove imports!
 require('./Counter').default(store)
 ])
 })
 }

 但是，这不是代码拆分所必需的！它只是提供了一个用于异步路由定义的API。
 你的代码拆分应该发生在路由`getComponent`函数内部，因为它只在路由存在
 并匹配时调用。
 */

export default createRoutes
