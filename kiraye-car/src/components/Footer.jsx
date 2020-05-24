import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div style={{color: 'white', backgroundColor: '#1c2331', bottom: '0'}}>         
                <footer className="page-footer font-small unique-color-dark" >
                    <div className="container text-center text-md-left">
                        <div className="row pt-5">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold" style={{color: '#aaa69d'}}>Kiraye-Car</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{backgroundColor: 'tomato', width: '60px'}} />
                                <p>Dreaming of buying a car, just rent it and fulfill your dreams. We simplified car rentals, so you can focus on what's important to you.</p>
                                <p>Happy Riding...</p>
                            </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold" style={{color: '#aaa69d'}}>Jump to</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{backgroundColor: 'tomato', width: '60px'}} />
                            <p>
                                <Link to="/cartype" style={{color: 'white'}}>Book a Car</Link>
                            </p>
                            <p>
                                <Link to="/signup"  style={{color: 'white'}}>Register Yourself</Link>
                            </p>
                            <p>
                                <Link to="/support" style={{color: 'white'}}>Support</Link>
                            </p>
                            <p>
                                <Link to="/faq" style={{color: 'white'}}>FAQ</Link>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold" style={{color: '#aaa69d'}}>Contact</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{backgroundColor: 'tomato', width: '60px'}} />
                            <p>
                                <i className="fas fa-home mr-3"></i> 7th Floor, MarcoPolo Hostel, Chitkara University, Rajpura, Punjab, India</p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i> KirayeCarSupport@gmail.com</p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> +91 97792-66855</p>
                            <p>
                                <i className="fas fa-print mr-3"></i> +91 73555-55479</p>
                        </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3" style={{backgroundColor: '#212529'}}>© 2020 Copyright:
                        <Link to='/'  style={{color: 'white'}}> KirayeCar.com</Link>
                    </div>
                </footer>
            </div>
        )
    }
}
