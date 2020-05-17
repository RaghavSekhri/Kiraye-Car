import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import './styles/support.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Wobble from 'react-reveal/Wobble';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Support extends Component {
    render() {
        return (
            <div>
                <div className="img">
                    <div>
                        <h1 style={{color: 'white', fontFamily: 'inherit', fontWeight: 'bolder', paddingTop: '150px', fontSize: '55px'}}>Get In Touch</h1>
                        <p style={{color: 'white', fontSize: '24px', paddingTop: '35px'}}>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
                    </div>
                </div>
                <div style={{height: '70vh'}}>
                    <div style={{backgroundColor: '#F5F5F5', height: '70vh', width: '40%', float: 'left'}}>
                        <h2 style={{float: 'left', paddingTop: '50px', marginLeft: '20px', fontSize: '20px'}}>Please Fill out the quick form and we will be in touch with lightening speed.</h2>
                    <div style={{backgroundColor: '#F5F5F5', height: '50vh', float: 'left', width: '70%'}}>
                        <form className="container" style={{float: 'left', display: 'flex', flexDirection: 'column', marginLeft: '100px'}}>
                            <TextField id="standar-basic" label="Name" style={{width: '250px', marginTop: '80px'}} />
                            <TextField style={{width: '250px', marginTop: '30px'}} label="Email Address" id="standard-basic" />
                            <TextField style={{width: '400px', marginTop: '30px'}} multiline rowsMax={4} label="Message" id="standard-basic" />
                            <Button variant="contained" color="primary" style={{width: '100px', marginTop: '50px'}} >
                                Send
                            </Button>
                        </form>
                    </div>
                    </div>
                    <div style={{backgroundColor: '#F5F5F5', float: 'left', width: '30%', height: '70vh'}}>
                    <Wobble left>
                        <div className="support-img" style={{}}></div>
                    </Wobble>
                    </div>
                    <div style={{backgroundColor: '#F5F5F5', height: '70vh', float: 'right', width: '30%'}}>
                        <h2 style={{paddingTop: '70px'}}>Connect With Us:</h2>
                        <p style={{paddingTop: '30px'}}><i class="fas fa-envelope"></i>&nbsp;&nbsp;For support or any queries:</p>
                        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email us at &nbsp;
                            <Link to='#'>KirayeCarSupport@gmail.com</Link>
                        </p>
                        <p style={{paddingTop: '30px'}}><i class="fas fa-phone"></i>&nbsp;&nbsp;Call us at :</p>
                        <p>+91 97792-66855, &nbsp;&nbsp;+91 73555-55479,<br></br>+91 91682-81898, &nbsp;&nbsp;+91 82182-98429,</p>
                        <p style={{paddingTop: '30px'}}><i class="fas fa-building"></i>&nbsp;&nbsp;Reach us at :</p>
                        <p>7th Floor, Marcopolo Hostel,</p>
                        <p>Chitkara University,</p>
                        <p>Punjab, India.</p>
                    </div>
                </div>
                <div style={{backgroundColor: '#F5F5F5', height: '70vh'}}>
                    <div style={{height: '10vh'}}>
                        <span className="the" style={{float: 'left', marginLeft: '80px'}}>The</span>
                        <span className="team" style={{float: 'left'}}>&nbsp;TEAM</span>
                    </div>
                    <div className="card-column" style={{height: '60vh', float: 'left', width: '25%'}}>
                    <Card id="card-1" style={{height: '50vh', width: '90%', marginLeft: '23px', marginTop: '50px'}}>
                            <CardActionArea>
                            <div className="profile-pic-1"></div>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Raghav Sekhri
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    CEO, Founder
                                </Typography>
                                </CardContent>    
                            </CardActionArea>
                            <div style={{marginTop:'40px', fontSize: '20px'}}>
                                <i class="fab fa-linkedin"></i>&nbsp;&nbsp;<a href={`https://www.linkedin.com/in/raghav-sekhri-389187172/`}>LinkedIn</a>
                                <br></br>
                                <i class="fab fa-github"></i>&nbsp;&nbsp;<a href={`https://github.com/RaghavSekhri`}>Github</a>
                            </div>
                        </Card>
                    </div>
                    <div className="card-column" style={{height: '60vh', float: 'left', width: '25%'}}>
                    <Card id="card-1" style={{height: '50vh', width: '90%', marginLeft: '23px', marginTop: '50px'}}>
                            <CardActionArea>
                            <div className="profile-pic-2"></div>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Jaspreet Singh
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    CEO, Founder
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <div style={{marginTop:'40px', fontSize: '20px'}}>
                                <i class="fab fa-linkedin"></i>&nbsp;&nbsp;<a href={`https://www.linkedin.com/in/jaspreet-singh37349/`}>LinkedIn</a>
                                <br></br>
                                <i class="fab fa-github"></i>&nbsp;&nbsp;<a href={`https://github.com/jaspreet-singh37349`}>Github</a>
                                </div>
                        </Card>
                    </div>
                    <div className="card-column" style={{height: '60vh', float: 'left', width: '25%'}}>
                    <Card id="card-1" style={{height: '50vh', width: '90%', marginLeft: '23px', marginTop: '50px'}}>
                            <CardActionArea>
                            <div className="profile-pic-3"></div>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Ujjwal Gupta
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    CEO, Founder
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <div style={{marginTop:'40px', fontSize: '20px'}}>
                                <i class="fab fa-linkedin"></i>&nbsp;&nbsp;<a href={`https://www.linkedin.com/in/ujjwal-gupta-b3443818b/`}>LinkedIn</a>
                                <br></br>
                                <i class="fab fa-github"></i>&nbsp;&nbsp;<a href={`https://github.com/ujjwal897`}>Github</a>
                            </div>
                        </Card>
                    </div>
                    <div className="card-column" style={{height: '60vh', float: 'right', width: '25%'}}>
                    <Card id="card-1" style={{height: '50vh', width: '90%', marginLeft: '23px', marginTop: '50px'}}>
                            <CardActionArea>
                            <div className="profile-pic-4"></div>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Badri Vishal Soni
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    CEO, Founder
                                </Typography>
                                </CardContent>  
                            </CardActionArea>
                            <div style={{marginTop:'40px', fontSize: '20px'}}>
                            <i class="fab fa-linkedin"></i>&nbsp;&nbsp;<a href={`https://github.com/badrisoni`}>Github</a>
                                </div>
                        </Card>
                    </div>
               </div>
                <Footer />
            </div>
        )
    }
}

