import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {users,loading}=useContext(AuthContext)
    if(loading){
        return <>Loading...</>
    }
    if(users){
        return children
    }
    return <Navigate to="/login" replace={true}></Navigate>
    
}

export default PrivateRoute;
