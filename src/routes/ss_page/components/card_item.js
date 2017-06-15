/**
 * Created by Damon on 2017/5/29.
 */
import React from 'react'
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import {
  blue300,
  lightGreenA400,
  deepOrange400,
  red900,
  deepPurple600,
  pink600
} from 'material-ui/styles/colors'

import './card_item.less'

const colors = [blue300, lightGreenA400, deepOrange400, red900, deepPurple600, pink600]
const style = {margin: 5}
const getRandomColor = () => colors[Math.ceil(Math.random() * 5)]

export default class CardItem extends React.PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  textColor = getRandomColor()

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded})
  }

  render () {
    const {server_name, ip, port, password, region, encrypt_method, qr_code, ss_uri} = this.props
    const tirmName = server_name.substr(0, 1).toLocaleUpperCase()
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={server_name}
          subtitle={ip + ':' + port}
          avatar={
            <Avatar
              color='#fff'
              backgroundColor={this.textColor}
              size={30}
              style={style}
            >{tirmName}</Avatar>
          }
          actAsExpander={true}
          showExpandableButton={true}
        />

        <CardMedia expandable={true} className="qr-code">
          <img src={qr_code} alt="qr_code" />
        </CardMedia>

        <CardText expandable={true} className="card-text">
          password: {password} <br/>
          region: {region} <br/>
          encrypt_method: {encrypt_method} <br/>
          ss_uri: <small>{ss_uri}</small>
        </CardText>
      </Card>
    )
  }
}
