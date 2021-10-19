import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import logo from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='nav-container'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                {user.email && <p className='user-title'>Welcome: {user.email}</p>}
            </div>
            <div className='sign-in'>
                {user.email ? <input onClick={logOut} type="button" value="LogOut" /> : <Link to='/signin'>Login</Link>}
                <Link to='/register'><input className='sign-out' type="button" value="Register" /></Link>

            </div>
        </div>
    );
};

export default Navbar;