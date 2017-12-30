import React from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardBody, Button, Row, Col} from 'reactstrap';

//store
import * as actions from '../../actions/dashboard';

//request
import {serverURL} from "../../Request/apiUrl";
import axios from "axios/index";

//lodash
import isUndefined from 'lodash/isUndefined';

//componentes
import TableBodega from './tableBodega';
import FormBodega from './formBodega';

//icons
import FaAgregar from 'react-icons/lib/fa/plus';

class Bodega extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            request: true
        };
    }

    componentDidMount() {

        axios.get(serverURL + 'bodega/getallbodegas', {crossdomain: true})
            .then(function (response) {
                this.setState({data: response.data, request: false});
            }.bind(this))
            .catch(function (error) {
                console.log("Error", error);
                this.setState({data: [], request: false});
            }.bind(this));

    };

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
                            (props.abierto && <Col><FormBodega/></Col>)
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bodega);
