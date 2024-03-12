import React from 'react'
//import './login.css'
import user from './user.png'
import lock from './lock.png'
const login = () => {
    return(
        <div className='container'>
        <div className="header">
            <div className="text">Log In</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user} alt="" />
                <input type="Username" />
            </div>
            <div className="input">
                <img src={lock} alt="" />
                <input type="Password" />
            </div>
        </div>

        </div>
    )
}
export default login