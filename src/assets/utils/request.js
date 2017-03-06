import 'babel-polyfill'
import fetch from 'isomorphic-fetch'


export function qnfetch(url, datas = {}) {
  return fetch(url, {
      method: 'POST',
    body: JSON.stringify(datas)
  })
}

