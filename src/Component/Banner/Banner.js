import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div>
                <h1 className='banner-title'>Find a doctor near you!!</h1>
                <input type="text" placeholder='Search here' />
            </div>

        </div>
    );
};

export default Banner;