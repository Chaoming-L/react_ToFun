import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import { openLink } from 'assets/utils/tool'
import Account from 'material-ui/svg-icons/action/account-circle'
import ShowChart from 'material-ui/svg-icons/editor/show-chart'
import IconButton from 'material-ui/IconButton'
import Home from 'material-ui/svg-icons/action/home'
import Out from 'material-ui/svg-icons/maps/directions-run'
import Send from 'material-ui/svg-icons/content/send'
import { browserHistory } from 'react-router'
import { fetchWithToken, apiURL } from 'assets/utils/request'
import { logout } from 'modules/app_bar'

import './appbar.less'

class AppBarFixed extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open })
  handleClose = () => this.setState({ open: false })

  _goHome = () => browserHistory.replace('/')

  _gotoThisPage = (page) => {
    browserHistory.push(page)
    this.handleClose()
  }

  _logout = () => {
    const { logout } = this.props
    localStorage.removeItem('Token')
    fetchWithToken(apiURL.Logout)
      .then(data => data.json())
      .then(response => {
        if (response.error_code == 0) {
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


  renderSSbtn = (isLogin) => (
    isLogin ?
      <div className="block-btn ss-page" onTouchTap={() => 　this._gotoThisPage('/ss_page')}>
        <Send className="block-icon" />
      </div>
      : null
  )

  renderLoginBtn = (isLogin) => (
    isLogin ?
      <div className="block-btn logout" onTouchTap={this._logout}>
        <Out className="block-icon" />
      </div>
      :
      <div className="block-btn" onTouchTap={() => this._gotoThisPage('/login')}>
        <Account className="block-icon" />
      </div>
  )

  render() {
    const { isLogin, appTitle } = this.props

    return (
      <div>
        <div className='fixed-nav'>
          <AppBar
            title={appTitle} titleStyle={{ textAlign: 'center' }}
            onLeftIconButtonTouchTap={this.handleToggle}
            onRightIconButtonTouchTap={this._goHome}
            iconElementRight={<IconButton><Home /></IconButton>}

          />
        </div>

        <Drawer open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
          docked={false}
          width={280}>

          {/* 登陆/登出 按钮 */ this.renderLoginBtn(isLogin)}
          {/* shadowsocks 按钮 */ this.renderSSbtn(isLogin)}
          <div className="block-btn charts-page" onTouchTap={() => this._gotoThisPage('/charts_page')}>
            <ShowChart className="block-icon" />
          </div>

          <List className="about-me">
            <div className="author">Author:</div>
            <ListItem primaryText='🐦Damon' secondaryText='https://github.com/chaoming56'
              onTouchTap={() => openLink('https://github.com/chaoming56')} />
            <ListItem primaryText='🐮Ross' secondaryText='https://github.com/DevRoss'
              onTouchTap={() => openLink('https://github.com/DevRoss')} />
          </List>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = ({ appBar }) => ({
  ...appBar
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBarFixed)
