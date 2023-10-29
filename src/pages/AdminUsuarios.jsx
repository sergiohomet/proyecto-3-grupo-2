import React from "react";
import UsuariosDataTable from "../Components/admin/UsuariosDataTable";

const AdminUsuarios = () => {
  return (
    <section>
      <h1 className="text-center mt-3">
        Administración {""}
        <span className="text-primary font-bold">de Usuarios</span>
      </h1>

      <UsuariosDataTable />
    </section>
  );
};

export default AdminUsuarios;
