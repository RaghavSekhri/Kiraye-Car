import React, { Component } from 'react'
import Axios from 'axios';

export default class sample extends Component {
      componentDidMount(){
              Axios.get('http://kiraye-car.herokuapp.com/cars')
              .then(res=>{
                let success = res.data;
                console.log(success);
              })
              .catch(err=>{
                console.log(err)
              })
      }
    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}
