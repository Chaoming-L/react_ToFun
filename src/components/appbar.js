import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import { openLink } from 'assets/utils/tool'
import Account from 'material-ui/svg-icons/action/account-circle'
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/home'
import Out from 'material-ui/svg-icons/maps/directions-run'
import { browserHistory } from 'react-router'
import { fetchWithToken, apiURL } from 'assets/utils/request'
import { logout } from 'modules/app_bar'

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

  _goHome = () => browserHistory.replace('/')

  _gotoLogin = () => {
    browserHistory.push('/login')
    this.handleClose()
  }

  _logout = () => {
    const {logout} = this.props

    fetchWithToken(apiURL.Logout)
      .then(data => data.json())
      .then(response => {
        if (response.error_code == 0) {
          localStorage.removeItem('Token')
          // 通知store 用户已经登出
          logout()
          browserHistory.replace('/')
          this.handleClose()
        } else {
          alert(response.detail)
        }
      })
      .catch(err => console.log('登出问题:' + err))
  }

  render () {
    const {isLogin, appTitle} = this.props

    return (
      <div>
        <div className='fixed-nav'>
          <AppBar
            title={appTitle} titleStyle={this.titleCSS}
            onLeftIconButtonTouchTap={this.handleToggle}
            onRightIconButtonTouchTap={this._goHome}
            iconElementRight={<IconButton><Home/></IconButton>}

          />
        </div>

        <Drawer open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                docked={false}
                width={280}>

          {isLogin ? <div className="login-btn logout" onTouchTap={this._logout}>
            <Out className="login-icon"/>
          </div> : <div className="login-btn" onTouchTap={this._gotoLogin}>
            <Account className="login-icon"/>
          </div>}


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

const mapStateToProps = ({appBar}) => ({
  ...appBar
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBarFixed)
