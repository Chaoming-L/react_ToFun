import React from 'react'
import ContentAdd from "material-ui/svg-icons/content/add"
import FloatingActionButton from "material-ui/FloatingActionButton"
import Dialog from "material-ui/Dialog"
import FlatButton from "material-ui/FlatButton"
import TextField from "material-ui/TextField"
import './dialog.less'

export default class InputDialog extends React.Component {
    state = {
        dialogOpen: false
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
                            id="contentText"
                        />
                        <TextField style={{ width: '100%' }}
                            floatingLabelText="ip"
                            multiLine={true}
                            rows={1}
                            id="contentText"
                        />
                        <TextField style={{ width: '100%' }}
                            floatingLabelText="port"
                            multiLine={true}
                            rows={1}
                            id="contentText"
                        />
                        <TextField style={{ width: '100%' }}
                            floatingLabelText="password"
                            multiLine={true}
                            rows={1}
                            id="contentText"
                        />
                        <TextField style={{ width: '100%' }}
                            floatingLabelText="region"
                            multiLine={true}
                            rows={1}
                            id="contentText"
                        />
                        <TextField style={{ width: '100%' }}
                            floatingLabelText="encrypt method"
                            multiLine={true}
                            rows={1}
                            id="contentText"
                        />
                    </div>

                </Dialog>
            </div>

        )
    }
}