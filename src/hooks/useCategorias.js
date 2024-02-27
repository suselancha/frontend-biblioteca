import { useState } from "react";
import { getCategoriasApi } from "../api/categorias";

export default function useCategorias() {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const getCategorias = async (valorSearch="") => {
        let LINK = "?T="
        if(valorSearch){
            LINK = "?search="+valorSearch;
        }

        try {
            setLoading(true)
            const response = await getCategoriasApi();
            console.log(response.data) // Mensaje del Api
            setCategorias(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            setError(error)
        }
    }

    return {
        loading,
        error,
        categorias,
        getCategorias,
    };
};