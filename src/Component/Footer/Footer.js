import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <input type="text" name="" id="" placeholder='Enter your email' />
                <input className='btn-primary' type="button" value="Subscribe" />
            </div>
            <div>
                <p className='footer-text'>Fort Mount NYC Healthcare
                    <br />
                    611 Sherman Avenue East
                    <br />
                    Fort Atkinson, WI 53538
                    <br />
                    Phone: (920) 568-5000
                    <br />
                    (800) 421-4677</p>
            </div>

        </div>
    );
};

export default Footer;