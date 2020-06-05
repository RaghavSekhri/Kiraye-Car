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

        let pastCars = this.state.car.filter(carr=>carr.bookData.returned===true)
        let activeCars = this.state.car.filter(carr=>carr.bookData.returned===false)

        return (
            <div className="backy-img"> 
                <Navbar auth={this.props.auth} changeAuth={this.props.changeAuth} user={this.props.user} />

                {pastCars.length?<h1 style={{color:"white"}}>Past Booked Cars</h1>:null}
                {pastCars.map((Eachcar, index) => {
                    return(
                        <div key= {index}>
                            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <CarCard car={Eachcar.car} bookData={Eachcar.bookData} returned={true} />
                            </div>
                        </div>
                    )
                })}
                {activeCars.length?<h1 style={{color:"white",marginTop:"150px"}}>Active Booked Cars</h1>:null}
                {activeCars.map((Eachcar, index) => {
                    return(
                        <div key= {index}>
                            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <CarCard car={Eachcar.car} bookData={Eachcar.bookData} returned={false} />
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
