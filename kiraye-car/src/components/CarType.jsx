import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CarType extends Component {
    render() {
        return (
            <div>
                <Link to = {{pathname: '/showcar', search: '?type=SUV' , type: 'SUV'}}>SUV</Link>
                <Link to = {{pathname: '/showcar', search: '?type=Sedan', type: 'Sedan'}}>Sedan</Link>
                <Link to = {{pathname: '/showcar', search: '?type=Coupe', type: 'Coupe'}}>Coupe</Link>
                <Link to = {{pathname: '/showcar', search: '?type=Hatchback', type: 'Hatchback'}}>Hatchback</Link>
                <Link to = {{pathname: '/showcar', search: '?type=Pickup', type: 'Pickup'}}>Pickup</Link>
                <Link to = {{pathname: '/showcar', search: '?type=Wagon', type: 'Wagon'}}>Wagon</Link>
            </div>
        )
    }
}
