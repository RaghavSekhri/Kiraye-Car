import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom'
import {HomeOutlined, AccountCircle,PersonAdd, ExitToApp} from '@material-ui/icons'
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import '@material/react-tab-indicator/dist/tab-indicator.css';

class SimpleTabs extends React.Component{

  state={
    value: null,
    auth: false
  }

  handleChange = (event, newValue) => {
    this.setState({value:newValue})
  };
  render()
  {
    const {classes} = this.props
    console.log(classes)
    let val = this.state.value!==null?this.state.value:this.props.value

    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#000'
        }
      },
      overrides: {
        MuiTab: {
          root: {
            textTransform: 'none',
            '&:hover': {
              color: '#fff176',
              opacity: 1,
            },
            '&:focus': {
              color: 'yellow',
            },
            '&$selected': {
              color: 'yellow',
            }
          },
        },
        MuiTabs: {
          indicator: {
            backgroundColor: 'yellow',
          },
        }
      },
    });
    
    return (
      <div>
        <ThemeProvider theme={theme}>
          <AppBar position="static" >
            <Tabs value={val} onChange={this.handleChange} aria-label="simple tabs example">
              <Tab classes={{ root: classes.tab }} wrapped icon={<HomeOutlined />} label="Home" component={Link} to="/" />
              {!this.state.auth && <Tab classes={{ root: classes.tab }} wrapped icon={<AccountCircle/>} style={{marginLeft:"78%"}} label="Login" component={Link} to="/login"  />}
              {!this.state.auth && <Tab classes={{ root: classes.tab }} wrapped icon={<PersonAdd/>} label="SignUp" component={Link} to={"/signup"} />}
              {this.state.auth && <Tab classes={{ root: classes.tab }} wrapped icon={<ExitToApp/>} style={{marginLeft:"85%"}} label="LogOut" component={Link} to={"/logout"} />}
            </Tabs>
          </AppBar>
        </ThemeProvider>
      </div>
    );
  }
}

const styles = {
  tab: {
      minWidth: 90
  }
};
export default withStyles(styles)(SimpleTabs);