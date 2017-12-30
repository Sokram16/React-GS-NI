import React from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardBody, Button, Row, Col} from 'reactstrap';
import GS_Emitter from '../../Emitter/index';

//store
import * as actions from '../../actions/dashboard';

//request
import {serverURL} from "../../Request/apiUrl";
import axios from "axios/index";

//componentes
import TableBodega from './tableBodega';
import FormBodega from './formBodega';

//icons
import FaAgregar from 'react-icons/lib/fa/plus';

let Subscription = null;

class Bodega extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    // register all adding stuff here
    componentWillMount() {
        Subscription = GS_Emitter.addListener('Recargar', () => {
            this.recargar();
        });
    };

    componentDidMount() {
        this.recargar();
    };

    // unregister all references here
    componentWillUnmount() {
        Subscription.remove();
    }

    recargar(){
        axios.get(serverURL + 'bodega/getallbodegas', {crossdomain: true})
            .then(function (response) {
                this.setState({data: response.data});
                this.props.peticionDeDatos(false);
            }.bind(this))
            .catch(function (error) {
                this.props.peticionDeDatos(false);
                console.log("Error", error);
                this.setState({data: []});
            }.bind(this));
    }

    render() {

        const state = this.state;
        const props = this.props;
        return (
            <Card className="w-100">
                <CardHeader className="p-3">
                    <Button color="info"
                            onClick={(e) => props.abrirForm()}
                    > <FaAgregar/> Agregar</Button>
                </CardHeader>
                <CardBody className="p-3">

                    <Row>
                        <Col>
                            <TableBodega data={state.data}/>
                        </Col>
                        {
                            (props.abierto && <Col><FormBodega recargar={this.recargar} /></Col>)
                        }
                    </Row>

                </CardBody>
            </Card>
        )

    }

}

const mapStateToProps = state => {

    const abierto = state.Dashboard.abrirFormulario;

    return {
        abierto: abierto
    };
};

const mapDispatchToProps = dispatch => {
    return {
        abrirForm: () => {
            dispatch(actions.abrirForm(true));
        },
        peticionDeDatos: (valor) => {
            dispatch(actions.peticionDeDatos(valor));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bodega);
