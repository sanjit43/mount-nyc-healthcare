import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './Register.css';

const Register = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange, error } = useAuth()
    return (
        <div className='register-container'>
            <h2>Open your account</h2>
            <form onSubmit={handleRegistration}>
                <label htmlFor="email">Email:</label>
                <input onBlur={handleEmailChange} type="text" name="email" required />
                <br />
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordChange} type="password" name="password" required />
                <br />
                <input type="submit" value="Register" />
                <br />
                <p className='error'>{error}</p>
            </form>
            <p>Already have an account? please <Link to='/login'>LogIn</Link></p>
        </div>
    );
};

export default Register;