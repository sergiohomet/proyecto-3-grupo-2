import React from 'react'
import CarrouselPacientes from '../components/admin/CarrouselPacientes'
import CarrouselTurnos from '../components/admin/CarrouselTurnos'

const AdminIndex = () => {
  return (
    <>
        <div className='mx-auto text-center w-full mb-4'>
            <h1 className='text-center'>
                Administración de {''}
                <br />
                <span className="text-indigo-600">Pacientes </span>
            </h1>

            <CarrouselPacientes />

            <hr />
            <p className='text-3xl font-bold text-indigo-600 '>Turnos</p>

            <CarrouselTurnos />
        </div>
    </>
  )
}

export default AdminIndex