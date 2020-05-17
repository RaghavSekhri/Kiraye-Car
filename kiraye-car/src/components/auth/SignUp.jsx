import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link,Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AuthFeedBack from '../AuthFeedBack'
import Navbar from '../Navbar'
import Loader from '../Loader'
import axios from 'axios'


class SignUp extends React.Component {

    state = {
        auth:false,
        load:false,
        Fname: '',
        Lname: '',
        email: '',
        password: '',
        password2: '',
        open: false,
        errors: {}
      };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open:false})
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({load:true})
    
        const newUser = {
          Fname: this.state.Fname,
          Lname: this.state.Lname,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };
    
        //this.props.registerUser(newUser, this.props.history);
        //console.log(newUser)

        axios
          .post('https://kiraye-car.herokuapp.com/user/signup', newUser)
          .then(res => {
              if(res.data.Error)
              {
                console.log(res.data)
                this.setState({errors:res.data.Error,load:false})
              }
              else
              {
                console.log(res)
                localStorage.setItem('jwtToken',"Bearer "+res.data.token)
                axios.defaults.headers.common['Authorization'] = res.data.token;
                this.setState({errors:{},open:true,load:false,auth:true})
              }
          })
          .catch(err=>{
              console.log(err)
          })
    }

    render()
    {
        let auth=this.state.auth||this.props.auth
        
        if(auth===true)
        {
            return (
                <Redirect to={{pathname:"/", auth:true}} />
            )
        }

        const theme = createMuiTheme();
        //console.log(this.state)
        const {errors} = this.state
        return (
            <div>
                <Navbar value={2} auth={this.props.auth} />
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                    <div style={{marginTop: theme.spacing(8),display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                        <Avatar style={{margin: theme.spacing(1),backgroundColor: theme.palette.secondary.main}}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        Sign up
                        </Typography>
                        <form style={{ width: '100%', marginTop: theme.spacing(3)}} noValidate onSubmit={this.onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                error={errors.Fname!==undefined}
                                helperText={errors.Fname?errors.Fname:null}
                                autoComplete="fname"
                                name="Fname"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={this.handleChange}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                error={errors.Lname!==undefined}
                                helperText={errors.Lname?errors.Lname:null}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="Lname"
                                autoComplete="lname"
                                onChange={this.handleChange}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                error={errors.email!==undefined}
                                helperText={errors.email?errors.email:null}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={this.handleChange}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                error={errors.password!==undefined}
                                helperText={errors.password?errors.password:null}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                error={errors.password2!==undefined}
                                helperText={errors.password2?errors.password2:null}
                                variant="outlined"
                                required
                                fullWidth
                                name="password2"
                                label="Confirm Password"
                                type="password"
                                id="password2"
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{margin: theme.spacing(3, 0, 2)}}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                            <Link to="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                            </Grid>
                        </Grid>
                        </form>
                        <AuthFeedBack 
                            txt="Successfully Logged In"
                            open={this.state.open} 
                            autoHideDuration={6000}
                            onClose={this.handleClose}
                            severity="success" 
                        />
                        <Loader open={this.state.load} />
                    </div>
                </Container>
            </div>
        );
    }
}


export default SignUp
