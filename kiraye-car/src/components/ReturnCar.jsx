import React, {Component} from 'react';
import Navbar from './Navbar'
import axios from 'axios'
import ReturnCarCard from './ReturnCarCard'
import Loader1 from './Loader1'
import './styles/returncar.css'

export default class ReturnCar extends Component{

    state={
        cars:[],
        load:false
    }

    componentDidMount()
    {
        if(this.props.auth)
        {
            axios.get("https://kiraye-car.herokuapp.com/allbookedcars")
            .then(res=>{
                this.setState({cars:res.data,load:true})
            })
        }
    }

    render()
    {
        console.log(this.state)

        if(!this.props.auth||this.state.cars.Error)
        {
            return(
                <h1>You Are Not Authorized To Visit this Page.</h1>
            )
        }

        if(!this.state.load)
        {
            return <Loader1/>
        }

        return (
            <div className="backy-img">
                <Navbar auth={this.props.auth} changeAuth={this.props.changeAuth} user={this.props.user} />
                {this.state.cars.suv.length?
                    <ReturnCarCard cars={this.state.cars.suv} type="Suv" />:null
                }
                {this.state.cars.sedan.length?
                    <ReturnCarCard cars={this.state.cars.sedan} type="Sedan" />:null
                }
                {this.state.cars.coupe.length?
                    <ReturnCarCard cars={this.state.cars.coupe} type="Coupe" />:null
                }
                {this.state.cars.hatchback.length?
                    <ReturnCarCard cars={this.state.cars.hatchback} type="Hatchback" />:null
                }
                {this.state.cars.pickup.length?
                    <ReturnCarCard cars={this.state.cars.pickup} type="Pickup" />:null
                }
                {this.state.cars.wagon.length?
                    <ReturnCarCard cars={this.state.cars.wagon} type="Wagon" />:null
                }
                <div style={{height: '10vh'}}></div>
            </div>
        );
    }
}