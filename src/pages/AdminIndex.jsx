import PacientesDataTable from "../components/admin/PacientesDataTable"
import TurnosDataTable from "../components/admin/TurnosDataTable"

const AdminIndex = () => {
  return (
    <>
        <div className='mx-auto text-center w-full mb-4'>
            <h1 className='text-center'>
                Administración {''}
                <span className="text-indigo-600 font-bold">General </span>
            </h1>
            <hr />
            <p className='text-3xl font-bold text-indigo-600 '>Pacientes</p>

            <PacientesDataTable />

            <hr />
            <p className='text-3xl font-bold text-indigo-600 '>Turnos</p>

            <TurnosDataTable />
        </div>
    </>
  )
}

export default AdminIndex