import React from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardBody, Button, CardFooter} from 'reactstrap';

//store
import * as actions from '../../actions/dashboard';

//lodash
import isEmpty from 'lodash/isEmpty';

//icons
import FaGuardar from 'react-icons/lib/fa/floppy-o';
import FaCerrar from 'react-icons/lib/fa/times-circle'

class FormBodega extends React.Component {

    render() {

        const props = this.props;
        return (
            <Card className="w-100">
                <CardHeader className={"p-3 " +(props.editando) ? "bg-info" : "bg-primary"}>
                    {
                        (props.editando)
                        ? <h4>Editando Bodega</h4>
                            : <h4>Nueva Bodega</h4>
                    }
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

    const dataForm = state.Dashboard.dataFormulario;
    const editando = (isEmpty(dataForm) || dataForm.id<1) ? false : true;

    return {
        dataForm: dataForm,
        editando: editando
    };

};

const mapDispatchToProps = dispatch => {
    return {
        cerrarForm: () => {
            dispatch(actions.abrirForm(false));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBodega);
