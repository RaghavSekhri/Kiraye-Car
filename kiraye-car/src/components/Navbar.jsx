import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom'
import {HomeOutlined, AccountCircle,PersonAdd} from '@material-ui/icons'
import { createMuiTheme } from '@material-ui/core/styles';
import '@material/react-tab-indicator/dist/tab-indicator.css';

export default class SimpleTabs extends React.Component{

  state={
    value:null
  }

  handleChange = (event, newValue) => {
    this.setState({value:newValue})
  };
  render()
  {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#000'
        }
      },
    });

    let val = this.state.value!==null?this.state.value:this.props.value
    
    return (
      <div>
        <AppBar position="static" style={{backgroundColor:theme.palette.primary.main}}>
          <Tabs value={val} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab icon={<HomeOutlined />} label="Home" component={Link} to="/" />
            <Tab icon={<AccountCircle/>} style={{position: 'absolute', left: '82%'}} label="Login" component={Link} to="/login"  />
            <Tab icon={<PersonAdd/>} style={{position: 'absolute', left: '89%'}} label="SignUp" component={Link} to={"/signup"} />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}