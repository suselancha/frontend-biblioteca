import { createContext, useState } from 'react'
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
import { loginApi } from '../api/auth';

const AuthContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
})

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'Alfredo'
    });
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    //const [token, _setToken] = useState(123);

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    const login= async(datos, setErrores) => {
        //_setToken(token)
        // try {
        //     const respuesta = await clienteAxios.post("/auth/login", datos)
        //     console.log(respuesta);
        //     setUser(respuesta.data.user);
        //     setToken(respuesta.data.access_token);
        //     setErrores([]);
        // } catch (error) {
        //     //console.log(error);
        //     setErrores(Object.values(error.response.data.errors));
        // }
        try {
            const response = await loginApi(datos);
            setUser(response.data.user);
            setToken(response.data.access_token);
            console.log(response);
        } catch (error) {
            console.log('ERROR');
            console.log(error);
            setErrores(Object.values(error.response.data.errors));
        }
    }

    const registro= async(datos, setErrores) => {
        try {
            const respuesta = await clienteAxios.post("/auth/register", datos)
            //console.log(respuesta);
            setUser(respuesta.data.user);
            setToken(respuesta.data.token);
            setErrores([]);
            Swal.fire({
                title: "Ok",
                text: "Registro usuario exitoso",
                icon: "success"
            });
        } catch (error) {
            //console.log(error);
            setErrores(Object.values(error.response.data.errors));
        }
    }

    const logout= async() => {
        //console.log('Click Logout');
        try {
            await clienteAxios.post("/auth/logout", null);
            setToken(null);
            setUser({});
        } catch (error) {
            throw Error(error?.response?.data?.errors);
        }
    }


    const getUser = async() => {
        try {
            const respuesta = await clienteAxios("/user");
            console.log(respuesta);
            setUser(respuesta.data);
        } catch (error) {
            throw Error(error?.response?.data?.errors);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
                registro,
                login,
                logout,
                getUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext