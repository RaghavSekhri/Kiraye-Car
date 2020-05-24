import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../images/suv.webp';
import img2 from '../images/sedan.jpg'
import img3 from '../images/coupe.jpg'
import img4 from '../images/hatchback.webp'
import img5 from '../images/pickup.jpg'
import img6 from '../images/wagon.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import './styles/CarType.css'

export default class CarType extends Component {
    render() {
        const auth=this.props
        return (
            <div>
                <Navbar value={0} auth={auth} changeAuth={this.props.changeAuth}/>
                <div className="def" style={{width:'100%',height:'130px',color:'white'}}>
                    <b><p style={{fontSize:'40px',fontFamily:'Anton'}}>LET'S GO PLACES</p></b>
                    <p style={{fontSize:'40px',fontFamily:'Dancing Script',fontStretch:'ultra-expanded'}}>Pick a suitable one!!!</p>
                </div>
            <div className="abc" style={{display:'flex',flexWrap:'wrap'}}>
            <Card style={{width:'378px',height:'300px',marginTop:'100px',marginLeft:'50px'}}>
      <CardContent>
      <Link to = {{pathname: '/showcar', search: '?type=SUV' , type: 'SUV' }} style={{fontSize:'20px'}}>SUV</Link>
      <img src={img1} alt="car" style={{height:'210px'}}></img>
        </CardContent>
        </Card>
        <Card style={{width:'378px',marginTop:'100px',marginLeft:'50px',height:'300px'}}>
      <CardContent>
      <Link to = {{pathname: '/showcar', search: '?type=Sedan', type: 'Sedan'}} style={{fontSize:'20px'}}>Sedan</Link>
      <img src={img2} alt="car" style={{height:'220px'}}></img>
        </CardContent>
        </Card>
        <Card style={{width:'378px',marginTop:'100px',marginLeft:'50px',height:'300px'}}>
      <CardContent>
      <Link to = {{pathname: '/showcar', search: '?type=Coupe', type: 'Coupe'}} style={{fontSize:'20px'}}>Coupe</Link>
      <img src={img3} alt="car" style={{height:'240px'}}></img>
        </CardContent>
        </Card>
        <Card style={{width:'378px',marginLeft:'50px',height:'300px',marginTop:'70px',marginBottom:'50px'}}>
      <CardContent>
      <Link to = {{pathname: '/showcar', search: '?type=Hatchback', type: 'Hatchback'}} style={{fontSize:'20px'}}>Hatchback</Link>
      <img src={img4} alt="car" style={{height:'240px'}}></img>
        </CardContent>
        </Card> 
        <Card style={{width:'378px',marginTop:'70px',height:'300px',marginLeft:'50px'}}>
      <CardContent>
      <Link to = {{pathname: '/showcar', search: '?type=Pickup', type: 'Pickup'}} style={{fontSize:'20px'}}>Pickup</Link>
      <img src={img5} alt="car" style={{height:'225px'}}></img>
        </CardContent>
        </Card> 
        <Card style={{width:'378px',marginLeft:'50px',marginTop:'70px',marginBottom:'5px',height:'300px'}}>
      <CardContent>
      <Link to = {{pathname: '/showcar', search: '?type=Wagon', type: 'Wagon'}} style={{fontSize:'20px'}}>Wagon</Link>
      <img src={img6} alt="car" style={{height:'240px'}}></img>
        </CardContent>
        </Card> 
            </div>
            <Footer />
            </div>
        )
    }
}
