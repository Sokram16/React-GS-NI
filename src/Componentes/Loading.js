import React, { Component } from 'react';
import logo from '../Layout/images/GS_logo_sinLetras.png';
import '../App.css';

class Loading extends Component {
    render() {
        return (
            <div className="w-50 ml-auto mr-auto d-flex justify-content-center">
                <div className="bg-dark p-3 rounded opacityBajo">
                    <img src={logo} className="animate-flicker height75" alt="logo" />
                    <h4 className="App-title text-white animate-flicker">Cargando . . .</h4>
                </div>
            </div>
        );
    }
}

export default Loading;
