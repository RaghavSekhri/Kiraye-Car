import React, { Component } from 'react'
import './styles/homepage.css'
import Footer from './Footer'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div id="front">
                    <div>
                        <p className="main-text">Dreaming of Buying a car, Just Rent it !!</p>
                        <p className="second-text">And Let yourself Ride wherever you want to .&nbsp;.&nbsp;.</p>
                    </div>
                </div>
                <div className="second-part">
                    <h2 style={{fontSize: '24px', marginTop: '0px', paddingTop: '40px', color: '#666', fontFamily: "Open Sans,-apple-", textTransform: 'uppercase'}}>The Kiraye-Car Advantage</h2>
                    <p style={{color: '#666'}}>We simplified Car Rentals, so you can focus on what's important to you.</p>
                    <div className="services-images"></div>
                </div>
                <Footer />
            </div>
        )
    }
}