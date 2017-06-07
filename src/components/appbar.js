import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import { openLink } from 'assets/utils/tool'
import Account from 'material-ui/svg-icons/action/account-circle'
import { browserHistory } from 'react-router'

import './appbar.less'

class AppBarFixed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  titleCSS = {
    textAlign: 'center'
  }

  handleToggle = () => this.setState({open: !this.state.open})
  handleClose = () => this.setState({open: false})

  _gotoLogin = () => {
    browserHistory.push('/login')
    this.handleClose()
  }

  render () {
    return (
      <div>
        <div className='fixed-nav'>
          <AppBar
            title="TOFUN" titleStyle={this.titleCSS}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
        </div>

        <Drawer open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                docked={false}
                width={280}>

          <div className="login-btn" onTouchTap={this._gotoLogin}>
            <Account className="login-icon"/>
          </div>

          <List className="about-me">
            <div className="author">Author:</div>
            <ListItem primaryText='Damon' secondaryText='https://github.com/chaoming56'
                      onTouchTap={() => openLink('https://github.com/chaoming56')}/>
            <ListItem primaryText='Ross' secondaryText='https://github.com/DevRoss'
                      onTouchTap={() => openLink('https://github.com/DevRoss')}/>
          </List>
        </Drawer>
      </div>
    )
  }
}

export default AppBarFixed
