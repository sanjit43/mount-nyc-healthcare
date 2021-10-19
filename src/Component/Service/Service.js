import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, description, image } = props.service
    return (
        <div className='service-container'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`service/${id}`}><button className='btn-regular'>Book Your Serial</button></Link>
        </div>
    );
};

export default Service;