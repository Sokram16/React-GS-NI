import React from 'react';
import {connect} from 'react-redux';
import ReactTable from 'react-table';
import GS_Emitter from '../../Emitter';
import {ALERTA} from "../../Emitter/Constants";
//store
import * as actions from '../../actions/dashboard';

//colums
import {columnsTableBodega} from './columnsTableBodega';

class TableBodega extends React.Component {

    render() {

        const props = this.props;
        return (

            <ReactTable data={props.data}
                        columns={columnsTableBodega(props.editarForm)}
                        defaultPageSize={10}
                        pageSizeOptions={[5, 10, 20, 50, 100]}
                        showPagination={true}
                        sortable={true}
                        className="-striped -highlight"
                        noDataText="No hay datos que mostrar"
                        previousText= 'Anterior'
                        nextText= 'Siguiente'
                        loadingText= 'Cargando...'
                        pageText= 'Pagina'
                        ofText= 'de'
                        rowsText= 'elementos'
            />
        )

    }

}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        editarForm: (data) => {
            GS_Emitter.emit(ALERTA, false);
            dispatch(actions.dataFormulario(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBodega);