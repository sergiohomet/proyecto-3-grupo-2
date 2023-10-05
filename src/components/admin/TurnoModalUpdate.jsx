import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../config/axiosInstance";
import TurnoFormUpdate from "./TurnosFormUpdate";

const TurnoModalUpdate = ({ show, handleClose, turnoId, onUpdate }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (turnoId) {
      try {
        axiosInstance.get(`/turnos/${turnoId}`).then((resp) => {
          setData(resp.data);
          setIsLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [turnoId]);

  const handleFormSubmit = async (updatedData) => {
    try {
      const response = await axiosInstance.put(`/turnos/${turnoId}`, updatedData);

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
            <TurnoFormUpdate
              turno={data}
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

export default TurnoModalUpdate;
