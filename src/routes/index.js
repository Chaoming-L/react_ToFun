/* --------------------
 我们只需导入初始渲染的所需模块
 -------------------- */
// 布局元素
import CoreLayout from "../layouts/CoreLayout";
// 主路由
import Home from "./home";
import login from  './login';
import ssPage from './ss_page';
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
    {
      path: 'login',
      component: login
    },
    ssPage(store),
    PageNotFound(),
    Redirect
  ]
})

export default createRoutes
