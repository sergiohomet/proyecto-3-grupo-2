import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormUpdate from "./FormUpdate";
import { axiosInstance } from "../../config/axiosInstance";

const ModalUpdate = ({ show, handleClose, pacienteId, onUpdate }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Utiliza un estado para almacenar si el modal está abierto o cerrado
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (pacienteId) {
      try {
        axiosInstance.get(`/pacientes/${pacienteId}`).then((resp) => {
          setData(resp.data);
          setIsLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [pacienteId]);

  const handleFormSubmit = async (updatedData) => {
    try {
      const response = await axiosInstance.put(`/pacientes/${pacienteId}`, updatedData);

      onUpdate(response.data);

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  // Utiliza useEffect para detectar cuando el modal se abre o cierra
  useEffect(() => {
    if (show) {
      setModalOpen(true); // El modal se ha abierto
    } else {
      setModalOpen(false); // El modal se ha cerrado
    }
  }, [show]);

  // Reiniciar los datos del paciente cuando el modal se cierra
  useEffect(() => {
    if (!modalOpen) {
      setData({});
      setIsLoading(true);
    }
  }, [modalOpen]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <p>Cargando...</p>
          ) : (
            <FormUpdate
              paciente={data}
              onSubmit={handleFormSubmit}
              onCancel={handleClose}
              onUpdate={onUpdate}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdate;
