import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { config } from './config/config';
import {setContext} from '@apollo/client/link/context'

import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, from, gql,useLazyQuery,useQuery} from '@apollo/client'
import { error } from 'console';
// import AppProvider from "./provider/AppProvider";

const httpLink = new HttpLink({ uri:config.backend_url });
  const adminSecret = config.adminSecret
  console.log("adminSecret",adminSecret,config.backend_url );
  
// const authLink = setContext(async (_, { headers }) => {
//   const idToken = localStorage.getItem('idToken') || '';
//   console.log("id",idToken)
//   return {
//     headers: {
//       ...headers,
//       // 'x-hasura-admin-secret': adminSecret,
//       Authorization: idToken ? `Bearer ${idToken}` : '',
//       'x-hasura-user-id':localStorage.getItem('userId')
//     }
//   };
// });
const authMiddleware = new ApolloLink((operation, forward) => {
  console.log("authMiddleware");
  
  const idToken = localStorage.getItem('idToken') || '';
  if(!idToken){
    return forward(operation);
  }
  const headers = {
    ...operation.getContext().headers,
    // 'x-hasura-admin-secret': adminSecret,
    Authorization: idToken ? `Bearer ${idToken}` : '',
    'x-hasura-user-id': localStorage.getItem('userId')
  };
  operation.setContext({ headers });
  return forward(operation);
});
// const logout=()=>{
//   localStorage.removeItem("idToken")
//   localStorage.removeItem("userId")
//   localStorage.removeItem("accessToken")
// }
  const client = new ApolloClient({
    link: ApolloLink.from([authMiddleware, httpLink]),
    cache: new InMemoryCache(
      {
      addTypename: false
    }
    ),
  });
 
  
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
root.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
  {/* <AppProvider> */}
    <App />
  {/* </AppProvider> */}
  </ApolloProvider> 
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
