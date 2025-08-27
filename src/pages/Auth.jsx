import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Auth = ({ mode }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const {login, isLoggedIn} = useAuth()

    const navigate = useNavigate()

    const isLogin = mode === "login"

    const handleSubmit = async(e) => {
        e.preventDefault()

        setLoading(true)
        const endPoint = isLogin ? "http://localhost:3000/api/login"
         : "http://localhost:3000/api/register"

        try{
            const response = await axios.post(endPoint, {email, password})
            const data = response.data
            //localStorage.setItem("token", data.token)
            login(data.token, data.email || data.user.email)
            alert(`${isLogin ? "Login" : "Register"} successful!`)
            navigate("/")
        }catch(error){
            if(error.response){
                alert(error.response.data.message || "something went wrong")
            }else{
                alert("server not connecting")
            }
        }finally{
            setLoading(false)
        }

    }
        
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    {mode === "login" && "Login"}
                    {mode === "register" && "Register"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        {loading ? "Please wait.." : isLogin ? "Login" : "Register"}
            
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Auth