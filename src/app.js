import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import AppContainer from './containers/app_container'


/* --------------------
  实例化 Store
-------------------- */
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

/* --------------------
  渲染设置
-------------------- */
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer store={store} routes={routes} />,
    MOUNT_NODE
  )
}

/* --------------------
  开发人员工具设置
-------------------- */
if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// 此代码将从生产包中排除
if (__DEV__) {
  if (module.hot) {
    // 开发环境下的渲染方法
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // try/catch 判断渲染
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // 设置模块热替换
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

/* --------------------
  运行起来
-------------------- */
render()
