import React, { FunctionComponent,FC } from 'react';
import "../AuthLayout/AuthLayout.css";
import { Grid,Typography,Paper } from '@material-ui/core';
import loginimage from "../images/login.jpg";
import aeroplaneimage from "../images/aeroplane.jpg";
type AuthProps={
component:React.FC
}
const AuthLayout :FunctionComponent <AuthProps>=({component:Component}) => {
    let name:any;
    if (window.location.pathname === '/login') {
        name = 'Signin';
      }
      else if(window.location.pathname==='/register'){
        name='Register';
      }
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh',backgroundColor:'aliceblue'}}
    >
         <Grid item xs={10} sm={4} md={4}>
         <img src={loginimage} alt="Your Image" style={{ width: '100%',minHeight: '70vh',boxShadow: '5px 6px 6px rgba(0, 0, 0, 0.1)',borderRadius:'5px' }} />
         </Grid>
      <Grid item xs={12} sm={6} md={4}>
       
        <Paper elevation={3} style={{ padding: '21px',minHeight:'63vh' }}>
          <Typography variant="h5" align="center" gutterBottom style={{fontWeight:'bold',fontFamily: "Glegoo"}}>
          <img src={aeroplaneimage} alt="Your Image" style={{ width: '15%',marginRight:'5px'}} />Hello Travellers, Take only pictures leave only Footprints
            
          </Typography>
          <Typography variant="h6" align="center" style={{fontFamily: "Glegoo",color:"gray"}}>
          Get one step into {name}
          </Typography>
          <Component />
        </Paper>
      </Grid>
    </Grid>
    // <div className='outside-container'>
    //     <div className='image-container'>
    //     <img src={loginimage} alt="Your Image" style={{ width: '100%',minHeight: '70vh' }} />
    //     </div>
    //     <div className='heading-container'>
    //     Hello Travellers, Take only pictures leave only Footprints
            
    //     </div>
    // </div>
  )
}

export default AuthLayout
