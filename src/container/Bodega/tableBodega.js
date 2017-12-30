import React from 'react';
import {connect} from 'react-redux';
import ReactTable from 'react-table';

//lodash
import find from 'lodash/find';

//store
import * as actions from '../../actions/dashboard';

//colums
import {columnsTableBodega} from './columnsTableBodega';

class TableBodega extends React.Component {

    render() {

        const props = this.props;
        let pageSize = (props.data.length<20) ? props.data.length : 20;
        pageSize = (pageSize<5) ? 5 : pageSize;
        return (
            <div className="w-100">
                <ReactTable data={props.data}
                            columns={columnsTableBodega(props.editarForm)}
                            pageSize={pageSize}
                            pageSizeOptions={[5, 10,20,50,100]}
                            showPagination={true}
                            sortable={true}
                            className="-striped -highlight"
                            noDataText="No hay datos que mostrar"
                />
            </div>
        )

    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editarForm: (data) => {
            dispatch(actions.dataFormulario(data));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(TableBodega);