import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {


    const {id,name,img, price,description} = service
    const navigate = useNavigate()
    const navigateToServiceDetail =(id)=>{
        navigate(`/service/${id}`)

    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p> <small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary mb-5 '>Book {name}</button>
        </div>
    );
};

export default Service;