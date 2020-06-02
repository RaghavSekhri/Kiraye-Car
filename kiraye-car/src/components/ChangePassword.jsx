import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Redirect} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AuthFeedBack from './AuthFeedBack'
import Loader from './Loader'
import axios from 'axios'


class ChangePassword extends React.Component {

    state = {
        password0:"",
        password: "",
        password1:"",
        open: false,
        open1: false,
        load: false,
        errors: {}
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

    handleChange = (e) => {

        let name = e.target.name
        let value = e.target.value
        let errors = this.state.errors

        if(value.length<6)
        {
            errors[name] = "Password must be at least 6 characters"
        }
        else
        {
            delete errors[name]
            if(name==="password1" && this.state.password!==value)
            {
                errors.password1="Password did not match"
            }
        }

        this.setState({ [e.target.name]: e.target.value, errors });
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        if(Object.keys(this.state.errors).length===0)
        {

            this.setState({load:true})

            const userData = {
                password0: this.state.password0,
                password: this.state.password
            };
            console.log(this.state)

            axios
            .patch('https://kiraye-car.herokuapp.com/user/update', userData)
            .then(res => {
                
                console.log(res)
                if(res.data.Error)
                {
                    let errors = this.state.errors
                    errors.password0 = res.data.Error
                    this.setState({errors,load:false})
                }
                else
                {
                    this.setState({errors:{},open:true,load:false})
                    setTimeout(()=>{
                        this.setState({changed:true})
                    },500)
                }
                
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else
        {
            this.setState({open1:true})
        }
    }

    render()
    {

        let changed=this.state.changed
        //console.log(changed)
        if(changed===true)
        {
            return (
                <Redirect to="/dashboard" />
            )
        }
        const {errors} = this.state
        //console.log(this.state)
        return (
            <div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div style={{marginTop: "64px",display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                        
                        <Typography component="h1" variant="h5">
                            Change Password :
                        </Typography>
                        <form style={{width: '100%', marginTop: "8px"}} noValidate onSubmit={this.onSubmit}>
                        <TextField
                            error={errors.password0?true:false}
                            helperText={errors.password0?errors.password0:null}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="password"
                            id="password0"
                            label="Enter Previous Password"
                            name="password0"
                            autoFocus
                            onChange={this.handleChange}
                        />
                        <TextField
                            error={errors.password?true:false}
                            helperText={errors.password?errors.password:null}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Enter New Password"
                            type="password"
                            id="newPassword"
                            onChange={this.handleChange}
                        />
                        <TextField
                            error={errors.password1?true:false}
                            helperText={errors.password1?errors.password1:null}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password1"
                            label="Confirm Password"
                            type="password"
                            id="password1"
                            onChange={this.handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{marginTop:"24px",marginBottom:"16px"}}
                        >
                            Change Password
                        </Button>
                        </form>
                        <AuthFeedBack 
                            txt="Password Changed Successfully"
                            open={this.state.open} 
                            autoHideDuration={1000}
                            onClose={this.handleClose}
                            severity="success" 
                        />
                        <AuthFeedBack 
                            txt="Error Occurred"
                            open={this.state.open1} 
                            autoHideDuration={3000}
                            onClose={this.handleClose1}
                            severity="error" 
                        />
                        <Loader open={this.state.load} />
                        </div>
                </Container>
            </div>
        );
    }
}


export default ChangePassword