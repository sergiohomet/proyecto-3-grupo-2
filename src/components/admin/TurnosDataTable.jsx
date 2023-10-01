import React from 'react'
import { turnos } from '../../helpers/data';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize'

const TurnosDataTable = () => {
    const { width } = useScreenSize()

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const customStyles = {
        headCells: {
            style: {
                fontSize: width > 992 ? '20px' : '15px'
            },
        },
        cells: {
            style: {
                fontSize: '15px',
            },
        },
    };

    const columns = [
        {
            name: 'Nombre',
            selector: (row) => row.vet,
            sortable: true,
            sortable: true,
            center: true
        },
        {
            name: 'Apellido',
            selector: (row) => row.pet,
            sortable: true,
            center: true
        },
        {
            name: 'Email',
            selector: (row) => row.date,
            sortable: true,
            center: true
        },
        {
            name: 'Número',
            selector: (row) => row.hour,
            sortable: true,
            center: true
        },
        {
            name: 'Mascota',
            selector: (row) => row.details,
            sortable: true,
            center: true
        }
    ]
    
      return (
        <>
          {turnos && turnos.length ? (
            <div className="container rounded-lg p-0 mb-4">
                <DataTable 
                    columns={columns}
                    data={turnos}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    compact
                    fixedHeader
                    highlightOnHover
                    responsive
                    customStyles={customStyles}
                />
            </div>

          ) : (
            <div>
              <p className="mt-10 text-3xl font-semibold">
                No hay {""}
                <span className="text-indigo-600 font-bold">Turnos </span>
                disponibles aún
              </p>
              <p className="font-bold text-2xl">Comienza agregandolos</p>
            </div>
          )}
          <Link 
            to={'/turnos'}
            className="bg-indigo-600 p-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded transition-all no-underline">
            {turnos && turnos.length ? "Ver Turnos" : "Agregar Turno"}
          </Link>
        </>
      );
}

export default TurnosDataTable