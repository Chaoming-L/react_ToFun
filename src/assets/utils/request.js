import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

let commonDatas = {
    channel: 'WEB-GUOSEN',
    version: '1.2',
    params: {}
}

export function qnfetch(url, datas = {}) {
  let initDatas = Object.assign({}, commonDatas, {
    params: datas
  })

  return fetch(url, {
      method: 'POST',
      body: JSON.stringify(initDatas)
  })

}

/*
 * 同步请求
 * @param {String} 请求URL地址
 * @param {Function} 请求成功后的回调
 */
export function syncRequest(url, datas, callback) {
  var request = new XMLHttpRequest()
  request.open('POST', url, false)

  let initDatas = Object.assign({}, commonDatas, {
      params: datas
  })

  request.send(JSON.stringify(initDatas))

  callback(JSON.parse(request.responseText))

}
