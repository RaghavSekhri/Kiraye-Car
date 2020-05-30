import React, { Component } from 'react'
import Navbar from './Navbar'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import image from '../images/profile.png'
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'

export default class DashBoard extends Component {

    state = {
        Fname:null,
        Lname:null,
        email:null,
        edit:false
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleEdit= (e) => {
        this.setState({edit:!this.state.edit});
    }

    render() {

        let {Fname,Lname,email} = this.props.user

        if(this.state.Fname!=null)
            Fname=this.state.Fname
        if(this.state.Lname!=null)
            Lname=this.state.Lname
        if(this.state.Fname!=null)
            email=this.state.email
        
        return (
            <div>
                <Navbar value={1} changeAuth={this.props.changeAuth} auth={this.props.auth} user={this.props.user} />
                
                <div style={{marginTop:"60px"}}>
                    <div style={{display:"flex",margin:"20px",justifyContent:"space-between"}}>
                        <h4>My Profile</h4>
                        <Button variant="contained" color="primary">
                            Show My Recently Booked Cars
                        </Button>
                    </div>
                    <Divider variant="middle" />
                    <div style={{display:"flex",justifyContent:"space-between",width:"70%"}}>
                        <div style={{display:"flex"}}>
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <img src={image} alt="profile.pic" style={{borderRadius:"50%",width:"150px",height:"150px"}} />
                                <h5>{Fname} {Lname}</h5>
                            </div>
                            <form style={{margin:"30px"}}>
                                <div style={{display:"flex"}}>
                                    <h5 style={{marginTop:"30px"}}>FirstName</h5>
                                    <TextField
                                        style={{marginLeft:"20px",backgroundColor:"#90a4ae"}}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        name="Fname"
                                        label="First-Name"
                                        type="text"
                                        id="Fname"
                                        value={Fname}
                                        onChange={this.handleChange}
                                        disabled={!this.state.edit}
                                    />
                                </div>
                                <div style={{display:"flex"}}>
                                    <h5 style={{marginTop:"30px"}}>LastName</h5>
                                    <TextField
                                        style={{marginLeft:"20px",backgroundColor:"#90a4ae"}}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        name="Lname"
                                        label="Last-Name"
                                        type="text"
                                        id="Lname"
                                        value={Lname}
                                        onChange={this.handleChange}
                                        disabled={!this.state.edit}
                                    />
                                </div>
                                <div style={{display:"flex"}}>
                                    <h5 style={{marginTop:"30px"}}>email</h5>
                                    <TextField
                                        style={{marginLeft:"20px",backgroundColor:"#90a4ae"}}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        name="email"
                                        label="email"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        disabled={!this.state.edit}
                                    />
                                </div>
                                <div style={{marginTop:"30px"}}>
                                    <Link to="/" style={{color:"inherit"}}>
                                        <Button disabled={!this.state.edit} variant="contained" color="primary">
                                            Change Password
                                        </Button>
                                    </Link>
                                </div>
                            </form>
                        </div>
    
                        <div>
                            {this.state.edit && 
                            <Button variant="contained" color="primary">
                                Save Changes
                            </Button>}
                            <Button onClick={this.handleEdit} style={{margin:"20px"}} variant="contained" color="primary">
                                {this.state.edit?"Cancel":"Edit"}
                            </Button>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}