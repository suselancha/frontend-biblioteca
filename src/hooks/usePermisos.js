import { useState } from "react";
import clienteAxios from "../config/axios";

export default function usePermisos() {
    const [permisos, setPermisos] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [modal, setModal] = useState(false);

    const getPermisos = async (valorSearch="") => {
        let LINK = "?T="
        if(valorSearch){
            LINK = "?search="+valorSearch;
        }

        try {
            setLoading(true)
            const {data} = await clienteAxios("/permisos"); // data de axios
            console.log(data.data) // Mensaje del Api
            setPermisos(data.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            setError(error)
        }
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    return {
        loading,
        error,
        permisos,
        getPermisos,
        handleClickModal,
        modal
    };
};