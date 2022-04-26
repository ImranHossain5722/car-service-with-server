import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();

    const [service, setService] = useState({});
    useEffect(()=>{
        const uri =`http://localhost:5000/service/${serviceId}`
        fetch(uri)
        .then (res => res.json())
        .then(data => setService(data))

    },[])
    
    return (
        <div>
            <h1>welcome service detail {service.name}</h1>

            <div>
                <Link to="/checkout">
                <button className='btn btn-primary'>Proceed CheckOut</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;