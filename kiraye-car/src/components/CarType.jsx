import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CarType extends Component {
    render() {
        return (
            <div>
                <Link to = {{pathname: '/showcar', search: '?type=SUV' , type: 'SUV'}}>SUV</Link>
                <Link to = {{pathname: '/showcar', search: '?type=Sedan', type: 'Sedan'}}>Sedan</Link>
            </div>
        )
    }
}
