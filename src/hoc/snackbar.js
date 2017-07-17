import Snackbar from 'material-ui/Snackbar'
import React from 'react'

const withSnackbar = WrapComnent => class WithSnackbarHOC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            snackbarOpen: false,
            message: ''
        }
    }

    handleClose = () => {
        this.setState({
            snackbarOpen: false
        })
    }


    handleOpnen = (message) => {
        this.setState({
            message: message,
            snackbarOpen: true
        })
    }

    render() {
        const { snackbarOpen, message } = this.state

        return (
            <div>
                <Snackbar
                    open={snackbarOpen}
                    message={message}
                    autoHideDuration={1600}
                    handleClose={this.handleClose}
                />
                <WrapComnent {...this.props} openSnackbar={this.handleOpnen}/>
            </div>
        )
    }
}

export default withSnackbar
