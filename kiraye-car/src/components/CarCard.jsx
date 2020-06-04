import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-bootstrap/Carousel'

import './styles/recentbookedcars.css'

export default class CarCard extends Component {


    render() {
        // console.log(this.props.user)

        const {car} = this.props

        return (
            <Card style={{height: '650px', width: '40%', marginTop: '50px', opacity: '0.8', backgroundColor: '#dfe4ea'}}>
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
                    </CardContent>    
            </Card>
        )
    }
}
