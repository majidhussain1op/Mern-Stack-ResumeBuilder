import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState(null)

    const login =(newToken, userEmail) => {
        setToken(newToken)
        setEmail(userEmail)
        localStorage.setItem("token", newToken)
        localStorage.setItem("email", userEmail)
    }

    const logout = () => {
        setToken(null)
        setEmail(null)
        localStorage.removeItem("token")
        localStorage.removeItem("email")
    }

    const isLoggedIn = !!token

    return (
        <AuthContext.Provider value={{token, email, login, logout, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)
