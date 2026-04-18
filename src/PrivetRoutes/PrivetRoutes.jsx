import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../pages/shared/Loading/Loading';
import { Navigate } from 'react-router';

const PrivetRoutes = ({children}) => {
    const {user,loading}=useAuth();
    if(loading){
        return <Loading/>
    }
    if(!user){
        return <Navigate to={'/login'}/>
    }
    return children;
};

export default PrivetRoutes;