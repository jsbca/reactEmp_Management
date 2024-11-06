import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHander = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
            setEmail("")
            setPassword("")
            
    }

  return (
    
    <div className='flex h-screen w-screen items-center justify-center'> 
   
  <div className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-5 m-3 rounded-full">
    admin@me.com <br />
    pass: -123
  </div>


        <div className='rounded-xl border-4 border-emerald-500 p-20'>
           <form onSubmit={(e)=>{
                submitHander(e)
           }}
            className='flex flex-col items-center justfy-center'>
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            } }
            required 
            className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
            />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required 
            className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-5 m-3 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password' />
            <button className='mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-2 px-5 m-3 rounded-full placeholder:text-white'>Login</button>
            </form> 
        </div>
        <div className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-5 m-3 rounded-full">
    Aarav: e@e.com <br />
    pass: -123
  </div>
    </div>
  )
}

export default Login