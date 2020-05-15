import React, { Component } from 'react'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';

export default class AuthFeedback extends Component {
    render() {
        const {open, autoHideDuration, onClose, severity, txt} = this.props
        return (
            <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
                <Alert elevation={6} variant="filled" onClose={onClose} severity={severity}>
                    {txt}
                </Alert>
            </Snackbar>
        )
    }
}