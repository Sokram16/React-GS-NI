import React from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardBody, Button, Row, Col, Alert} from 'reactstrap';
import GS_Emitter from '../../Emitter/index';
import {RECARGAR,ALERTA} from "../../Emitter/Constants";

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

let RecargarEmit = null;
let AlertaEmit = null;

class Bodega extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            alerta: false,
            mensajeAlerta: "",
            errorAlerta: false
        };
    }

    // register all adding stuff here
    componentWillMount() {
        RecargarEmit = GS_Emitter.addListener(RECARGAR, () => {
            this.recargar();
        });
        AlertaEmit = GS_Emitter.addListener(ALERTA, (mostrar, isError, mensaje) => {
            this.mostrarAlerta(mostrar, isError, mensaje);
        });
    };

    componentDidMount() {
        this.recargar();
    };

    // unregister all references here
    componentWillUnmount() {
        GS_Emitter.removeAllListeners();
    }

    recargar() {
        axios.get(serverURL + 'bodega/getallbodegas', {crossdomain: true})
            .then(function (response) {
                this.setState({data: response.data});
                this.props.estadoPeticion(false);
            }.bind(this))
            .catch(function (error) {
                this.props.estadoPeticion(false);
                this.mostrarAlerta(true,true, error.toString());
            }.bind(this));
    }

    mostrarAlerta = (mostrar, isError, mensaje) => {
        if (mostrar)
            this.setState({alerta: true, mensajeAlerta: mensaje.toString(), errorAlerta: isError});
        else
            this.setState({
                alerta: false,
                mensajeAlerta: "",
                errorAlerta: false
            });
    };

    visibleForm = (visible) => {
        this.mostrarAlerta(false);
        this.props.abrirForm(visible);
    };

    render() {

        const state = this.state;
        const props = this.props;
        return (
            <Card className="w-100">
                <CardHeader className="p-3">

                    <Row>
                        <Col>
                            <Button color="info"
                                    onClick={(e) => this.visibleForm(true)}
                            > <FaAgregar/> Agregar</Button>
                        </Col>
                        <Col>
                            <Alert className="m-0 ml-auto" color={(state.errorAlerta) ? "danger" : "success"}
                                   isOpen={this.state.alerta} toggle={() => this.mostrarAlerta(false)}
                            >{this.state.mensajeAlerta}</Alert>
                        </Col>
                    </Row>

                </CardHeader>
                <CardBody className="p-3">

                    <Row>
                        <Col>
                            <TableBodega data={state.data} />
                        </Col>
                        {
                            (props.abierto && <Col><FormBodega recargar={this.recargar}/></Col>)
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
        abrirForm: (visible) => {
            dispatch(actions.abrirForm(visible));
        },
        estadoPeticion: (valor) => {
            dispatch(actions.estadoPeticion(valor));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bodega);
