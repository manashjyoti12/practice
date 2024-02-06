import  { useState } from 'react'
import { supabase } from './superbaseClient'
import { FaGoogle } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import {  useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [email,setEmail] =useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate()
    
    const signUp =async () => {
        setLoading(true)

        await supabase.auth.signUp({
            email: email,
            password: password,
        })

        navigate('/memberCart')

        console.log("user created")
        setLoading(false)

        // window.location.href="/memberCart"
     
    }

return (
    <>
        <div className='h-screen flex bg-[#B0D8DA] w-full'>
            <div className='w-1/3 px-10 mt-40'>
                <h1 className='text-sm sm::text-xl xl:text-3xl text-white tracking-wider leading-10'>Find 3d objects, Mockups and illustrations here</h1>
            </div>

            <div className='w-2/3 bg-white rounded-tl-[2.5rem] rounded-bl-[2.5rem] p-6 pt-40  text-center '>
                <h1 className='text-3xl font-bold tracking-wide text-gray-700'>Create Account</h1>
                <form onSubmit={signUp} className='mt-20 '>
                    <div >
                        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Id' className='w-1/2 mx-auto focus:outline-none border-b-2' required/>
                    </div>
                    <div className='my-10'>
                        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='w-1/2 mx-auto focus:outline-none border-b-2' required/>
                    </div>

                    <button className='bg-[#B0D8DA] py-3 w-1/2 rounded-xl text-white font-semibold mt-6' type='submit' disabled={loading}>Create Account</button>
                </form>

                <div className='flex justify-center items-center gap-2  mt-10'>
                    <hr className='h-1  w-20 my-8 bg-gray-200 border-0' />
                    <h1 className='text-gray-400 px-2'>Or Sign in with</h1>
                    <hr className='h-1  w-20 my-8 bg-gray-200 border-0' />
                </div>

                <div className='flex gap-6 justify-center mt-5'>
                    <div className='border p-2 px-6 rounded-xl flex items-center gap-2 font-semibold cursor-pointer text-gray-600'>
                        <FaGoogle />  Google
                    </div>
                    <div className='border p-2 px-6 rounded-xl flex items-center gap-2 font-semibold cursor-pointer text-gray-600'>
                        <FaApple />  Apple ID
                    </div>
                    <div className='border p-2 px-6 rounded-xl flex items-center gap-2 font-semibold cursor-pointer text-gray-600'>
                    <FaGithub />    Github
                    </div>
                </div>

                <h1 className='mt-8 text-gray-400'>Have an account? <span className='font-bold cursor-pointer text-[#ABDADC]'>Sign in</span></h1>
            </div>
        </div>
    </>
    )
}

export default SignUp

