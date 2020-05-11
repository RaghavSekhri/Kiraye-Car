import React, { Component } from 'react'
import Navbar from './Navbar'
import Button from '@material-ui/core/Button';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="primary">
                    Button
                </Button>
                Welcome to HomePage
            </div>
        )
    }
}
