import React from 'react'
import { createContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

function AuthProvider({ children }) {
    // const data = 1
    // token = window.localStorage.token
    const [isAuth, setIsAuth] = useState(false); //Al iniciar la app, haremos que esto nos de acceso o nos indique negarlo
    const [userPayload, setUserPayload] = useState(null); //JWT decodificado

    const login = (token) => {
        window.localStorage.setItem('token', data.token) // Guarda el token en localStorage, aún si se cierra el navegador, permanece
        decoded = jwtDecode(token)
        setIsAuth(true)
        setUserPayload(payload)
    }
    const logout = () => {
        window.localStorage.removeItem('token')
        setIsAuth(false)
        setUserPayload(null)
    }

    //Cuando cargue este componente (la app), verifica que hay un token y tendrás sesión iniciada
    useEffect(() => { 
        const token = localStorage.getItem('token')
        if(token){
            const payload = jwtDecode(token)
            setIsAuth(true)
            setUserPayload(payload)
        }
    }, [])

    const data = {
        isAuth,
        userPayload,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
