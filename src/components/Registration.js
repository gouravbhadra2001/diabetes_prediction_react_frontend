import React from 'react'
import '../styles/signin.css'



const Registration = () => {
  return (<div className='signInMain'>
<div className="container">
        <form className="registration-form">
            <h2>Sign Up</h2>
            <input type="text" id="name" name="name" placeholder='Name' required/>

            <input type="email" id="email" name="email" placeholder='Email' required/>

            <input type="password" id="password" name="password" placeholder='Password' required/>

            <select id="profession" name="profession" required>
                <option value="" disabled selected>Select your profession</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="analyst">Analyst</option>
                <option value="other">Other</option>
            </select>

            
            <textarea id="purpose" name="purpose" rows="4" placeholder='Purpose of Using Prediction System' required/>
           
            <button type="submit">Sign Up</button>
        </form>
    </div>
  </div>
    
  )
}

export default Registration
