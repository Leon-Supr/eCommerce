import React from 'react'
import { createContext } from 'react'

const AuthContext = createContext();

function AuthProvider({ children }) {
    const data = 1;
    
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
