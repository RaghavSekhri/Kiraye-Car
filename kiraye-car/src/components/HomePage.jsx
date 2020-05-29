import React, { Component } from 'react'
import './styles/homepage.css'
import Footer from './Footer'
import Navbar from './Navbar'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    
    render() {
        const {auth} = this.props
        //console.log(auth)
        return (
            <div>
                <Navbar value={0} auth={auth} changeAuth={this.props.changeAuth} user={this.props.user} />
                <div id="front">
                    <div>
                        <p className="main-text">Dreaming of Buying a car, Just Rent it !!</p>
                        <p className="second-text">And Let yourself Ride wherever you want to .&nbsp;.&nbsp;.</p>
                        <Link to='/cartype'>
                            <Button id="main-btn" variant="contained">
                                Select Your Car now
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* <div className="second-part">
                    <h2 style={{fontSize: '24px', marginTop: '0px', paddingTop: '40px', color: '#666', fontFamily: "Open Sans,-apple-", textTransform: 'uppercase'}}>The Kiraye-Car Advantage</h2>
                    <p style={{color: '#666'}}>We simplified car rentals, so you can focus on what's important to you.</p>
                    <img src={require("../images/Screenshot from 2020-05-13 15-55-19.png")} alt="loading img" style={{paddingTop: '40px'}}/>
                </div> */}
              <div className="row container-fluid howItWorks" style={{margin:'0px',fontFamily:'Open Sans,-apple-',scrollBehaviour:'smooth'}}>
                <div className="col-sm-12 col-md-12" style={{textAlign: 'center', maxWidth: '1170px', margin: '0px auto'}}>
                    <h4 id="howItWorksRentalHeading" style={{fontFamily: 'Open Sans,-apple-', fontSize: '28px', color:'blue', fontWeight: 'bold', textAlign: 'left'}}>How it Works</h4>
                    <br />
                    <div className="row">
                        <hr className="d-none d-sm-block htwDashedLine " />
                            <div className="col-md-3 col-xs-12 ">
                                <div className="circlePaper">
                                    <div>
                                        <span className="hvr-icon-wobble-horizontal" style={{fontSize: '43px'}}></span>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <h4 style={{fontFamily: 'Open Sans,-apple-', textAlign: 'left'}}>Book</h4>
                                <p style={{textAlign: 'left', fontSize: '14px'}}>Pick your favourite car, time and place</p>
                            </div>
                            <div className="col-md-3 col-xs-12 ">
                                <div className="circlePaper">
                                        <div className="hvr-icon-drop" style={{paddingLeft: '33px', paddingTop: '25px'}}>
                                        </div>
                                </div>
                                <br />
                                <br />
                                <h4 style={{textAlign: 'left', fontFamily: 'Open Sans,-apple-'}}>Receive  &amp; Pay</h4>
                                <p style={{textAlign: 'left', fontSize: '14px'}}>We will deliver the car to your doorstep</p>
                            </div>
                            <div className="col-md-3 col-xs-12 ">
                                <div className="circlePaper">
                                    <div className="howItworks-icons" id="driver">
                                    </div>
                                </div>
                                <br />
                                <br />
                                <h4 style={{textAlign: 'left', fontFamily: 'Open Sans,-apple-'}}>Drive </h4>
                                <p style={{textAlign: 'left', fontSize: '14px'}}>Enjoy your Kiraye-Car self drive</p>
                            </div>
                            <div className="col-md-3 col-xs-12 ">
                                    <div className="circlePaper">
                                        <div className="howItworks-icons" id="return">
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <h4 style={{textAlign: 'left', fontFamily: 'Open Sans,-apple-'}}>Return</h4>
                                    <p style={{textAlign: 'left', fontSize: '14px'}}>Get the car back to your preferred return location, and we will take it from there</p>
                            </div>
                    </div>  
                </div>     
               </div>
                <Footer />
            </div>
        )
    }
}

export default HomePage