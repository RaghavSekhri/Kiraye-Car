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
import AuthFeedBack from './AuthFeedBack'
import Loader from './Loader'
import axios from 'axios'

export default class Support extends Component {

    state={
        name:"",
        email:"",
        message:"",
        open: false,
        open1: false,
        load: false
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open:false})
    };

    handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open1:false})
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({load:true})

        const data = {
            name:this.state.name,
            email:this.state.email,
            message:this.state.message
        }
        console.log(data)

        axios.post("https://kiraye-car.herokuapp.com/query",data).then(res=>{
            this.setState({name:"",email:"",message:"",open:true,load:false})
        }).catch(e=>{
            this.setState({name:"",email:"",message:"",open1:true,load:false})
        })
    }

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
                        <form onSubmit={this.handleSubmit} className="container" style={{float: 'left', display: 'flex', flexDirection: 'column', marginLeft: '100px'}}>
                            <TextField onChange={this.handleChange} name="name" id="standar-basic" label="Name" style={{width: '250px', marginTop: '80px'}} value={this.state.name} />
                            <TextField onChange={this.handleChange} type="email" name="email" style={{width: '250px', marginTop: '30px'}} label="Email Address" id="standard-basic" value={this.state.email} />
                            <TextField onChange={this.handleChange} name="message" style={{width: '400px', marginTop: '30px'}} multiline rowsMax={4} label="Message" id="standard-basic" value={this.state.message} />
                            <Button type="submit" variant="contained" color="primary" style={{width: '100px', marginTop: '50px'}} >
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
                        <p style={{paddingTop: '30px'}}><i className="fas fa-envelope"></i>&nbsp;&nbsp;For support or any queries:</p>
                        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email us at &nbsp;
                            <Link to='#'>KirayeCarSupport@gmail.com</Link>
                        </p>
                        <p style={{paddingTop: '30px'}}><i className="fas fa-phone"></i>&nbsp;&nbsp;Call us at :</p>
                        <p>+91 97792-66855, &nbsp;&nbsp;+91 73555-55479,<br></br>+91 91682-81898, &nbsp;&nbsp;+91 82182-98429,</p>
                        <p style={{paddingTop: '30px'}}><i className="fas fa-building"></i>&nbsp;&nbsp;Reach us at :</p>
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
                                <i className="fab fa-linkedin"></i>&nbsp;&nbsp;<a href={`https://www.linkedin.com/in/raghav-sekhri-389187172/`}>LinkedIn</a>
                                <br></br>
                                <i className="fab fa-github"></i>&nbsp;&nbsp;<a href={`https://github.com/RaghavSekhri`}>Github</a>
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
                                <i className="fab fa-linkedin"></i>&nbsp;&nbsp;<a href={`https://www.linkedin.com/in/jaspreet-singh37349/`}>LinkedIn</a>
                                <br></br>
                                <i className="fab fa-github"></i>&nbsp;&nbsp;<a href={`https://github.com/jaspreet-singh37349`}>Github</a>
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
                                <i className="fab fa-linkedin"></i>&nbsp;&nbsp;<a href={`https://www.linkedin.com/in/ujjwal-gupta-b3443818b/`}>LinkedIn</a>
                                <br></br>
                                <i className="fab fa-github"></i>&nbsp;&nbsp;<a href={`https://github.com/ujjwal897`}>Github</a>
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
                            <i className="fab fa-linkedin"></i>&nbsp;&nbsp;<a href={`https://github.com/badrisoni`}>Github</a>
                                </div>
                        </Card>
                    </div>
               </div>
               <AuthFeedBack 
                    txt="Success! Message Sent"
                    open={this.state.open} 
                    autoHideDuration={5000}
                    onClose={this.handleClose}
                    severity="success" 
                />
                <AuthFeedBack 
                    txt="Error! Something went Wrong"
                    open={this.state.open1} 
                    autoHideDuration={5000}
                    onClose={this.handleClose1}
                    severity="error" 
                />
                <Loader open={this.state.load} />
                <Footer />
            </div>
        )
    }
}

