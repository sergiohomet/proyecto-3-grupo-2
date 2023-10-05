import React from 'react'
import { Button } from 'react-bootstrap/lib/InputGroup'

const Registro = () => {
  return (  



    <div>
        <form className='w-50'>
        
             <label className='form-label'>Nombre</label>
             <input type='text' className='form-control'/>

             <label className='form-label'>Apellido</label>
             <input type='text' className='form-control'/>

             <label className='form-label'>Telefono</label>
             <input type='text' className='form-control'/>

             <label className='form-label'>Correo Electronico</label>
             <input type='email' className='form-control'/>

             <label className='form-label'>Contraseña</label>
             <input type='text' className='form-control'/>

             <label className='form-label'>Confirmar Contraseña</label>
             <input type='text' className='form-control'/>

             <label className='form-label'>Mensaje</label>
             <textarea className='form-control'/>

             <button className='btn btn-warning mt-1 w-50'>Enviar Formulario</button>



        </form> 
        
        
        </div>



  )
}

export default Registro