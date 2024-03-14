import React from 'react'

interface PublicRouteProps{
    children: any
}
const PublicRoute: React.FC<PublicRouteProps> = ({children}) => {
  localStorage.clear();
  return children;
}

export default PublicRoute;