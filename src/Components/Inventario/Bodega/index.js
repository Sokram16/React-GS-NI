import React, {Component} from 'react';
import {Card, CardBody, CardHeader, Button} from 'reactstrap';
import ReactTable from 'react-table'
import {Field, reduxForm} from 'redux-form'

//icons
import FaPlus from 'react-icons/lib/fa/plus';

//lodash
import isUndefined from 'lodash/isUndefined';

const formatColumn = () => {

    const columns = [
        {
            Header: "UserID",
            accessor: "userId",
            Cell: row => (
                <div className="text-left pl-3">
                    {
                        row.value
                    }
                </div>
            )
        },
        {
            Header: "ID",
            accessor: "id",
            Cell: row => (
                <div className="text-right pr-3">
                    {
                        row.value
                    }
                </div>
            )
        }
        ,
        {
            Header: "Titulo",
            accessor: "title",
            Cell: row => (
                <div className="text-right pr-3">
                    {
                        row.value
                    }
                </div>
            )
        }
        ,
        {
            Header: "Body",
            accessor: "body",
            Cell: row => (
                <div className="text-right pr-3">
                    {
                        row.value
                    }
                </div>
            )
        }
    ];

    return columns;

};

export const nombreBodega = value =>{
  if(isUndefined(value) || value.length<1)
      return "El nombre es requerido";
  else
      return "";
};

export const descripcionBodega = value => {
    if(isUndefined(value) || value.length<1)
        return "La Descripciòn es requerida";
    else
        return "";
};

export const codigoBodega = value => {
    if(isUndefined(value) || value.length<1)
        return "El còdigo es requerio";
    else
        return "";
};

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error}
                     }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control"/>
            {touched &&
            ((error && <span>{error}</span>))}
        </div>
    </div>
);


class Bodega extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            formulario: true
        }
    }

    componentWillMount() {
        //this.props.loadAllBodegas();
    }

    render() {

        const est = this.state;
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <Card className="w-100">

                <CardHeader>
                    <Button color="primary"><FaPlus/> nuevo</Button>
                </CardHeader>

                <CardBody className={"d-flex flex-row"}>
                    <ReactTable data={est.data}
                                columns={formatColumn()}
                                defaultPageSize={25}
                                className={"-striped -highlight " + (est.formulario) ? "w-50" : "w-100"}
                                noDataText="Sin Datos para mostrar"
                    />
                    {
                        (est.formulario)
                            ? <div className={"w-50"}>

                                <form onSubmit={handleSubmit}>
                                    <Field
                                        name="nombre"
                                        type="text"
                                        component={renderField}
                                        label="Nombre"
                                    />
                                    <Field
                                        name="descripcion"
                                        type="text"
                                        component={renderField}
                                        label="Descripciòn"
                                    />
                                    <Field
                                        name="codigo"
                                        type="text"
                                        component={renderField}
                                        label="Còdigo"
                                    />
                                    <div>
                                        <button type="submit" disabled={submitting}>
                                            Submit
                                        </button>
                                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                                            Cancelar
                                        </button>
                                    </div>
                                </form>


                            </div>
                            : <div></div>
                    }
                </CardBody>


            </Card>
        );

    }
}

export default reduxForm({
    form: 'bodegaFormulario' // a unique identifier for this form
})(Bodega)
