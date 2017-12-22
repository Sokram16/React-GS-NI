import React from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardBody, Button, CardFooter} from 'reactstrap';

//store
import * as actions from '../../actions/dashboard';

//lodash
import isUndefined from 'lodash/isUndefined';

//componentes
import TableBodega from './tableBodega';

//icons
import FaGuardar from 'react-icons/lib/fa/floppy-o';
import FaCerrar from 'react-icons/lib/fa/times-circle'

class FormBodega extends React.Component {

    render() {

        const props = this.props;
        return (
            <Card className="w-100 mx-3">
                <CardHeader>

                </CardHeader>
                <CardBody className="d-flex flex-row">

                    <input className="form-control" type={"text"}/>

                </CardBody>
                <CardFooter className="d-flex justify-content-start p-3">
                    <Button color={"primary"}> <FaGuardar/> Guardar</Button>
                    <Button color={"secondary ml-3"} onClick={(e) => this.props.cerrarForm()}> <FaCerrar/> Cancelar</Button>
                </CardFooter>
            </Card>
        )

    }

}

const mapStateToProps = state => {

    const dataForm = (isUndefined(state.Dashboard.bodegaForm.dataForm)) ? [] : state.Dashboard.bodegaForm.dataForm;

    return {
        dataForm: dataForm
    };

};

const mapDispatchToProps = dispatch => {
    return {
        cerrarForm: () => {
            dispatch(actions.cerrarForm('bodega'));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBodega);
