import * as yup from 'yup'

export const formValidationSchema = yup.object().shape({
    id: yup
    .string()
    ,
    title: yup
    .string()
    ,
    name: yup
    .string()
    ,
    surname: yup
    .string()
    ,
    genre: yup
    .string()
    ,
    email: yup
    .string()
    .email('Escribe un correo valido')
    .required('Correo es obligatorio')
    ,
    dateBirth: yup
    .string()
    ,
    phone: yup
    .string()
})