import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import HeaderFormUsuarios from './HeaderFormUsuarios';
import { useUsuario } from '../../../hooks/useUsuario';
import Alerta from '../../Ui/Alerta';
import Swal from 'sweetalert2'

export default function FormularioUsuario({usuario, roles}) {

    const params = useParams();
    const { loading, errores, agregarUsuario, editarUsuario } = useUsuario();
    const navigate = useNavigate();

    const [datos, setDatos] = useState({
        dni: '',
        surname: '',
        name: '',
        email: '',
        address: '',
        phone: '',
        password: '',
        password_confirmation: '',
        role_id: ''
    })

    useEffect(() => {
      //console.log(params)
      if(params.id) {
        //console.log('Editando...')
        //console.log(usuario)
        setDatos(usuario)
      }
    }, [params])

    const handleSubmit = async e => {
        e.preventDefault();
        if(params.id){
            //console.log(datos)
            const respuesta = await editarUsuario(params.id, datos);
            console.log(respuesta);
            if (respuesta?.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Ok",
                    text: "Operación correctamente"
                });
                navigate("/admin/usuarios")
            }
        }   else {
            console.log(datos)
            const respuesta = await agregarUsuario(datos);
            console.log(respuesta);
            if (respuesta?.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Ok",
                    text: "Operación correctamente"
                });
                navigate("/admin/usuarios")
            }
        }      
    }
    
  return (
    <>
      {params.id ? <HeaderFormUsuarios titulo="Editar Usuario"/> : <HeaderFormUsuarios titulo="Agregar Usuario"/>}
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* {errores ? errores.map(error => <p>{error}</p>) : null } */}
          {errores ? errores.map(error => <Alerta>{error}</Alerta>) : null }
          <form onSubmit={handleSubmit} noValidate>
            {/* px-4 (celu) sm:px-1 (tablet) lg:px-1 (monitor) */}
            <div className="space-y-12 px-4 sm:px-1 lg:px-1">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="dni" className="block text-sm font-medium leading-6 text-gray-900">
                      Dni
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="dni"
                        id="dni"
                        autoComplete="dni"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={datos.dni}
                        onChange={e => setDatos({...datos, dni: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">
                      Apellido
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="surname"
                        id="surname"
                        autoComplete="surname"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={datos.surname}
                        onChange={e => setDatos({...datos, surname: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                      Nombre
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={datos.name}
                        onChange={e => setDatos({...datos, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Correo Electrónico
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={datos.email}
                        onChange={e => setDatos({...datos, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                      Dirección
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={datos.address}
                        onChange={e => setDatos({...datos, address: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                      Teléfono
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="phone"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={datos.phone}
                        onChange={e => setDatos({...datos, phone: e.target.value})}
                      />
                    </div>
                  </div>
                {!params.id && (<>
                  <div className="sm:col-span-2">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Clave
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={datos.password}
                        onChange={e => setDatos({...datos, password: e.target.value})}
                      />
                    </div>
                  </div>
                
                  <div className="sm:col-span-2">
                    <label htmlFor="password_confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                      Confirmar Clave
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        autoComplete="password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={datos.password_confirmation}
                        onChange={e => setDatos({...datos, password_confirmation: e.target.value})}
                      />
                    </div>
                  </div>
                </>)}
                  <div className="sm:col-span-2">
                    <label htmlFor="rol" className="block text-sm font-medium leading-6 text-gray-900">
                      Rol
                    </label>
                    <div className="mt-2">
                      <select
                        id="rol"
                        name="role_id"
                        autoComplete="rol"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        value={datos.role_id}
                        onChange={e => setDatos({...datos, role_id: e.target.value})}
                      >
                        <option value="0">Seleccione...</option>
                          {roles.map((rol) => (
                            <option key={rol.id} value={rol.id}>{rol.name}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Link to="/admin/usuarios">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                  Cancelar
                </button>
              </Link>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {params.id ? 'Actualizar' : 'Agregar'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
