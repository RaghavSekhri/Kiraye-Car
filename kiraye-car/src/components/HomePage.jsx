import React, { Component } from 'react'
import Navbar from './Navbar'
import Button from '@material-ui/core/Button';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Button variant="contained" color="primary">
                    hello world
                </Button>
            </div>
        )
    }
}
