import axios from 'axios'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'

export default function Login({setIsActive}) {
    const navigate = useNavigate();
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [login,setLogin]=useState(true)
        const handleLogin= async(e)=>{
            e.preventDefault();
            const res=await axios.post('http://localhost:4000/api/login/login',{username,password})
            if(res.data.token){
                localStorage.setItem("token",res.data.token)
                setIsActive(true);
                navigate('/')
            }
        }
        const handleSignup = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/login/register', { username, password });
        alert("Signup successful! You can now log in.");
        setLogin(true); 
    };
        const toggleForm=()=>{
            setLogin(!login)
        }
        
    return (
       <div className="min-h-screen flex flex-col items-center justify-center  border border-[#e7ecef] max-w-full ">
            <div className="mx-auto mb-6 p-10 items-center justify-center shadow-xl">
               
            
        
            <h3 className="mb-6 text-center text-xl font-bold text-gray-800 rounded-xl">{login ? "Admin Login" : "Admin Signup"}</h3>
        
            {login?<form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium text-gray-700">Username</label>
                    <input type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 transition outline-none " onChange={(e)=>setUsername(e.target.value)} required />
                </div>
        
                <div className="mb-6">
                    <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" className="w-full rounded-lg border border-gray-300 px-3 py-2 transition outline-none " onChange={(e)=>setPassword(e.target.value)} required="" />
                </div>
        
                <button type="submit" className="w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition duration-300 hover:bg-blue-600 cursor-pointer" >Log In</button>
                <div className='flex gap-2 mt-2'><p>Not a member?</p><button type='button' className='hover:text-blue-500 cursor-pointer ' onClick={toggleForm}>Sign up</button></div>

      
            </form>:<form onSubmit={handleSignup}>
                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium text-gray-700">Username</label>
                    <input type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 transition outline-none " onChange={(e)=>setUsername(e.target.value)} required />
                </div>
        
                <div className="mb-6">
                    <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" className="w-full rounded-lg border border-gray-300 px-3 py-2 transition outline-none " onChange={(e)=>setPassword(e.target.value)} required="" />
                </div>
        
                <button type="submit" className="w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition duration-300 hover:bg-blue-600 cursor-pointer">Sign Up</button>
                <div className='flex gap-2 mt-2'><p>Already a member?</p><button type='button' className='hover:text-blue-500 cursor-pointer ' onClick={toggleForm} >Login</button></div>

      
            </form>}
            </div>
        </div>
    );
};
