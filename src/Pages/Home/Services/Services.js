import React, {useEffect, useState} from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    
    const [services, setServices]= useState ([])
    
    useEffect(()=>{
            fetch('http://localhost:5000/service')
            .then(res=>res.json())
            .then(data=> setServices(data))


    },[])
    return (
        <div >
            <h2  className='service-title text-primary m-5' > Our services:{services.length}</h2>
            <div id='services' className="services-container">
            {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;