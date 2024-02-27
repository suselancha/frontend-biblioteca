import { useEffect, useState } from 'react'
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export const useUsuario = () => {

    const navigate = useNavigate();

    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState();
    const [loading, setLoading] = useState(true);
    const [errores, setErrores] = useState([]);

    const cargarUsuarios = async () => {
        try {
            // TODO: Pasar el token
            const response = await clienteAxios("/staffs")
            //console.log(response)
            setUsuarios(response.data.usuarios.data)
            setLoading(false)
        } catch (error) {
            setLoading(true)
            console.log(error)
        }
    }

    const agregarUsuario = async (data) => {
        try {
            // TODO: Pasar el token
            //console.log(data)
            const response = await clienteAxios.post("/staffs", data)
            //console.log(response)
            setLoading(false)
            return response
        } catch (error) {
            setLoading(false)
            //console.log(error)
            setErrores(Object.values(error.response.data.errors))
        }
    }

    const editarUsuario = async (id, data) => {
        try {
            // TODO: Pasar el token
            const response = await clienteAxios.put(`/staffs/${id}`, data)
            //console.log(response)
            setLoading(false)
            return response
        } catch (error) {
            setLoading(false)
            console.log(error)
            //setErrores(Object.values(error.response.data.errors))
        }
    }

    const cargarUsuario = async (id) => {
        try {
            // TODO: Pasar el token
            const response = await clienteAxios(`staffs/${id}`)
            //console.log(response)
            setUsuario(response.data.usuario);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            if (error.response.status === 404) {
                Swal.fire({
                    icon: "error",
                    title: "Ops",
                    text: "Error de consulta"
                });
                navigate("/admin/usuarios")
            }
        }
    }

    useEffect(() => {
        cargarUsuarios()
    }, [])

    return {
        usuarios,
        cargarUsuarios,
        agregarUsuario,
        cargarUsuario,
        loading,
        usuario,
        errores,
        editarUsuario
    }
}

