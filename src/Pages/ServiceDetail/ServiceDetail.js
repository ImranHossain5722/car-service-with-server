import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useServiceDetail from '../../hook/UseServiceDetail';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div>
            <h1 >Welcome Service Details: <span className='font-weight-bold srevice-name'> {service.name}</span> </h1>

            <div>
                <Link to= {`/checkout/${serviceId}`}>
                <button className='btn btn-primary'>Proceed CheckOut</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;