import { Navigate, createBrowserRouter } from 'react-router-dom'
import Login from './views/Auth/Login'
import AuthLayout from './layouts/AuthLayout'
import Signup from './views/Auth/Signup'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './views/Admin/Dashboard'
import UsuarioScreen from './views/Admin/UsuarioScreen'
import UsuarioEditarScreen from './views/Admin/UsuarioEditarScreen'
import UsuarioAgregarScreen from './views/Admin/UsuarioAgregarScreen'
import LibroScreen from './views/Admin/LibroScreen.jsx'

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '/admin',
                element: <Navigate to="/admin/dashboard" />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'usuarios',
                element: <UsuarioScreen />
            },
            {
                path: 'usuarios/add',
                element: <UsuarioAgregarScreen />
            },
            {
                path: 'usuarios/edit/:id',
                element: <UsuarioEditarScreen />
            },
            {
                path: 'libros',
                element: <LibroScreen />
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
        ]
    }
])

export default router