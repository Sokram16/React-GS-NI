import React from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Input, Button, FormFeedback, Alert} from 'reactstrap';
import {Field, reduxForm,SubmissionError} from 'redux-form';
import axios from "axios/index";
import {serverURL} from "../../Request/apiUrl";

//store
import * as actions from '../../actions/dashboard';

//lodash
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

//icons
import FaGuardar from 'react-icons/lib/fa/floppy-o';
import FaCerrar from 'react-icons/lib/fa/times-circle'

const requerido = value => value ? undefined : 'required';

class FormBodega extends React.Component {

    shouldComponentUpdate(next_props, next_state) {
        if (!isEqual(next_props, this.props))
            return true;
        else
            return false;
    };

    guardarFormulario = (form) =>
        axios({
            method: 'post',
            url: serverURL + 'bodega/GuardarBodega',
            data: {
                ...form
            }
        })
            .then(function (response) {
                //this.setState({data: response.data, request: false});
            }.bind(this))
            .catch(function (error) {
                console.log("Error", error);
                throw new SubmissionError(error);
            }.bind(this));

    Input = ({input, type, placeholder, meta: {touched, error}, disabled}) => (
        <FormGroup>
            <Input {...input}
                   placeholder={placeholder}
                   type={type}
                   valid={!(error && touched)}
                   disabled={disabled}
                   className={"form-control"}
            />
            {touched && error &&
            <FormFeedback>{
                (error === 'required')
                    ? placeholder + ' es un campo requerido.'
                    : error}
            </FormFeedback>
            }
        </FormGroup>
    );

    render() {

        const {handleSubmit, submitting} = this.props;
        const props = this.props;
        return (
            <Card className="w-100">
                <CardHeader className={"p-3 bg-transparent"}>
                    {
                        (props.editando)
                            ? <h4>Editando Bodega</h4>
                            : <h4>Nueva Bodega</h4>
                    }
                </CardHeader>

                <Form onSubmit={handleSubmit(this.guardarFormulario)} className="w-100">
                    <CardBody>

                        {this.props.error &&
                        <Alert color="danger">{this.props.error}</Alert>
                        }

                        <Field name="codigo"
                               type="text"
                               component={this.Input}
                               placeholder="Còdigo"
                               disabled={submitting}
                               validate={[requerido]}
                        />

                        <Field name="nombre"
                               type="text"
                               component={this.Input}
                               placeholder="Nombre"
                               disabled={submitting}
                               validate={[requerido]}
                        />

                        <Field name="descripcion"
                               type="textarea"
                               component={this.Input}
                               placeholder="Descripciòn"
                               disabled={submitting}
                               validate={[requerido]}
                        />

                        <Field name="direccion"
                               type="textarea"
                               component={this.Input}
                               placeholder="Direcciòn"
                               disabled={submitting}
                               validate={[requerido]}
                        />


                    </CardBody>


                    <CardFooter className="d-flex flex-row p-3 bg-transparent">
                        <Button type="submit"
                                color="primary"
                                disabled={submitting}
                        >
                            <span className='semibold'> <FaGuardar/> Guardar</span>
                        </Button>
                        <Button color={"secondary ml-3"} onClick={(e) => this.props.cerrarForm()}> <FaCerrar/> Cancelar</Button>
                    </CardFooter>

                </Form>

            </Card>
        )

    }

}

const mapStateToProps = state => {

    const dataForm = state.Dashboard.dataFormulario;
    const editando = (isEmpty(dataForm) || dataForm.id < 1) ? false : true;

    return {
        dataForm: dataForm,
        editando: editando,
        initialValues: (isEmpty(dataForm)) ? {} : dataForm,
        enableReinitialize:true
    };

};

const mapDispatchToProps = dispatch => {
    return {
        cerrarForm: () => {
            dispatch(actions.abrirForm(false));
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'formulario'
})(FormBodega))
