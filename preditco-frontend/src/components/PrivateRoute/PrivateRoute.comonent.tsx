//Import Navigate to change url
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children }:any) => {

    useEffect( () => {
        document.cookie.search('')
    })
/* 
  if(user.isLoading && !user.user){
    return <>Loading...</>
  }

    if (!user.user && !user.isLoading ) {
      return <Navigate to="/login" replace />;
    }
   */
    return /* children */<></>;
  };

  export default ProtectedRoute;