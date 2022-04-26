import React from 'react';
import UseSrvices from '../../hook/UseSrvices';

const ManageServices = () => {
const [services, setServices ] = UseSrvices()

const handleDelete = id =>{
    const proceed = window.confirm('Are you sure yo want delete service ?')

    if(proceed){
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {

            method:"DELETE",

        })
        .then(res=> res.json())
        .then (data => {
            console.log(data);
            // remove data from ui
            const remaining = services.filter(service => service._id !== id )  

            setServices(remaining)
        })

    }


}
    return (
        <div className='w-50 mx-auto'>
             <h1>Manage services </h1>
             {
                 services.map(service => <div key={service._id}>  
                    <h5>{service.name} <button onClick={()=>handleDelete(service._id)}>X</button></h5>
                    
                 </div> )
             }
        </div>
    );
};

export default ManageServices;