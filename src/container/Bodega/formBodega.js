import React from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Input, Button, FormFeedback,Label} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import axios from "axios/index";
import {serverURL} from "../../Request/apiUrl";
import GS_Emitter from '../../Emitter';
import {ALERTA} from "../../Emitter/Constants";

//store
import * as actions from '../../actions/dashboard';

//lodash
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

//icons
import FaGuardar from 'react-icons/lib/fa/floppy-o';
import FaCerrar from 'react-icons/lib/fa/times-circle'
import FaEdit from 'react-icons/lib/fa/edit';
import FaPlus from 'react-icons/lib/fa/plus';

const requerido = value => value ? undefined : 'required';

class FormBodega extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(next_props, next_state) {
        return (!isEqual(next_props, this.props) || !isEqual(next_state, this.state));
    };

    guardarFormulario = (form) => {

        this.props.estadoPeticion(true);

        axios({
            method: 'post',
            url: serverURL + 'bodega/GuardarBodega',
            data: {
                ...form
            }
        })
            .then(function (response) {

                this.props.abrirForm();
                this.props.estadoPeticion(false);

                if (response.status !== 200)
                    GS_Emitter.emit(ALERTA,true,true,response.data.mensaje);
                else
                {
                    GS_Emitter.emit('Recargar');
                    GS_Emitter.emit(ALERTA,true,false,response.data.mensaje);
                }

            }.bind(this))
            .catch(function (error) {
                GS_Emitter.emit(ALERTA,true,true,error);
                this.props.estadoPeticion(false);
            }.bind(this));
    };


    Input = ({input, id, type, placeholder, meta: {touched, error}, disabled}) => (
        <FormGroup>
            <Label for={id+"_"}>{placeholder}</Label>
            <Input {...input}
                   placeholder={placeholder}
                   type={type}
                   valid={!(error && touched)}
                   disabled={disabled}
                   className={"form-control"}
                   id={id+"_"}
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

    visibleForm = (visible) => {
        GS_Emitter.emit(ALERTA,false);
        this.props.abrirForm(visible);
    };

    render() {

        const {handleSubmit, submitting} = this.props;
        const props = this.props;
        return (
            <Card>
                <CardHeader className={"p-3 bg-transparent"}>
                    {
                        (props.editando)
                            ? <h4><FaEdit/> Editando Bodega</h4>
                            : <h4><FaPlus/> Nueva Bodega</h4>
                    }
                </CardHeader>

                <Form onSubmit={handleSubmit(this.guardarFormulario)}>
                    <CardBody className="p-3">

                        <Field name="codigo"
                               id="codigo"
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
                        <Button color={"secondary ml-3"} onClick={(e) => this.visibleForm(false)}> <FaCerrar/> Cancelar</Button>
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
        enableReinitialize: true
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


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'formulario'
})(FormBodega))
