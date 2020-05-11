
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import {HomeOutlined, AccountCircle,PersonAdd} from '@material-ui/icons'
import HomePage from './HomePage'


export default class SimpleTabs extends React.Component{

  state={
    value:null
  }

  handleChange = (event, newValue) => {
    this.setState({value:newValue})
  };
  render()
  {
    let val = this.state.value!==null?this.state.value:this.props.value
    
    return (
      <div>
        <AppBar position="static">
          <Tabs value={val} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab icon={<HomeOutlined />} label="Home" component={Link} to="/" />
            <Tab label="Item Two" component={Link} to={"/signup"} />
            <Tab icon={<AccountCircle/>} style={{marginLeft:"45%"}} label="Login" component={Link} to="/login"  />
            <Tab icon={<PersonAdd/>} label="SignUp" component={Link} to={"/signup"} />
          </Tabs>
        </AppBar>
        
      </div>
    );
  }
}

