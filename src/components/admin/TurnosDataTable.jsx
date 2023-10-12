import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";
import { axiosInstance } from "../../config/axiosInstance";

const TurnosDataTable = () => {
  const [data, setData] = useState([]);
  const { width } = useScreenSize();

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
            data={data}
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
