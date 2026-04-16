import React from 'react';
import logo from '../../../assets/logo.png'
const ProFirstLogo = () => {
    return (
        <div className='flex items-center'>
            <img className='mb-6' src={logo} alt="" />
            <h1 className='text-3xl -ml-2 font-extrabold'>Profast</h1>
        </div>
    );
};

export default ProFirstLogo;