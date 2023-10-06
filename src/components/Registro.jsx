import React from 'react'

import useForm from '../hooks/Useform'
import './Registro.css'

const Registro = () => {

    const initialData = {
        Nombre: '',
        Apellido:'',
        Telefono:'',
        email:'',
        Contraseña:'',
        Mensaje:'',



    }

    const oneValidate = (form) =>{

      let isError = false
      let error = {}

        if (!form.Nombre.trim()) {
          errors.Nombre = 'el "Nombre" es obligatorio '
          isError = true
        }

        if (!form.Apellido.trim()) {
          errors.Apellido = 'el "Apellido" es obligatorio '
          isError = true
        }

        if (!form.email.trim()) {
          errors.email = 'el "email" es obligatorio '
          isError = true
        }

        if (!form.Contraseña.trim()) {
          errors.Contraseña = 'el "Contraseña" es obligatoria'
          isError = true
        }

        return isError ? errors : null


      
    }

    const {form, errors, loading, handleChange, handleSubmit} = useForm(initialData, oneValidate)

   

  return (  



    <div>
        <form className='Registro w-50'onSubmit={handleSubmit}>
        
             <label className='form-label'>Nombre</label>
             <input type='text' className='form-control'name="Nombre" value={form.Nombre} onChange={handleChange}/>
             {errors.Nombre && <div className="alert alert-danger" role="alert">{errors.Nombre}</div>}
             

             <label className='form-label'>Apellido</label>
             <input type='text' className='form-control'name="Apellido" value={form.Apellido} onChange={handleChange}/>
             {errors.Apellido && <div className="alert alert-danger" role="alert">{errors.Apellido} </div>}

             <label className='form-label'>Telefono</label>
             <input type='text' className='form-control'name="Telefono" value={form.Telefono} onChange={handleChange}/>
            

             <label className='form-label'>email</label>
             <input type='email' className='form-control'name="email" value={form.email} onChange={handleChange}/>
             {errors.email && <div className="alert alert-danger" role="alert">{erros.email}</div>}

             <label className='form-label'>Contraseña</label>
             <input type='text' className='form-control'name="Contraseña" value={form.Contraseña} onChange={handleChange}/>
             

             <label className='form-label'>Confirmar Contraseña</label>
             <input type='text' className='form-control'name="Contraseña" value={form.Contraseña} onChange={handleChange}/>
             {errors.Contraseña && <div className="alert alert-danger" role="alert">{errors.Contraseña}</div>}

             <label className='form-label'>Mensaje</label>
             <textarea className='form-control'name="Mensaje" value={form.Mensaje} onChange={handleChange}/>

             <button className='btn btn-warning mt-1 w-50'>Enviar Formulario</button>



        </form> 
        
        
        </div>



  )
}

export default Registro