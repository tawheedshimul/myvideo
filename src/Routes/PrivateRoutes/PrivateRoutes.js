import React, { useContext } from 'react';
import { Authcontext } from '../../Context/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;