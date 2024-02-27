import React, { useEffect } from 'react'
import Spiners from '../../helpers/Spiners';
import HeaderFormUsuarios from '../../components/Usuarios/FormUsuarios/HeaderFormUsuarios';
import FormularioUsuario from '../../components/Usuarios/FormUsuarios/FormularioUsuario';
import { useRoles } from '../../hooks/useRoles';

export default function UsuarioAgregarScreen() {
    const { cargarRoles, roles, loading } = useRoles();

    useEffect(() => {
        cargarRoles()
    }, [])

    if (loading) return <Spiners />

  return (
    <>
      {roles && (
        <FormularioUsuario roles={roles} />
      )}
    </>
  )
}
