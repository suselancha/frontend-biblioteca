import { createContext, useEffect, useState } from 'react'
import clienteAxios from '../config/axios';
import { useNavigate } from 'react-router-dom';

const LibrosContext = createContext();

const LibrosProvider = ({children}) => {
    

    const [libros, setLibros] = useState([]);
    const [libro, setLibro] = useState();
    const [loading, setLoading] = useState(true);
    const [errores, setErrores] = useState([]);
    const [busqueda, setBusqueda] = useState('');

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

    const handleBuscador = async (event) => {
        event.preventDefault();
        //setBusqueda(event.target.value);
        //console.log(busqueda)
        let LINK = "?T="
        if(busqueda){
            LINK = "?search="+busqueda;
        }
        try {
            // TODO: Pasar el token
            const response = await clienteAxios("/books"+LINK)
            //console.log(response)
            setLibros(response.data.libros.data)
            setLoading(false)
        } catch (error) {
            setLoading(true)
            console.log(error)
        }
        
    }

    return (
        <LibrosContext.Provider
            value={{
                libros,
                cargarLibros,
                cargarLibro,
                loading,
                libro,
                errores,
                handleBuscador,
                busqueda,
                setBusqueda
            }}
        >
            {children}
        </LibrosContext.Provider>
    )
}

export {
    LibrosProvider
}

export default LibrosContext