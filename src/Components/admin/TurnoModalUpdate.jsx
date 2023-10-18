import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../config/axiosInstance";
import TurnoFormUpdate from "./TurnosFormUpdate";

const TurnoModalUpdate = ({ show, handleClose, turnoId, onUpdate, setUpdateCounter }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (turnoId) {
      try {
        axiosInstance.get(`/turno/${turnoId}`).then((resp) => {
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
      const response = await axiosInstance.put(
        `/turnos/${turnoId}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      onUpdate(response.data);
      setUpdateCounter(setUpdateCounter + 1);
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
              turno={data.turno}
              onSubmit={handleFormSubmit}
              onCancel={handleClose}
              onUpdate={onUpdate}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TurnoModalUpdate;
