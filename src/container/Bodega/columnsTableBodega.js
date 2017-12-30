import React from 'react';
import {Button} from 'reactstrap';

//icons
import FaEdit from 'react-icons/lib/fa/edit';
import FaEliminar from 'react-icons/lib/fa/trash-o';

export const columnsTableBodega = (editarForm) => {

    const columns = [
        {
            show:false,
            headerClassName: "text-left",
            maxWidth: 100,
            Header: 'IdBodega',
            accessor: 'id'
        },
        {
            headerClassName: "text-left",
            maxWidth: 100,
            Header: 'Còdigo',
            accessor: 'codigo'
        },
        {
            headerClassName: "text-left",
            className: "text-left",
            Header: "Nombre",
            accessor: "nombre",
        },
        {
            headerClassName: "text-left",
            className: "text-left",
            Header: "Descripciòn",
            accessor: "descripcion"
        },
        {
            headerClassName: "text-left",
            className: "text-left",
            Header: "Direcciòn",
            accessor: "direccion"
        },
        {
            id: 'buttonEditar',
            className: "d-flex",
            maxWidth: 70,
            accessor: 'id',
            Cell: (row) => (
                <Button color={"info"}
                        className="mx-auto"
                        onClick={()=>editarForm(row.row)}>
                    <FaEdit className={"ml-1 mr-1"}/>
                </Button>
            )
        },
        {
            id: 'buttonEliminar',
            className: "d-flex",
            maxWidth: 70,
            accessor: 'id',
            Cell: (row) => (
                <Button color={"danger"}
                        className="mx-auto"
                        onClick={()=>editarForm(row.row)}>
                    <FaEliminar className={"ml-1 mr-1"}/>
                </Button>
            )
        }
    ];

    return columns;

};