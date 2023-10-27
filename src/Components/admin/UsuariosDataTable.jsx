import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import useScreenSize from "../../hooks/useScreenSize";
import { axiosInstance } from "../../config/axiosInstance";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";

const UsuariosDataTable = () => {
  const [data, setData] = useState([]);
  const { width } = useScreenSize();

  useEffect(() => {
    const fetchData = async () => {
      try {
        axiosInstance.get("/users").then((response) => {
          const { data } = response;
          const { users } = data;
          setData(users);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (row) => {
    try {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Este es un cambio que no se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosInstance.delete(`/user/${row}`);
          setData((newUser) => newUser.filter((user) => user._id !== _id));
          Swal.fire("Eliminado!", "El Usuario fue eliminado", "success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      name: "Email",
      selector: (row) => row.username,
      sortable: true,
      center: true,
    },
    {
      name: "Contraseña",
      selector: (row) => row.password,
      sortable: true,
      center: true,
    },
    {
      name: "Rol",
      selector: (row) => row.rol,
      sortable: true,
      center: true,
    },
    {
      name: "Acciones",
      selector: (row) => {
        return (
        <div>
          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 p-2 text-white font-bold rounded transition-all"
            onClick={() => handleDelete(row._id)}
          >
            Eliminar
          </button>
          
        </div>
        )
      },
      
    },
  ];

  return (
    <>
      {data && (
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
      )}
    </>
  );
};

export default UsuariosDataTable;
