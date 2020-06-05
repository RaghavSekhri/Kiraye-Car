import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import axios from 'axios'

export default class ReturnCarCard extends Component{

    handleReturn = (carId) => {

        let obj={
            carId:carId
        }

        axios.patch("https://kiraye-car.herokuapp.com/returncar",obj).then(res=>{
            console.log(res)
        })
    }

    render()
    {
        console.log(this.props.cars)
        

        return (
            <div>
                <h1>{this.props.type} Cars</h1>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    {this.props.cars.map(car=>{
                        return(
                            <Card style={{margin:"30px"}}>
                                <img style={{width:"300px",height:"300px"}} src={car.media.images[0]} alt="error"/>
                                <h5>{car.heading}</h5>
                                <Button onClick={()=>{this.handleReturn(car._id)}} variant="contained" color="primary">Return This Car</Button>
                            </Card>
                        )
                    })}
                </div>
            </div>
        );
    }
}