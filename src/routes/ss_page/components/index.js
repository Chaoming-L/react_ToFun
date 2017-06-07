/**
 * Created by Damon on 2017/5/29.
 */
import React from 'react'
import CardItem from './card_item'
import { fetchWithToken, apiURL } from "assets/utils/request";


export  default class SsPage extends React.Component {
  render() {
    const obj = {
      "server_name": "xxxxxxx",
      "ip": "xxx.xxx.xxx.xxx",
      "port": "xxxx",
      "password": "xxxx",
      "region": "xxxx",
      "encrypt_method": "xxxx",
      "ss_link": "ss://YmYtY2ZiOnRlc3RAMTkyLjE2OC4xMDAuMTo4ODg4#example"
    }
    return (
      <div>
        <CardItem {...obj}/>
      </div>
    )
  }
}
