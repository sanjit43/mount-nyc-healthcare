import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceID } = useParams()
    const [detail, setDetail] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const exactIteam = data.filter(td => td.id === serviceID)
                setDetail(exactIteam)
            })
    }, [])
    return (
        <div className='details-container'>
            <div>
                <h2>{detail[0]?.name}</h2>
                <p>{detail[0]?.description}</p>
                <img className='detail-image' src={detail[0]?.image} alt="" />
                <br />
                <input className='btn-regular' type="button" value="Place Your Order" />
            </div>
        </div>
    );
};

export default ServiceDetails;