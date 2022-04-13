import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const Experts = () => {

    const experts =[
        {id:1, name:'smith', img: expert1 },
        {id:2, name:'Kelan smith', img: expert2 },
        {id:3, name:'jon', img: expert3 },
        {id:4, name:'smith jon', img: expert4 },
        {id:5, name:'smith kan', img: expert5 },
        {id:6, name:'Angle', img: expert6 }
    ]
    return (
        <div id='expert' className='container'>
            <h2 className='text-primary text-center m-5'>  Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert=> <Expert key={expert.id} expert={expert} ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;