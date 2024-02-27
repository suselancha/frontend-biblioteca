import { useEffect, useState } from 'react'
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export const useLibro = () => {

    const navigate = useNavigate();

    const [libros, setLibros] = useState([]);
    const [libro, setLibro] = useState();
    const [loading, setLoading] = useState(true);
    const [errores, setErrores] = useState([]);

    const cargarLibros = async (valorSearch="") => {
        let LINK = "?T="
        if(valorSearch){
            LINK = "?search="+valorSearch;
        }
        try {
            // TODO: Pasar el token
            const response = await clienteAxios("/books"+LINK)
            console.log(response)
            setLibros(response.data.libros.data)
            setLoading(false)
        } catch (error) {
            setLoading(true)
            console.log(error)
        }
    }
    
    const cargarLibro = async (id) => {
        // try {
        //     // TODO: Pasar el token
        //     const response = await clienteAxios(`staffs/${id}`)
        //     //console.log(response)
        //     setUsuario(response.data.usuario);
        //     setLoading(false)
        // } catch (error) {
        //     setLoading(false)
        //     console.log(error)
        //     if (error.response.status === 404) {
        //         Swal.fire({
        //             icon: "error",
        //             title: "Ops",
        //             text: "Error de consulta"
        //         });
        //         navigate("/admin/usuarios")
        //     }
        // }
    }

    useEffect(() => {
        cargarLibros()
    }, [])

    return {
        libros,
        cargarLibros,
        cargarLibro,
        loading,
        libro,
        errores,
    }
}

