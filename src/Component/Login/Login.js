import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './Login.css'

const Login = () => {
    const { googleSignIn, login, githubSignIn } = useAuth();
    return (
        <div className='login-container'>
            <div>
                <h2>Please Login</h2>
                <input type="text" placeholder='Enter your email' />
                <br />
                <input type="password" name="Password" id="" placeholder='Password' />
                <br />
                <input onClick={login} className='login-btn' type="button" value="Login" />
                <p>Don't have acount? Please <Link to='/register'>Register</Link></p>
                <input onClick={googleSignIn} type="button" value="Login with Google" />
                <input onClick={githubSignIn} type="button" value="Login with GitHub" />
            </div>
        </div>
    );
};

export default Login;