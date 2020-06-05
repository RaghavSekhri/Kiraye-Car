import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import AuthFeedBack from './AuthFeedBack'
import Loader from './Loader'
import axios from 'axios'

export default class ReturnCarCard extends Component{

    state={
        cars:this.props.cars,
        load:false,
        open:false
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open:false})
    }

    handleReturn = (carId) => {

        this.setState({load:true})

        let obj={
            carId:carId
        }

        axios.patch("https://kiraye-car.herokuapp.com/returncar",obj).then(res=>{
            console.log(res)
            this.setState({cars:this.state.cars.filter(car=>car._id!==carId),load:false,open:true})
        })
    }

    render()
    {

        return (
            <div>
                <h1>{this.props.type} Cars</h1>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    {this.state.cars.map(car=>{
                        return(
                            <Card style={{margin:"30px"}}>
                                <img style={{width:"300px",height:"300px"}} src={car.media.images[0]} alt="error"/>
                                <h5>{car.heading}</h5>
                                <Button onClick={()=>{this.handleReturn(car._id)}} variant="contained" color="primary">Return This Car</Button>
                            </Card>
                        )
                    })}
                </div>
                <AuthFeedBack 
                    txt="Returned Car!!"
                    open={this.state.open} 
                    autoHideDuration={1000}
                    onClose={this.handleClose}
                    severity="success" 
                />
                <Loader open={this.state.load} />
            </div>
        );
    }
}