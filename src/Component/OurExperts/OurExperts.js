import React from 'react';
import './OurExperts.css'
const OurExperts = (props) => {
    const { name, image } = props.service
    return (
        <div className='expert'>
            <div>
                <img src={image} alt="" />
                <h2>{name}</h2>
            </div>

        </div>
    );
};

export default OurExperts;