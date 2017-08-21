export default () => ({
  path: 'chat',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const indexPage = require('./components/index.js').default
      cb(null, indexPage)
    })
  }
})
