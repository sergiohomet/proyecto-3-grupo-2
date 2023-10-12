import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";
import { axiosInstance } from "../../config/axiosInstance";

const TurnosDataTable = () => {
  const [data, setData] = useState([]);
  const { width } = useScreenSize();

  const formatFecha = (fecha) => {
    if (!fecha) {
      return 'N/D';
    }
  
    const date = new Date(fecha);
  
    if (isNaN(date.getTime())) {
      return 'Fecha no válida';
    }
  
    const dia = date.getDate();
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const mes = meses[date.getMonth()];
    const ano = date.getFullYear();
  
    return `${dia} de ${mes} de ${ano}`;
  };
  
  // ...
  
  const formattedData = data.map((row) => ({
    vet: row.vet,
    pet: row.pet,
    date: formatFecha(row.date),
    hour: row.hour,
    details: row.details,
  }));


  useEffect(() => {
    const fetchData = async () => {
      try {
        await axiosInstance.get("/turnos").then((response) => {
          const { data } = response;
          const { turnos } = data;
          setData(turnos);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const customStyles = {
    headCells: {
      style: {
        fontSize: width > 992 ? "20px" : "15px",
      },
    },
    cells: {
      style: {
        fontSize: "15px",
      },
    },
  };

  const columns = [
    {
      name: "Veterinario",
      selector: (row) => row.vet,
      sortable: true,
      sortable: true,
      center: true,
    },
    {
      name: "Mascota",
      selector: (row) => row.pet,
      sortable: true,
      center: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.date,
      sortable: true,
      center: true,
    },
    {
      name: "Hora",
      selector: (row) => row.hour,
      sortable: true,
      center: true,
    },
    {
      name: "Detalles",
      selector: (row) => row.details,
      sortable: true,
      center: true,
    },
  ];

  return (
    <>
      {data && data.length ? (
        <div className="container rounded-lg p-0 mb-4">
          <DataTable
            columns={columns}
            data={formattedData}
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
        to={"/turnos"}
        className="btn btn-primary fs-5"
      >
        Agregar turnos
      </Link>
    </>
  );
};

export default TurnosDataTable;
