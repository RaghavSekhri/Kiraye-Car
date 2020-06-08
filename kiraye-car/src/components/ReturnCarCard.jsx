import React, {Component} from 'react';
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
                <table style={{marginTop: '100px', marginLeft: '100px'}}>
                    <tr>
                        <td><h1 style={{color: '#ffa502', fontFamily: 'Metal Mania, cursive'}}>{this.props.type} Cars&nbsp;&nbsp;<i class="fas fa-arrow-circle-down"></i></h1></td>
                    </tr>
                </table>
                            {this.state.cars.map(car=>{
                                return(
                                    <table style={{marginTop: '50px', width: '100%'}} >
                                    <tr>
                                        <td style={{width: '38%'}}><img style={{width:"300px",height:"300px", borderRadius: '10%'}} src={car.media.images[0]} alt="error"/></td>
                                        <td style={{width: '30%'}}><h5 style={{float: 'left', marginLeft:'150px', fontFamily: 'Acme', fontSize:'30px', color: '#F97F51', fontWeight: 'bold'}}>{car.heading}</h5></td>
                                        <td><Button onClick={()=>{this.handleReturn(car._id)}} style={{fontFamily: 'Luckiest Guy cursive',fontWeight: 'bold', float: 'left', marginLeft:'150px', backgroundColor: '#218c74'}} variant="contained" color="primary">Return This Car</Button></td>
                                    </tr>
                                    </table>
                                )
                            })}
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