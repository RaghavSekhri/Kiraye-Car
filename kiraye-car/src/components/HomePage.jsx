import React, { Component } from 'react'
import Navbar from './Navbar'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="primary">
                    Button
                </Button>
                <Navbar/>
                Welcome to HomePage
            </div>
        )
    }
}
