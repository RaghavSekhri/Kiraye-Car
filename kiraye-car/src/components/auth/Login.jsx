import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios'


class Login extends React.Component {

    state = {
        email: '',
        password: '',
        errors: {}
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
    
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
        //console.log(newUser)
    
        //this.props.registerUser(newUser, this.props.history);
        axios
          .post('/user/login', userData)
          .then(res => {
            if(res.data.Error)
            {
              this.setState({errors:res.data})
            }
            else
            {
              this.setState({errors:{}})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render()
    {
        const theme = createMuiTheme();
        const {errors} = this.state
        //console.log(this.state)
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div style={{marginTop: theme.spacing(8),display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                <Avatar style={{margin: theme.spacing(1),backgroundColor: theme.palette.secondary.main}}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form style={{width: '100%', marginTop: theme.spacing(1)}} noValidate onSubmit={this.onSubmit}>
                <TextField
                    error={errors.Error!==undefined}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={this.handleChange}
                />
                <TextField
                    error={errors.Error!==undefined}
                    helperText={errors.Error?errors.Error:null}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handleChange}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{margin: theme.spacing(3, 0, 2)}}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link to="/">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link to="/signup">
                        Don't have an account? Sign Up
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            </Container>
        );
    }
}


export default Login
