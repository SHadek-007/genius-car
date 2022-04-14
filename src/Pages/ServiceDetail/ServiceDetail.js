import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceID} = useParams();
    return (
        <div className='text-center'>
            <h2>Wellcome to Detail {serviceID}</h2>
            <Link to={'/checkout'}><button className='btn btn-primary'>Proceed Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;