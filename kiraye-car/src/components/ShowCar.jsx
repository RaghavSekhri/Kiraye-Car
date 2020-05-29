import React, { Component } from 'react';
import Axios from 'axios';
import queryString from 'query-string';
import Loader1 from './Loader1'
import AppBar from '@material-ui/core/AppBar';
import TabData from './TabData'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default class ShowCar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             car:[],
             activeCars:[],
             bookedCars:[],
             load:false,
             value:0
        }
    }
    componentDidMount(){
        let query;
        let obj = queryString.parse(this.props.location.search)
        if(obj.type)
        {
            query = obj.type
        }
        else
        {
            query = this.props.location.type;
        }

        Axios.get(`https://kiraye-car.herokuapp.com/cartype/?type=${query}`)
        .then(res=>{
        // console.log(res.data)
        this.setState({
            car: [...res.data.activeCars,...res.data.bookedCars],
            activeCars: res.data.activeCars,
            bookedCars: res.data.bookedCars,
            load:true
        })
        })
        .catch(err=>{
          console.log(err)
        })
    }

    handleChange = (event, newValue) => {
        this.setState({value:newValue})
    };

    render() {

        console.log(this.state.car)

        if(!this.state.load)
            return <Loader1 />

        return (
            <div style={{display:"flex",justifyItems:"center",justifyContent:"center"}}>
            <div style={{width:"35%",marginTop:"100px"}}>
                <AppBar position="static">
                    <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    >
                    <Tab label="Available Cars"  />
                    <Tab label="All Cars"  />
                    </Tabs>
                </AppBar>
                <TabData value={this.state.value} index={0} carData={this.state.activeCars}/>
                <TabData value={this.state.value} index={1} carData={this.state.car} />
            </div>
            </div>
        )
    }
}
