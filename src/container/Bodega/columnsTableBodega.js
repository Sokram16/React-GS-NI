import React from 'react';
import {Button} from 'reactstrap';

//icons
import FaEdit from 'react-icons/lib/fa/edit';
import FaEliminar from 'react-icons/lib/fa/trash-o';

export const columnsTableBodega = (data,editarForm) => {

    const columns = [
        {
            headerClassName: "text-left",
            maxWidth: 100,
            Header: 'IdBodega',
            accessor: 'id'
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
            Cell: ({value}) => (
                <Button color={"info"}
                        className="mx-auto"
                        onClick={()=>editarForm(data,value)}>
                    <FaEdit className={"ml-1 mr-1"}/>
                </Button>
            )
        },
        {
            id: 'buttonEliminar',
            className: "d-flex",
            maxWidth: 70,
            accessor: 'id',
            Cell: ({value}) => (
                <Button color={"danger"}
                        className="mx-auto"
                        onClick={()=>editarForm(data,value)}>
                    <FaEliminar className={"ml-1 mr-1"}/>
                </Button>
            )
        }
    ];

    return columns;

};