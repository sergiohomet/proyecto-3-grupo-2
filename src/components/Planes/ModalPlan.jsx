import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PLANES_SCHEMA } from "../../helpers/validationSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Error from "../Error";
import { axiosInstance } from "../../config/axiosInstance";

const ModalPlan = ({ show, setShow, plan }) => {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [mail, setEmail] = useState("");
  const [load, setLoad] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PLANES_SCHEMA),
  });

  const onSubmit = async (data) => {
    try {
      setLoad(true);
      const response = await axiosInstance.post("/solicitud", data);
      response && setLoad(false);
      setEmail(data.email);
      reset();
      setEnviado(true);
    } catch (error) {
      console.log(error);
      setEnviado(true);
      setError({ status: true, message: error.message });
      setLoad(false);
    }
  };

  const handleClose = () => {
    setShow(false);
    reset();
    setEnviado(false);
    setError({ status: false });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Plan {plan.titulo}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            {enviado ? (
              !error.status ? (
                <p>Mensaje enviado al mail {mail}</p>
              ) : (
                <>
                  <p>Error {error.message} </p>
                  <p>Intentelo mas tarde</p>
                </>
              )
            ) : (
              <>
                {" "}
                <h5 className="mb-1 font-bold">
                  Formulario informacion de plan
                </h5>
                <p className="m-0 mb-3">
                  Por favor complete el siguiente formulario para solicitar
                  informacion sobre el plan seleccionado.
                </p>
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold text-start"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Pedro"
                    className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
                    {...register("name")}
                  />
                  {errors.name?.message && (
                    <Error>
                      <p>{errors.name.message}</p>
                    </Error>
                  )}
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="lastname"
                    className="block text-gray-700 font-bold text-start"
                  >
                    Apellido
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Lopez"
                    className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
                    {...register("lastname")}
                  />
                  {errors.lastname?.message && (
                    <Error>
                      <p>{errors.lastname.message}</p>
                    </Error>
                  )}
                </div>{" "}
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold text-start"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="persona@mail.com"
                    className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
                    {...register("email")}
                  />
                  {errors.email?.message && (
                    <Error>
                      <p>{errors.email.message}</p>
                    </Error>
                  )}
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="cellphone"
                    className="block text-gray-700 font-bold text-start"
                  >
                    Telefono
                  </label>
                  <input
                    id="cellphone"
                    type="number"
                    name="cellphone"
                    placeholder="381-111111"
                    className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
                    {...register("cellphone")}
                  />
                  {errors.cellphone?.message && (
                    <Error>
                      <p>{errors.cellphone.message}</p>
                    </Error>
                  )}
                </div>
                <div className="mb-2 d-none">
                  <label
                    htmlFor="plan"
                    className="block text-gray-700 font-bold text-start"
                  >
                    plan
                  </label>
                  <select id="plan" name="plan" {...register("plan")}>
                    <option value={plan.titulo}>Opción 1</option>
                  </select>
                </div>
              </>
            )}
          </Modal.Body>

          <Modal.Footer>
            {!enviado ? (
              <>
                <Button variant="secondary" onClick={handleClose}>
                  Salir
                </Button>

                <input
                  className={
                    !load ? "btn btn-primary" : "disabled btn btn-primary"
                  }
                  type="submit"
                  value={!load ? "Solicitar Informacion" : "Enviando..."}
                />
              </>
            ) : (
              <Button variant="secondary" onClick={handleClose}>
                Volver atras
              </Button>
            )}
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalPlan;
