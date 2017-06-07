import React from 'react'
import { qnfetch, apiURL } from 'assets/utils/request'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { browserHistory } from 'react-router'

import './login.less'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  _handleLogin = () => {
    const {username, password} = this.state
    if (username && password) {
      qnfetch(apiURL.Login, {username, password}, 'POST')
        .then(data => data.json())
        .then(data => {
          if (data.error_code == 0) {
            const Token = data.Token
            // 写入token
            localStorage.setItem('Token', Token);
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

  render() {
    return (
      <div className="login-page">
        <TextField hintText="username" value={this.state.username} name="username" onChange={this._handleChange}/>
        <TextField hintText="password" value={this.state.password} name="password" onChange={this._handleChange}/>
        <RaisedButton label="Login" primary={true} onTouchTap={this._handleLogin}/>
      </div>
    )
  }
}

export default Login
