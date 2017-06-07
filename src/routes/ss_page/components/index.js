/**
 * Created by Damon on 2017/5/29.
 */
import React from 'react'
import CardItem from './card_item'
import { fetchWithToken, apiURL } from "assets/utils/request";


export  default class SsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ssList: [],
      nextURL: '',
      isFetching: false
    }
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData = () => {
    let that = this;
    fetchWithToken(apiURL.Getss)
      .then(res => res.json())
      .then(data => {
        const ssList = data.results;
        const nextURL = data.next;
        that.setState({ssList, nextURL})
      })
      .catch(err => console.log(err))

  }

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
