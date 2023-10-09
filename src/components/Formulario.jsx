import { useState } from 'react'
import "./formulario.css";

export function Formulario ({setUser}) {
    const [Nombre, setNombre] = useState ("")
    const [Contraseña, setContraseña] = useState ("")
    const [Error, setError] = useState (false)

    const handleSubmit = (e) => {
        e.preventDefault()
if (Nombre ==="" || Contraseña ===""){
    setError(true)
    return
}

setError(false)

setUser([Nombre])

    } 

    return (
        <section className='form-container'>
            <h1>Login</h1>

            <form className='Formulario'
            onSubmit={handleSubmit}>
                
                <input type="text"
                value={Nombre}
                onChange={e =>setNombre(e.target.value)}
                /><a>Ingrese nombre de usuario</a>
                
                <input type="Password"
                value={Contraseña}
                onChange={e =>setContraseña(e.target.value)}
                /><a>Ingrese contraseña</a>

                <button className='btn-primary'>Iniciar Sesión</button>
                
                
            </form> 
            {Error &&<p>Todos los campos son obligatorios</p>}



        </section>
    )




}