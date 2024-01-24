import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <header>
        <img className ="Logo" width="50" height="50" src="https://img.icons8.com/ios-filled/50/medical-doctor.png"
            alt="medical-doctor" />
        <nav>
            <div className ="navItem">
                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/home.png" alt="home" />
                <p><NavLink className = "LinkDefault" to ="/">Home</NavLink></p>
            </div>
            <div className ="navItem">
                <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/artificial-intelligence.png"
                    alt="artificial-intelligence" />
                <p> <NavLink className = "LinkDefault" to="/prediction">
                        Prediction
                    </NavLink></p>
            </div>
            <div className ="navItem">
                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/48/gallery.png"
                    alt="gallery" />
                <p><NavLink className = "LinkDefault" to = '/gallery'>Gallery</NavLink></p>
            </div>
            <div className ="navItem">
                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/comments--v1.png"
                    alt="comments--v1" />
                <p><NavLink className = "LinkDefault" to="/reviews">Reviews</NavLink></p>
            </div>
            <div className ="navItem">
                <img width="24" height="24" src="https://img.icons8.com/material/24/about--v1.png" alt="about--v1" />
                <p><NavLink className = "LinkDefault" to="/about">
                        About
                    </NavLink></p>
            </div>
        </nav>
        <div className ='Auth'>
            <div className ="Register AuthItem">

                <NavLink className = "LinkDefault SignUpLink" to='/registration'><p>Register</p></NavLink>
            </div>
            <div className ="SignIn AuthItem">

            <NavLink className = "LinkDefault" to='/signin'><p>Sign In</p> </NavLink>
            </div>
        </div>
    </header>
    </div>
  )
}

export default NavBar
