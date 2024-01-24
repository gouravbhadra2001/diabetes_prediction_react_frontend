import React from 'react'
import '../styles/signin.css'
const Login = () => {
  return (
    <div className='signInMain'>
<div className="container">
        <form className="registration-form">
            <h2>Sign In</h2>
          
            <input type="email" id="email" name="email" placeholder='Email' required/>

            <input type="password" id="password" name="password" placeholder='Password' required/>

            <button type="submit">Log In</button>
        </form>
    </div>
  </div>
  )
}

export default Login
