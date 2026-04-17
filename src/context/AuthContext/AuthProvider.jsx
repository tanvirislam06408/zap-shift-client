import React from 'react';
import { AuthContext } from './AuthContext';


const AuthProvider = ({ children }) => {
    const data = {
        name: 'mim'
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;