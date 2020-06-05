import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class ReturnCarCard extends Component{

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
                            </Card>
                        )
                    })}
                </div>
            </div>
        );
    }
}