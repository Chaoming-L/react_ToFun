/**
 * Created by Damon on 2017/5/29.
 */
import React from 'react'
import { connect } from 'react-redux'
import CardItem from './card_item'
import { fetchWithToken, apiURL } from 'assets/utils/request'
import setTitle from 'hoc/set_app_title';

class SsPage extends React.Component {
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
    let that = this
    fetchWithToken(apiURL.Getss)
      .then(res => res.json())
      .then(data => {
        const ssList = data.results
        const nextURL = data.next
        that.setState({ ssList, nextURL })
      })
      .catch(err => console.log(err))

  }

  render() {
    const { ssList } = this.state
    return (
      <div>
        {ssList.map((item, index) => (
          <CardItem {...item} key={index} />
        ))}
      </div>
    )
  }
}

export default setTitle('Shadowsocks')(SsPage)
