import React, {Component} from 'react';
import {Card, CardBody} from 'reactstrap';
import ReactTable from 'react-table'

import {connect} from "react-redux";
import * as actions from '../../../actions/bodega/index';

const formatColumn = () => {

    const columns = [{
        columns: [
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
        ]
    }];

    return columns;

};


class Bodega extends Component {



    componentWillMount()
    {
        this.props.loadAllBodegas();
    }
    render() {


        return (
            <Card className="w-100">

                <CardBody className="w-100">

                    <ReactTable data={this.props.dataBodega}
                                columns={formatColumn()}
                                defaultPageSize={25}
                                className="-striped -highlight"
                                noDataText="There is no data to display"
                    />

                </CardBody>


            </Card>
        );
    }
}


const mapStateToProps = state => {
    return {
        loadingData: state.Dashboard.loadingData,
        dataBodega: state.Bodega.dataBodega
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadAllBodegas: () => {
            dispatch(actions.loadAllBodegas());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bodega);
