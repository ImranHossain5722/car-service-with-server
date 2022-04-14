import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    
    return (
        <div>
            <h1>welcome service detail {serviceId}</h1>
            <div>
                <Link to="/checkout">
                <button className='btn btn-primary'>Proceed CheckOut</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;