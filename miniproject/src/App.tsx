import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate,
  useNavigate
} from "react-router-dom";
import { navigationPropertiesTypes, useNavigation } from './routes/Navigation';
import PublicRoute from './routes/PublicRoute';
import AuthLayout from './AuthLayout/AuthLayout';
import { gql, useLazyQuery } from '@apollo/client';
import PrivateRoute from './routes/PrivateRoute';
import DashboardLayout from './Dashboard/DashboardLayout';
function App() {
  const {navigation}=useNavigation();
  
  
  
  console.log('env+++++++++++++++++',process.env.REACT_APP_HASURA_ENDPOINT)
  return (
    <>
    
    <Routes>
    <Route path="/" element={<Navigate to='/login'/>}/>
    <Route path="*" element={<Navigate to='/dashboard'/>}/>
  {
      navigation?.public?.map((route:navigationPropertiesTypes)=>(
        <Route 
        path={route.path}
        key={route.path}
        element={
          <PublicRoute>
            <AuthLayout component={route.component}/>
          </PublicRoute>
        }
        />
      ))  
  }
   {
        navigation?.private?.map((route: navigationPropertiesTypes)=>(
          <Route
           path={route.path}
           key={route.path}
           element={
            <PrivateRoute>
              <DashboardLayout component={route.component}/>
            </PrivateRoute>
           }
          />
        ))
      }
    </Routes>
    </>
  );
}

export default App;
