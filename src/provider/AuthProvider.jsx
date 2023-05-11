import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[users,setUsers]=useState(null)
    const[loading,setLoading]=useState(true)

    const signUpUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutAll = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUsers(currentUser)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo = {
        signUpUser,
        users,
        signInUser,
        logOutAll,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
}

export default AuthProvider;
