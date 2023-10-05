import React from 'react'
import { Button } from 'react-bootstrap/lib/InputGroup'
import useForm from '../hooks/Useform'

const Registro = () => {

    const initialData = {
        Nombre: '',
        Apellido:'',
        Telefono:'',
        email:'',
        Contraseña:'',
        Mensaje:'',


    }

    const { form, loading, handleChange, handleSubmit} = useForm(initialData)

   

  return (  



    <div>
        <form className='w-50'>
        
             <label className='form-label'>Nombre</label>
             <input type='text' className='form-control'name="Nombre" value={form.Nombre} onChange={handleChange}/>

             <label className='form-label'>Apellido</label>
             <input type='text' className='form-control'name="Apellido" value={form.Apellido} onChange={handleChange}/>

             <label className='form-label'>Telefono</label>
             <input type='text' className='form-control'name="Telefono" value={form.Telefono} onChange={handleChange}/>

             <label className='form-label'>email</label>
             <input type='email' className='form-control'name="email" value={form.email} onChange={handleChange}/>

             <label className='form-label'>Contraseña</label>
             <input type='text' className='form-control'name="Contraseña" value={form.Contraseña} onChange={handleChange}/>

             <label className='form-label'>Confirmar Contraseña</label>
             <input type='text' className='form-control'name="Contraseña" value={form.Contraseña} onChange={handleChange}/>

             <label className='form-label'>Mensaje</label>
             <textarea className='form-control'name="Mensaje" value={form.Mensaje} onChange={handleChange}/>

             <button className='btn btn-warning mt-1 w-50'>Enviar Formulario</button>



        </form> 
        
        
        </div>



  )
}

export default Registro