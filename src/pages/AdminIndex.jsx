import PacientesDataTable from "../components/admin/PacientesDataTable"
import TurnosDataTable from "../components/admin/TurnosDataTable"

const AdminIndex = () => {
  return (
    <>
        <div className='mx-auto text-center w-full mb-4'>
            <h1 className='text-center mt-5'>
                Administración {''}
                <span className="text-green font-bold">General </span>
            </h1>
            <hr />
            <p className='text-3xl font-bold text-green '>Pacientes</p>

            <PacientesDataTable />

            <hr />
            <p className='text-3xl font-bold text-green '>Turnos</p>

            <TurnosDataTable />
        </div>
    </>
  )
}

export default AdminIndex