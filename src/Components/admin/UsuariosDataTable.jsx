import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import useScreenSize from "../../hooks/useScreenSize";
import { axiosInstance } from "../../config/axiosInstance";
import Swal from "sweetalert2";
import { FaPencil, FaTrashCan } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UsuariosDataTable = () => {
  const [data, setData] = useState([]);
  const { width } = useScreenSize();
  const [user, setUser] = useState({});
  const [selectedRol, setSelectedRol] = useState("");
  const [userId, setUserId] = useState("");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelectRol = async (_id) => {
    try {
      axiosInstance.get(`user/${_id}`).then((response) => {
        const { data } = response;
        const { user } = data;
        setUser(user);
        setSelectedRol(user.rol);
        setUserId(user._id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeRol = async () => {
    if (selectedRol !== user.rol) {
      try {
        const updatedUser = { ...user, rol: selectedRol };
        await axiosInstance.put(`/user/${userId}`, updatedUser, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setUser(updatedUser);
        setCount(count + 1);
        handleClose();
      } catch (error) {
        console.log(error);
      }
    }
  };

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
  }, [count]);

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
          setData((newUser) => newUser.filter((user) => user._id !== row));
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
      name: "Rol",
      selector: (row) => row.rol,
      sortable: true,
      center: true,
    },
    {
      name: "Acciones",
      selector: (row) => {
        return (
          <div className="flex justify-between gap-2 align-middle">
            <button
              type="button"
              className="bg-red-600 hover.bg-red-700 p-2 text-white font.bold rounded transition.all"
              onClick={() => handleDelete(row._id)}
            >
              <FaTrashCan />
            </button>
            <button
              type="button"
              className="bg-primary p-2 text-white font-bold rounded transition-all w-full"
              onClick={() => {
                handleSelectRol(row._id)
                handleShow()
              }}
            >
              <FaPencil />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      {data && (
        <div className="container rounded-lg p-0 mb-4 mt-4">
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="mb-2">
            <p className="text-center text-xl font-bold">
              Seleccione un rol a modificar
            </p>
            <select
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md text-center"
              value={selectedRol}
              onChange={(e) => setSelectedRol(e.target.value)}
            >
              <option className="text-xl" value="admin">
                Admin
              </option>
              <option className="text-xl" value="user">
                Usuario
              </option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleChangeRol}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UsuariosDataTable;
