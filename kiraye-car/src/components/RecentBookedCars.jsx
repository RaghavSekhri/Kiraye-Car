import React, { Component } from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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
                <Navbar />
                {this.state.car.map((Eachcar, index) => {
                    return(
                        <div key= {index}>
                            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <Card style={{height: '650px', width: '40%', marginTop: '50px', opacity: '0.8', backgroundColor: '#dfe4ea'}}>
                                    <div style={{height: '335px'}}>
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={Eachcar.media.images[0]}
                                                    alt="First slide"
                                                    height="400px"
                                                    width="20px"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={Eachcar.media.images[1]}
                                                    alt="Third slide"
                                                    height="400px"
                                                    width="20px"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={Eachcar.media.images[2]}
                                                    alt="Third slide"
                                                    height="400px"
                                                    width="20px"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={Eachcar.media.images[3]}
                                                    alt="First slide"
                                                    height="400px"
                                                    width="20px"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={Eachcar.media.images[4]}
                                                    alt="First slide"
                                                    height="400px"
                                                    width="20px"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                        <CardContent style={{opacity: '0.8'}}>
                                            <Typography gutterBottom variant="h5" component="h2" style={{marginTop: '95px'}}>
                                                    {Eachcar.heading}
                                            </Typography>
                                            <div style={{marginTop: '30px'}}>
                                                <Typography variant="body2" color="textSecondary" style={{float: 'left', display: 'inline'}}>
                                                        <span>Fuel Type:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{Eachcar.build.fuel_type}</span>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" style={{display: 'inline'}}>
                                                        <span>Make:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{Eachcar.build.make}</span>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" style={{float: 'right', display: 'inline'}}>
                                                        <span>Model:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{Eachcar.build.model}</span>
                                                </Typography>
                                            </div>
                                            <div style={{marginTop: '30px'}}>
                                                <Typography variant="body2" color="textSecondary" style={{float: 'left', display: 'inline'}}>
                                                        <span>Year:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{Eachcar.build.year}</span>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" style={{display: 'inline'}}>
                                                        <span>Miles:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{Eachcar.miles}</span>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" style={{float: 'right', display: 'inline'}}>
                                                        <span>Price:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{Eachcar.price}</span>
                                                </Typography>
                                            </div>
                                        </CardContent>    
                                </Card>
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