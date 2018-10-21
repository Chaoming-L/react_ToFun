import React from 'react'
import { qnfetch, apiURL } from 'assets/utils/request'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { browserHistory } from 'react-router'
import { login } from 'modules/app_bar'
import { connect }from 'react-redux'
import setTitle from 'hoc/set_app_title';
import './login.less'



@connect(null, 
(dispatch) => ({
  login: () => dispatch(login())
})
)
@setTitle('🔑Login')
export default class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  _handleLogin = () => {
    const {username, password} = this.state
    const {login} = this.props

    if (username && password) {
      qnfetch(apiURL.Login, {username, password}, 'POST')
        .then(data => data.json())
        .then(data => {
          if (data.error_code == 0) {
            const Token = data.Token
            // 写入token
            localStorage.setItem('Token', Token)
            // 通知store 用户登陆了
            login()

            browserHistory.replace('/ss_page')
          } else {
            alert(data.detail)
          }
        })
    }
  }

  _handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div className="login-page">
        <TextField hintText="username" value={this.state.username} name="username" type="text" onChange={this._handleChange}/>
        <TextField hintText="password" value={this.state.password} name="password" type="password" onChange={this._handleChange}/>
        <RaisedButton label="Login" primary={true} onTouchTap={this._handleLogin}/>
      </div>
    )
  }
}
