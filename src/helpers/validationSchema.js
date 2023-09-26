import * as yup from 'yup'

export const PACIENTES_SCHEMA = yup.object({
    id: yup.string().default(() => Math.random().toString(36).substring(7)),
    mascota: yup.string().required('El nombre de la mascota es obligatorio'),
    propietario: yup.string().required('El nombre del propietario es obligatorio').min(2, 'El minimo son 2 caracteres').max(41, 'El maximo son 41 caracteres'),
    username: yup.string().required('El email es obligatorio').matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Formato de correo no valido"),
    alta: yup.string().required('Seleccione una fecha'),
    sintomas: yup.string().required('Escriba los sintomas de la mascota')
})