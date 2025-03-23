import React from 'react'
import { Link } from 'react-router'

export default function Login() {
  return (
    <div className='flex-center h-screen'>
      <div className='card flex flex-col gap-2'>
        <h1>Login</h1>
        <div className='flex flex-col gap-2'>
          <input type="email" className='input-primary' placeholder='enter email' />
          <input type="password" className='input-primary' placeholder='enter password' />
        </div>
        <Link to="/register"><b className='underline'>register</b></Link>
      </div>
    </div>
  )
}
