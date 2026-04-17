import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router';
const ProFirstLogo = () => {
    return (
        <div className='flex items-center'>
            <img className='mb-6' src={logo} alt="" />
            <Link to={'/'} className='text-3xl -ml-2 font-extrabold'>Profast</Link>
        </div>
    );
};

export default ProFirstLogo;