import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import api from '../api'
import pvAPI from '../pvAPI'

export function qnfetch(url, datas = {}, method = 'GET') {
  if (method === 'GET') {
    return fetch(url)
  } else {
    return fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(datas)
    })
  }
};

export function fetchWithToken(url, params, method) {
  if (localStorage.getItem('Token')) {
    const Token = localStorage.getItem('Token')
    let requestObj = {
      method: method || 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${Token}`
      }
    }

    if (params && method) {
      requestObj = { ...requestObj, body: JSON.stringify(params) }
    }

    return fetch(url, requestObj)
  } else {
    return new Promise((resolve, reject) => {
      reject('重新登录吧')
    })
  }
}

export const apiURL = api;
export const pvURL = pvAPI;
