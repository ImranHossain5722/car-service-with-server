import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hook/UseServiceDetail';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





   const Checkout = () => {

   const {serviceId} = useParams();

   const [service] = useServiceDetail(serviceId); 
   const [user] = useAuthState(auth)

   const handelPlaceOrder = (event) => {

        event.preventDefault();
        
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone : event.target.phone.value

        }

        axios.post('http://localhost:5000/order', order)
        .then(response => {
            const {data} = response;
            if (data.insertedId){
                toast('Your Order is booked')

                event.target.reset()
            }

        })

   }

    return (
        <div className=' w-50 mx-auto'>
            <h2>please Order: {service.name} </h2>

            <form onSubmit={handelPlaceOrder}>
                <input className='w-100 mb-2'  type="text" value={user.displayName} name="name" placeholder='Name' required  readOnly/>
                <br/>
                <input className='w-100 mb-2' type="email" value={user.email} name="name" placeholder='Email' required readOnly />
                <br/>
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='Service' required  readOnly />
                <br/>
                <input className='w-100 mb-2' type="text" name="address" placeholder='Address' required  autoComplete='off' />
                <br/>
                <input className='w-100 mb-2' type="text" name="phone" placeholder='Phone' required />

                <input className='btn btn-primary ' type="submit" value=" Place Order" />
               
            </form>


        </div>
    );
};

export default Checkout;