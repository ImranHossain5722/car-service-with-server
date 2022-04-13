import React from 'react';
import sleeping from '../../../images/car-rep.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center'> Noting to Found</h1>
            <h5 className='text-primary text-center'> Mechanic is sleeping</h5>
            <img src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;