import React, {Component} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


export default class SimpleBackdrop extends Component{


    render()
    {
        return (
            <div>
                <Backdrop style={{zIndex: 1200,color: '#fff'}} open={this.props.open} onClick={this.handleClose}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        );
    }
}