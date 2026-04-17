import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
import ProFirstLogo from '../pages/shared/ProFirstLogo/ProFirstLogo';
const AuthLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen">

        <div className=" container mx-auto p-14">
            <div className="">
                    <ProFirstLogo/>
            </div>
            <div className="flex  justify-between flex-col lg:flex-row-reverse items-center">
                <div className="flex-1">
                    <img
                    src={authImg}
                    className="rounded-lg shadow-2xl w-full"
                    />
                </div>
                <div className='flex-1'>
                    <Outlet/>
                </div>
            </div>
        </div>
                    </div>
    );
};

export default AuthLayout;