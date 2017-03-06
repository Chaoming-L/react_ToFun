import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import api from '../api'

export function qnfetch(url, datas = {}, method = 'GET') {
  if (method === 'GET') {
    return fetch(url)
  } else {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(datas)
    })
  }

};

export const apiURL = api;
