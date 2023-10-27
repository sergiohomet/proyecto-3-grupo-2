import PacientesDataTable from "../Components/admin/PacientesDataTable"
import TurnosDataTable from "../Components/admin/TurnosDataTable"

const AdminIndex = () => {
  return (
    <>
        <div className='mx-auto text-center w-full mb-4'>
            <h1 className='text-center mt-5'>
                Administración {''}
                <span className="text-primary font-bold">General </span>
            </h1>
            <hr />
            <p className='text-3xl font-bold text-primary '>Pacientes</p>

            <PacientesDataTable />

            <hr />
            <p className='text-3xl font-bold text-green '>Turnos</p>

            <TurnosDataTable />
        </div>
    </>
  )
}

export default AdminIndex