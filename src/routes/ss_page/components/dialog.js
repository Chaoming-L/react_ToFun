import React from 'react'
import ContentAdd from "material-ui/svg-icons/content/add"
import FloatingActionButton from "material-ui/FloatingActionButton"
import Dialog from "material-ui/Dialog"
import FlatButton from "material-ui/FlatButton"
import TextField from "material-ui/TextField"
import { fetchWithToken, apiURL } from 'assets/utils/request'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import './dialog.less'

import withSnackbar from 'hoc/snackbar';

@withSnackbar
export default class InputDialog extends React.Component {
    state = {
        dialogOpen: false,
        value: 'chacha20'
    }

    handleOpen = () => {
        this.setState({
            dialogOpen: true
        })
    }

    handleClose = () => {
        this.setState({
            dialogOpen: false
        })
    }

    handleChange = (event, index, value) => this.setState({ value });


    handleSend = () => {
        const { openSnackbar, fetchData } = this.props,
            that = this;

        const doc = document,
            server_name = doc.getElementById('server_name').value,
            ip = doc.getElementById('ip').value,
            port = doc.getElementById('port').value,
            password = doc.getElementById('password').value,
            region = doc.getElementById('region').value,
            encrypt_method = that.state.value;

        const params = { server_name, ip, port, password, region, encrypt_method }
        fetchWithToken(apiURL.Add_ss, params, 'POST')
            .then(res => res.json())
            .then(res => {
                if (res.error_code == 0) {
                    fetchData()
                    that.handleClose()
                    openSnackbar('添加成功!')
                } else if (res.error_code == 3) {
                    openSnackbar('你没有supser user权限!')
                } else if(res.error_code == 1){
                    openSnackbar('输入信息有误!')
                } else {
                    openSnackbar('请重新登录!')
                }
            })
            .catch(error => {
                console.log(err)
            })


    }

    render() {
        return (
            <div>
                <FloatingActionButton secondary={true} className="floating-button" onTouchTap={this.handleOpen}>
                    <ContentAdd />
                </FloatingActionButton>

                <Dialog
                    autoScrollBodyContent={true}
                    actions={[
                        <FlatButton
                            label="Cancel"
                            primary={true}
                            onTouchTap={this.handleClose}
                        />,
                        <FlatButton
                            label="Send"
                            primary={true}
                            keyboardFocused={true}
                            onTouchTap={this.handleSend}
                        />,
                    ]}
                    modal={false}
                    open={this.state.dialogOpen}
                    onRequestClose={this.handleClose}
                    style={{ overflow: 'scroll' }}
                >
                    <div>
                        <TextField style={{ width: '100%' }}
                            floatingLabelText="server name"
                            multiLine={true}
                            rows={1}
                            id="server_name"
                        />
                        <TextField style={{ width: '100%' }}
                            floatingLabelText="ip"
                            multiLine={true}
                            rows={1}
                            id="ip"
                        />
                        <TextField style={{ width: '100%' }}
                            floatingLabelText="port"
                            multiLine={true}
                            rows={1}
                            id="port"
                        />
                        <TextField style={{ width: '100%' }}
                            floatingLabelText="password"
                            multiLine={true}
                            rows={1}
                            id="password"
                        />
                        <TextField style={{ width: '100%' }}
                            floatingLabelText="region"
                            multiLine={true}
                            rows={1}
                            id="region"
                        />

                        <DropDownMenu value={this.state.value} onChange={this.handleChange} style={{ width: '100%', paddingLeft: '0' }}>
                            <MenuItem value={'chacha20'} primaryText="chacha20" />
                            <MenuItem value={'bf-cfb'} primaryText="bf-cfb" />
                            <MenuItem value={'salsa20'} primaryText="salsa20" />
                            <MenuItem value={'rc4-md5'} primaryText="rc4-md5" />
                            <MenuItem value={'aes-128-ctr'} primaryText="aes-128-ctr" />
                            <MenuItem value={'aes-192-ctr'} primaryText="aes-192-ctr" />
                            <MenuItem value={'aes-256-ctr'} primaryText="aes-256-ctr" />
                            <MenuItem value={'aes-128-cfb'} primaryText="aes-128-cfb" />
                            <MenuItem value={'aes-192-cfb'} primaryText="aes-192-cfb" />
                            <MenuItem value={'aes-256-cfb'} primaryText="aes-256-cfb" />
                            <MenuItem value={'camellia-128-cfb'} primaryText="camellia-128-cfb" />
                            <MenuItem value={'camellia-192-cfb'} primaryText="camellia-192-cfb" />
                            <MenuItem value={'camellia-256-cfb'} primaryText="camellia-256-cfb" />
                            <MenuItem value={'chacha20-ietf'} primaryText="chacha20-ietf" />
                        </DropDownMenu>
                    </div>

                </Dialog>
            </div>

        )
    }
}