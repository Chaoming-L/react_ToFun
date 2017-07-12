export default () => ({
  path: 'charts_page',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ChartsPage = require('./components/index.js').default
      cb(null, ChartsPage)
    })
  }
})
