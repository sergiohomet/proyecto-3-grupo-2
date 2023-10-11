import jwtDecode from 'jwt-decode'
import React from 'react'
import { Navigate, Outlet } from 'react-router'

const useAuth = () => {
    const token = localStorage.getItem('token')
    const decode = jwtDecode(token);
}

const PrivateRoutes = () => {
    // useAuth()
    const isAuth = localStorage.getItem('token');
    return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes