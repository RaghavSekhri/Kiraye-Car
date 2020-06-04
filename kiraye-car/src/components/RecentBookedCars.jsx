import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CarCard from './CarCard'
import './styles/recentbookedcars.css'

export default class RecentBookedCars extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             car:[]
        }
    }

    componentDidMount()
    {
        axios
        .get('https://kiraye-car.herokuapp.com/mycars')
        .then(res => {
            console.log(res)
            this.setState({
                car: res.data
            })
        })
    }

    render() {
        // console.log(this.props.user)
        return (
            <div className="backy-img"> 
                <Navbar auth={this.props.auth} changeAuth={this.props.changeAuth} user={this.props.user} />
                {this.state.car.map((Eachcar, index) => {
                    return(
                        <div key= {index}>
                            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <CarCard car={Eachcar.car} bookData={Eachcar.bookData} />
                            </div>
                        </div>
                    )
                })}
                <div style={{marginTop: '50px'}}>
                    <Footer />
                </div>
            </div>
        )
    }
}
