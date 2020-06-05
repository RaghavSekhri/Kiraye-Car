import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-bootstrap/Carousel'

import './styles/recentbookedcars.css'

export default class CarCard extends Component {

    state={
        returnDate: new Date(this.props.bookData.returnTime),
        sec: 0,
        min: 0,
        hrs: 0,
        day: 0,
        color:"black"
    }

    tick = ()=>{

        let {sec,min,hrs,day,returnDate,color} = this.state

        sec = parseInt((returnDate.getTime()-Date.now())/1000)

        if(sec<0)
            color="red"
        
        sec = Math.abs(sec)
        
        day = parseInt(sec/86400)
        sec = sec%86400
        hrs = parseInt(sec/3600)
        sec = sec%3600
        min = parseInt(sec/60)
        sec = sec%60

        this.setState({sec,min,hrs,day,color})
    }

    render() {

        const {car,returned} = this.props

        if(!returned)
        {
            setInterval(this.tick,1000)
        }

        let {sec,min,hrs,day,color} = this.state


        return (
            <Card style={{ width: '40%', marginTop: '50px', opacity: '0.8', backgroundColor: '#dfe4ea'}}>
                <div style={{height: '335px'}}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car.media.images[0]}
                                alt="First slide"
                                height="400px"
                                width="20px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car.media.images[1]}
                                alt="Third slide"
                                height="400px"
                                width="20px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car.media.images[2]}
                                alt="Third slide"
                                height="400px"
                                width="20px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car.media.images[3]}
                                alt="First slide"
                                height="400px"
                                width="20px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car.media.images[4]}
                                alt="First slide"
                                height="400px"
                                width="20px"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                    <CardContent style={{opacity: '0.8'}}>
                        <Typography gutterBottom variant="h5" component="h2" style={{marginTop: '95px'}}>
                                {car.heading}
                        </Typography>
                        <div style={{marginTop: '30px'}}>
                            <Typography variant="body2" color="textSecondary" style={{float: 'left', display: 'inline'}}>
                                    <span>Fuel Type:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{car.build.fuel_type}</span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" style={{display: 'inline'}}>
                                    <span>Make:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{car.build.make}</span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" style={{float: 'right', display: 'inline'}}>
                                    <span>Model:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{car.build.model}</span>
                            </Typography>
                        </div>
                        <div style={{marginTop: '30px'}}>
                            <Typography variant="body2" color="textSecondary" style={{float: 'left', display: 'inline'}}>
                                    <span>Year:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{car.build.year}</span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" style={{display: 'inline'}}>
                                    <span>Miles:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{car.miles}</span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" style={{float: 'right', display: 'inline'}}>
                                    <span>Price:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{car.price}</span>
                            </Typography>
                        </div>
                        {!returned?
                            <div style={{marginTop:"20px"}}>
                            {color==="red"?<h4 style={{color:"red"}}>Booking Period Expired</h4>:null}
                            <h4 style={{color:color}}>{color==="black"?"Time Left To Return : ":"Time Delayed : "} {day?day+"Days":null} {hrs?hrs+"Hours":null} {min?min+"Min":null} {sec<10?"0"+sec:sec}Sec</h4>
                            </div>:
                            <div style={{marginTop:"20px"}}>
                                <h1 style={{color:"green"}}>Returned</h1>
                            </div>
                        }
                    </CardContent>    
            </Card>
        )
    }
}
