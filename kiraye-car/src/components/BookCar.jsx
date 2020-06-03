import React, {Component} from 'react'
import MaterialUIPickers from '../components/Calendar.jsx'
import './styles/BookCar.css'
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Footer from '../components/Footer';
import AuthFeedBack from './AuthFeedBack'
import {Redirect} from 'react-router-dom'
import Loader from './Loader'
import axios from 'axios'

export default class BookCar extends Component{

    state={
        carId:"",
        pickupDate: new Date(),
        returnDate: new Date(),
        location:"",
        city:"",
        state:"Andhra Pradesh",
        LicenseId:"",
        load: false,
        redirect: false,
        errors:{}
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open:false})
    };

    handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open1:false})
    };

    handleChange = (e) => {
        let {errors} = this.state
        if(e.target.name==="city")
        {
            if(e.target.value.length<3)
            {
                errors.city="It should be atleast of 3 characters long"
            }
            else
            {
                if(errors.city)
                {
                    delete errors.city
                }
            }
        }
        if(e.target.name==="location")
        {
            if(e.target.value.length<6)
            {
                errors.location="It should be atleast of 6 characters long"
            }
            else
            {
                if(errors.location)
                {
                    delete errors.location
                }
            }
        }
        if(e.target.name==="LicenseId")
        {
            if(e.target.value.length!==13)
            {
                errors.LicenseId="Invalid License ID"
            }
            else
            {
                if(errors.LicenseId)
                {
                    delete errors.LicenseId
                }
            }
        }

        this.setState({ [e.target.name]: e.target.value, errors });
    }

    handlePickupDate = (date) => {
        this.setState({pickupDate:date})
    };

    handleReturnDate = (date) => {
        this.setState({returnDate:date})
    };

    booking = (e) => {

        e.preventDefault()
        let {errors} = this.state

        if(!this.state.city)
            errors.city="It should be atleast of 3 characters long"
        if(!this.state.location)
            errors.location="It should be atleast of 6 characters long"
        if(!this.state.LicenseId)
            errors.LicenseId="Invalid License ID"

        if(Object.keys(errors).length!==0)
        {
            this.setState({errors})
            return alert("Fill the details properly")
        }

        this.setState({load:true})

        let obj={
            carId:this.state.carId
        }

        axios
          .post('https://kiraye-car.herokuapp.com/bookcar', obj)
          .then(res => {
            console.log(res)
            if(res.data.Error)
            {
                this.setState({load:false,open1:true})
            }
            else
            {
                this.setState({load:false,open:true})
                setTimeout(()=>{
                    this.setState({redirect:true})
                },500)
            }
        })
    }

    componentDidMount()
    {
        this.setState({carId:window.location.pathname.substring(9)})
    }

    render() {
        
        console.log(this.state)

        if(!this.props.auth||this.state.redirect)
        {
            return <Redirect to="/"/>
        }

        return (
            <div>
                <Navbar auth={this.props.auth} changeAuth={this.props.changeAuth} user={this.props.user} /><b><div className="bg">
            <form onSubmit={this.booking} className="frm" style={{width:'40%',display:'flex',flexWrap:'wrap'}}>
               <br></br> PICK UP<br></br> LOCATION<br></br>
               <div style={{display:"flex",flexDirection:"column"}}>
               <input name="location" onChange={this.handleChange} type="text" className="pickup"></input>
               {this.state.errors.location?<p style={{fontSize:"10px",color:"red"}}>{this.state.errors.location}</p>:null}
               </div>
                CITY<div style={{display:"flex",flexDirection:"column"}}>
                <input name="city" onChange={this.handleChange} type="text" className ="city"></input> 
                {this.state.errors.city?<p style={{fontSize:"10px",color:"red",marginLeft:"-30px"}}>{this.state.errors.city}</p>:null}
                </div> 
                STATE <select name="state" onChange={this.handleChange} className="state form-control" id="state">
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
                    PICKUP   DATE & TIME<MaterialUIPickers date={this.state.pickupDate} handleDateChange={this.handlePickupDate} />
                    RETURN   DATE & TIME
                    <MaterialUIPickers date={this.state.returnDate} handleDateChange={this.handleReturnDate} /><br></br>
                    DRIVING LICENSE ID <div style={{display:"flex",flexDirection:"column"}}>
                    <input name="LicenseId" onChange={this.handleChange} type="text" className="dlid"></input><br></br>
                    {this.state.errors.LicenseId?<p style={{fontSize:"10px",color:"red"}}>{this.state.errors.LicenseId}</p>:null}
                    </div>
                    <div style={{marginLeft:'180px'}}>
                    <Button type="submit" variant="contained" color="secondary">Confirm Booking</Button>
                    </div>
            </form>
                <div className="detailss"><i><p className="jst">JUST A STEP AWAY NOW!!!!</p></i>
                   <p className="fill"> FILL IN THE DETAILS  </p>      
                </div>
            </div></b>
            <AuthFeedBack 
                txt="Successfully Booked Car"
                open={this.state.open} 
                autoHideDuration={1000}
                onClose={this.handleClose}
                severity="success" 
            />
            <AuthFeedBack 
                txt="Error! Car Already Booked"
                open={this.state.open1} 
                autoHideDuration={3000}
                onClose={this.handleClose1}
                severity="error" 
            />
            <Loader open={this.state.load} />
            <Footer />
            </div>
        )
    }
}
