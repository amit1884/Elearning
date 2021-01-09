import React from 'react'
import logo from '../assets/images/logo.png'
function Navbar() {
    return (
        <div className="navbar_container">
            <div className="logo">
                <img src ={logo} alt=""/>
            </div>
            <div className="left_items">
                <ul>
                    <li>For Students</li>
                    <li>For Business</li>
                </ul>
            </div>
            <div className="right_items">
                <ul>
                    <li>Log In</li>
                    <li style={{background:'#000',color:'#fff',borderRadius:'5px'}}>Get Started</li>
                    <li style={{overflow:'hidden'}}><i style={{overflow:'hidden'}} className="fa fa-search"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
