import React from 'react'
import { Navigate } from 'react-router-dom';


interface PrivateRouteProps{
    children: any
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
  const isAuthenticated = localStorage.getItem(Object.keys(localStorage).find((key) => key.includes('idToken')) as string);
  if(isAuthenticated){
    return children
  }else{
    return <Navigate to='/login' replace/>
  }
}

export default PrivateRoute;