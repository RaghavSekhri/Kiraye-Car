import React, { Component } from 'react'
import Navbar from './Navbar'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import image from '../images/profile.png'
import TextField from '@material-ui/core/TextField';
import {Link,Redirect} from 'react-router-dom'
import Loader from './Loader'
import AuthFeedBack from './AuthFeedBack'
import axios from 'axios'

export default class DashBoard extends Component {

    state = {
        Fname:"",
        Lname:"",
        email:"",
        edit:false,
        success:false,
        load:false,
        open:false,
        submitData:{}
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open:false})
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleEdit= (e) => {
        if(!this.state.edit)
        {
            if(!this.state.success)
            {
                let {Fname,Lname,email} = this.props.user
                this.setState({Fname,Lname,email,edit:true})
            }
            else
            {
                let {Fname,Lname,email} = this.state.submitData
                this.setState({edit:true,Fname,Lname,email})
            }
        }
        else
        {
            this.setState({edit:false,Fname:"",Lname:"",email:""})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({load:true})

        const userData = {
            Fname:this.state.Fname,
            Lname:this.state.Lname,
            email:this.state.email
        }

        console.log(userData)

        axios.patch("https://kiraye-car.herokuapp.com/user/update",userData).then(res=>{
            console.log(res)
            this.setState({submitData:res.data,open:true,load:false,edit:false,success:true,Fname:res.data.Fname,Lname:res.data.Lname,email:res.data.email})
        }).catch(e=>{console.log(e)})
    }

    render() {

        if(!this.props.auth)
        {
            return <Redirect to="/"/>
        }

        //console.log(this.state)

        let data

        if(this.state.success)
        {
            data = this.state.submitData
        }
        else
        {
            data = this.props.user
        }

        const {Fname,Lname,email} = data
        
        return (
            <div>
                <Navbar value={1} changeAuth={this.props.changeAuth} auth={this.props.auth} user={this.state.success?this.state.submitData:this.props.user} />
                
                <div style={{marginTop:"60px"}}>
                    <div style={{display:"flex",margin:"20px",justifyContent:"space-between"}}>
                        <h4>My Profile</h4>
                        <Button variant="contained" color="primary">
                            <Link to='/recentbookedcars' style={{color: 'white', textDecoration: 'none'}}>
                                Show My Recently Booked Cars
                            </Link>
                        </Button>
                    </div>
                    <Divider variant="middle" />
                    <div style={{display:"flex",justifyContent:"space-between",width:"70%"}}>
                        <div style={{display:"flex"}}>
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <img src={image} alt="profile.pic" style={{borderRadius:"50%",width:"150px",height:"150px"}} />
                                <h5>{Fname} {Lname}</h5>
                            </div>
                            <form style={{margin:"30px"}} onSubmit={this.handleSubmit}>
                                <div style={{display:"flex"}}>
                                    <h5 style={{marginTop:"30px"}}>FirstName</h5>
                                    <TextField
                                        style={{marginLeft:"20px",backgroundColor:"#bbdefb"}}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        name="Fname"
                                        label="First-Name"
                                        type="text"
                                        id="Fname"
                                        value={this.state.edit?this.state.Fname:Fname}
                                        onChange={this.handleChange}
                                        disabled={!this.state.edit}
                                    />
                                </div>
                                <div style={{display:"flex"}}>
                                    <h5 style={{marginTop:"30px"}}>LastName</h5>
                                    <TextField
                                        style={{marginLeft:"20px",backgroundColor:"#bbdefb"}}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        name="Lname"
                                        label="Last-Name"
                                        type="text"
                                        id="Lname"
                                        value={this.state.edit?this.state.Lname:Lname}
                                        onChange={this.handleChange}
                                        disabled={!this.state.edit}
                                    />
                                </div>
                                <div style={{display:"flex"}}>
                                    <h5 style={{marginTop:"30px"}}>email</h5>
                                    <TextField
                                        style={{marginLeft:"20px",backgroundColor:"#bbdefb"}}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        name="email"
                                        label="email"
                                        type="email"
                                        id="email"
                                        value={this.state.edit?this.state.email:email}
                                        onChange={this.handleChange}
                                        disabled={!this.state.edit}
                                    />
                                </div>
                                <div style={{marginTop:"30px"}}>
                                    <Link to="/changepassword" style={{color:"inherit"}}>
                                        <Button disabled={!this.state.edit} variant="contained" color="primary">
                                            Change Password
                                        </Button>
                                    </Link>
                                </div>
                                <button type="submit" style={{display:"none"}}></button>
                            </form>
                        </div>
    
                        <div>
                            {this.state.edit && 
                            <Button onClick={this.handleSubmit} variant="contained" color="primary">
                                Save Changes
                            </Button>}
                            <Button onClick={this.handleEdit} style={{margin:"20px"}} variant="contained" color="primary">
                                {this.state.edit?"Cancel":"Edit"}
                            </Button>
                        </div>
                       
                    </div>
                </div>
                <AuthFeedBack 
                    txt="Profile Updated"
                    open={this.state.open} 
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    severity="success" 
                />
                <Loader open={this.state.load} />
            </div>
        )
    }
}