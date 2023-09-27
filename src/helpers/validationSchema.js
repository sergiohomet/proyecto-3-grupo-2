import * as yup from "yup";

export const PACIENTE_SCHEMA = yup.object({
  id: yup.string().default(() => Math.random().toString(36).substring(7)),

  nombre: yup
    .string()
    .required("El nombre del propietario es obligatorio")
    .min(2, "El minimo son 2 caracteres")
    .max(41, "El maximo son 41 caracteres"),
  apellido: yup
    .string()
    .required("El nombre del propietario es obligatorio")
    .min(2, "El minimo son 2 caracteres")
    .max(28, "El maximo son 28 caracteres"),
  username: yup
    .string()
    .required("El email es obligatorio")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Formato de correo no valido"
    ),
  telefono: yup
    .string()
    .required("El número de telefono es obligatorio")
    .min(10, "El minimo son 10 caracteres")
    .max(10, "El maximo son 10 caracteres"),
  mascota: yup
    .string()
    .required("El nombre de la mascota es obligatorio")
    .min(2, "Minimo 2 caracteres")
    .max(10, "Maximo 10 caracteres"),
  especie: yup
    .string()
    .required("La Especie es obligatoria")
    .min(2, "Minimo 2 caracteres")
    .max(10, "Maximo 10 caracteres"),
  raza: yup
    .string()
    .required("La Raza de la mascota es obligatoria")
    .min(2, "Minimo 2 caracteres")
    .max(10, "Maximo 10 caracteres"),
});
