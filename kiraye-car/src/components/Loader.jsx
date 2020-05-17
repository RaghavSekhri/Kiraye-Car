import React, {Component} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { createMuiTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


export default class SimpleBackdrop extends Component{


    render()
    {
        const theme = createMuiTheme();

        return (
            <div>
                <Backdrop style={{zIndex: theme.zIndex.drawer + 1,color: '#fff'}} open={this.props.open} onClick={this.handleClose}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        );
    }
}