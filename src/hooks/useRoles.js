import { useState } from 'react';
import clienteAxios from '../config/axios';

export const useRoles = () => {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);

    const cargarRoles = async () => {
        try {
            // TODO: Pasar el token
            const response = await clienteAxios("/staffs/config")
            //console.log(response)
            setRoles(response.data.data);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return { 
        cargarRoles,
        roles,
        loading,
    }
}