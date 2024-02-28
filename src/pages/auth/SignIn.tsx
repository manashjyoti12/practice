import { useState } from 'react'
import { supabase } from './superbaseClient'



const SignIn = () => {

    const [loading,setLoading] =useState(false)

    const signUp = async () => {
        setLoading(true)
            await supabase.auth.signUp({
                email: "test3@cubene.com",
                password: 'test1234456'
            })
        
        console.log("user created")
        setLoading(false)
    }

    const signIn = async () => {
        setLoading(true)
       const {data} = await supabase.auth.signInWithPassword({
            email: "pikanol725@cubene.com",
           password: 'manash123guyg456',
           
            
       })
        
        
        console.log("user", data.user?.email)
        window.location.href="/"

        // const { data: { user }, } = await supabase.auth.getUser()
        // console.log("user: ", user)
          setLoading(false)
    }

    return (
        <>
            <div className='mt-20 justify-center flex gap-6'>
                <button disabled={loading} onClick={()=>signUp()} className='bg-red-200 p-2 ' >SignUp</button>
                <button disabled={loading} onClick={()=>signIn()} className='bg-green-300 p-2'>SignIn</button>
            </div>
        </>
    )
}

export default SignIn