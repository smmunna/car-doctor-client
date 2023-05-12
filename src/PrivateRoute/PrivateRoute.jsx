import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {users,loading}=useContext(AuthContext)
    let location = useLocation();

    if(loading){
        return <>Loading...</>
    }
    if(users){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    
}

export default PrivateRoute;
