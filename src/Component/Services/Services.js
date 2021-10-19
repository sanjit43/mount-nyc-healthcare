import React, { useEffect, useState } from 'react';
import OurExperts from '../OurExperts/OurExperts';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services-container'>
            <h2 className='service-title'>Our Services That You Can Consider</h2>
            <div className='services'>
                {
                    services.slice(0, 6).map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <h2 className='service-title'>Our Expert Doctor</h2>
            <div className='services'>
                {
                    services.slice(6, 12).map(service => <OurExperts key={service.id} service={service}></OurExperts>)
                }
            </div>

        </div>
    );
};

export default Services;