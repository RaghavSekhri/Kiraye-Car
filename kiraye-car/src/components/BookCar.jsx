import React, {Component} from 'react'
import MaterialUIPickers from '../components/Calender.jsx'
import './styles/BookCar.css'
import Button from '@material-ui/core/Button';
import SimpleTabs from '../components/Navbar';
import Footer from '../components/Footer';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

export default class BookCar extends Component{

    state={
        carId:""
    }

    booking = () => {
        axios
          .post('https://kiraye-car.herokuapp.com/bookcar', this.state)
          .then(res => {
            console.log(res)
        })
    }

    componentDidMount()
    {
        this.setState({carId:window.location.pathname.substring(9)})
    }

    render() {
        
        console.log(this.state)

        if(!this.props.auth)
        {
            return <Redirect to="/"/>
        }

        return (
            <div>
                <SimpleTabs auth={this.props.auth} changeAuth={this.props.changeAuth} user={this.props.user} /><b><div className="bg">
            <form className="frm" style={{width:'40%',display:'flex',flexWrap:'wrap'}}>
               <br></br> PICK UP<br></br> LOCATION<br></br><input type="text" className="pickup"></input>
                CITY<input type="text" className ="city"></input>  
                STATE <select className="state form-control" id="state">
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    </select>
                    PICKUP   DATE & TIME<MaterialUIPickers />
                    RETURN   DATE & TIME
                    <MaterialUIPickers /><br></br>
                    DRIVING LICENSE ID<input type="text" className="dlid"></input>
                    <div style={{marginLeft:'180px'}}>
                    <Button onClick={this.booking} variant="contained" color="secondary">Confirm Booking</Button>
                    </div>
            </form>
                <div className="detailss"><i><p className="jst">JUST A STEP AWAY NOW!!!!</p></i>
                   <p className="fill"> FILL IN THE DETAILS  </p>      
                </div>
            </div></b>
            <Footer />
            </div>
        )
    }
}
