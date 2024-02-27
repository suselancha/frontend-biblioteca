import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    headers: {
        'Accept': 'application/json',
        'X-Requested-Width': 'XMLHttpRequest'
    },
    withCredentials: true
})

clienteAxios.interceptors.request.use( (config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    //console.log(token);
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

clienteAxios.interceptors.response.use( (response) => {
    return response;
}, (error) => {
    // 401: Acceso no autorizado: token no existe o no es valido
    // 403: 
    // 422: error de validacion desde la Api
    // 404: not found
    console.log(error);
    if (error.response && error.response.status === 401 || error.response.status === 403) {
        localStorage.removeItem('ACCESS_TOKEN');
        window.location.reload();
        return error;
    }
    throw error;
})

export default clienteAxios