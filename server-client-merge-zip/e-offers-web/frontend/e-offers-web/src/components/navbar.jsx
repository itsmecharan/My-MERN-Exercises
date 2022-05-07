import React from 'react'
import {
    Link
}  from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="mynavbar">
            <header className="header">
               <div className="heading">e-Offers Web</div> 
                    <Link to="/" className="head-content">Home</Link>
                   <Link to="/addoffers" className="head-content">Add Offer</Link>
                   <Link to="/contactadmin" className="head-content">Contact Admin</Link>
                   <Link to="/logout" className="head-content">Logout</Link>
                   <Link to="/register" className="head-content">Sign Up</Link>
                   <Link to="/login" className="head-content">Login</Link>
               
            </header>
            
        </div>
    )
}
