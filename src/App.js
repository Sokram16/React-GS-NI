import React, { Component } from 'react';
import logo from './Layout/images/GS_logo_sinLetras.png';
import {connect} from 'react-redux';

//store
import * as actions from './actions/dashboard';

import './App.css';

class App extends Component {

    componentWillMount(){
        this.props.estadoPeticion(false);
    }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        peticionDeDatos: state.Dashboard.peticionDeDatos,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        estadoPeticion: (valor) => {
            dispatch(actions.estadoPeticion(valor));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
