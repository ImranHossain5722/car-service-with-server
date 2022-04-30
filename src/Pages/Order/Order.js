import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth)
    const [orders ,setOrders] =useState([])
    const email = user.email
    const url =`http://localhost:5000/order?email=${email}`
  
     
    useEffect(()=>{

        fetch(url)
        .then (res => res.json())
        .then(data => setOrders(data))


     },[])
    return (

        <div>
            <h1>your Orders: {orders.length}</h1>
        </div>
    );
};

export default Order;