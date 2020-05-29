import React, { Component } from 'react';
import {Spinner} from 'react-bootstrap'

export default class Loader1 extends Component {
    render()
    {
        return (
            <div style={{display:"flex",flexDirection:"column",height:"80vh",alignItems:"center",justifyContent:"center"}}>
                <Spinner animation="grow" />
                <h3>Loading...</h3>
            </div>
        )
    }
}