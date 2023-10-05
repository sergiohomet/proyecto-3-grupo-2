import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../config/axiosInstance";
import PacienteFormUpdate from "./PacienteFormUpdate";

const PacienteModalUpdate = ({ show, handleClose, pacienteId, onUpdate }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    if (show) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [show]);

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
            <PacienteFormUpdate
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

export default PacienteModalUpdate;
