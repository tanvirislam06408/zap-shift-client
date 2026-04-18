import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

// google-provider
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    // create user
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn user
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

        // sing out
        const logOut=()=>{
            setLoading(true);
            return signOut(auth);
        }
    const socialLogin=()=>{
        return signInWithPopup(auth,provider);
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log('user in the auth state change',currentUser);
            
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        signInUser,
        logOut,
        socialLogin,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;