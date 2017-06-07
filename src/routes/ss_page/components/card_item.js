/**
 * Created by Damon on 2017/5/29.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import {
  blue300,
  lightGreenA400,
  deepOrange400,
  red900,
  deepPurple600,
  pink600
} from 'material-ui/styles/colors';
const colors = [blue300, lightGreenA400, deepOrange400, red900, deepPurple600, pink600];
const style = {margin: 5};
const getRandomColor = () => colors[Math.ceil(Math.random() * 5)]

export default class CardItem extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  render() {
    const {server_name, ip, port, password, region, encrypt_method, ss_link} = this.props
    const tirmName = server_name.substr(0,1).toLocaleUpperCase()
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={server_name}
          subtitle={ip + ':' + port}
          avatar={
            <Avatar
              color='#fff'
              backgroundColor={getRandomColor()}
              size={30}
              style={style}
            >{tirmName}</Avatar>
          }
          actAsExpander={true}
          showExpandableButton={true}
        />

        <CardMedia
          expandable={true}
        >
          <img src={ss_link}/>
        </CardMedia>
        <CardText expandable={true}>
          password: {password} <br/>
          region: {region} <br/>
          encrypt_method: {encrypt_method}
        </CardText>
      </Card>
    );
  }
}
