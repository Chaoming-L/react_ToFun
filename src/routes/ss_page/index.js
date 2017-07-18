/**
 * Created by Damon on 2017/5/29.
 */
export default (store) => ({
  path: 'ss_page',
  indexRoute: {
    onEnter (nextState, replace) {
      if(!localStorage.getItem('Token')) {
        replace('/login')
      }
    }
  },
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Index = require('./components/index').default         //页面入口
      cb(null, Index)
    })
  }
})
