import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spiners from '../../helpers/Spiners';
import HeaderFormUsuarios from '../../components/Usuarios/FormUsuarios/HeaderFormUsuarios';
import { useUsuario } from '../../hooks/useUsuario';
import FormularioUsuario from '../../components/Usuarios/FormUsuarios/FormularioUsuario';
import { useRoles } from '../../hooks/useRoles';

export default function UsuarioEditarScreen() {
    const params = useParams();
    const { cargarUsuario, usuario, loading } = useUsuario();
    const { cargarRoles, roles } = useRoles();

    useEffect(() => {
        cargarUsuario(params.id);
    }, [])

    useEffect(() => {
        cargarRoles()
    }, [])

    if (loading) return <Spiners />

  return (
    <>
      {usuario && (
        <FormularioUsuario usuario={usuario} roles={roles} />
      )}
    </>
  )
}
