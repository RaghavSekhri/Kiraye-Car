import React, { Component } from 'react';
import Axios from 'axios';
let queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const TypeCar = urlParams.get('type')

export default class ShowCar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             car:[]
        }
    }



    componentDidMount(){
        Axios.get(`http://kiraye-car.herokuapp.com/cartype/?type=${queryString}`)
        .then(res=>{
        // console.log(res.data)
        this.setState({
            car: res.data
        })
        })
        .catch(err=>{
          console.log(err)
        })
}
    render() {
        if(window.location.search.type)
        {
            queryString = window.location.type;
        }
        else
        {
            queryString = this.props.location.type;
        }
        console.log(this.state.car)
        return (
            <div>
                {this.state.car.map((cars,index)=>{
                            return(
                                <div key= {index}>
                                    {cars.heading}
                                </div>
                            )
                        })}
            </div>
        )
    }
}
