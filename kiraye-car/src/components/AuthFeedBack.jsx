import React, { Component } from 'react'
import { Snackbar, Alert } from '@material-ui/core'

export default class AuthFeedback extends Component {
    render() {
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                This is a success message!
                </Alert>
            </Snackbar>
        )
    }
}