import React, { useState } from 'react'
import EmailInputField from '../Input-Fields/Email-input'
import {useForm} from 'react-hook-form'
import PasswordInputField from '../Input-Fields/Password-input';
import "../SignIn/SignIn.css"
import { Link, useNavigate } from 'react-router-dom';
import { Login, getUsersByEmail } from '../queries/gql-queries';
import { useLazyQuery, useMutation } from '@apollo/client';
import { JwtPayload } from 'jsonwebtoken';
import { jwtDecode } from "jwt-decode";
const SignIn = () => {
  const {register,handleSubmit,reset,formState: {errors}} = useForm({defaultValues: {email:"",password: ""},mode: "onTouched"});
  const[idToken,setIdToken]=useState<any>("");
  const navigate=useNavigate()
  const [UserLogin]=useMutation(Login,{
    onCompleted:(data)=>{
      setIdToken(data?.SignIn?.idToken);
      localStorage.setItem('idToken',data?.SignIn?.idToken)
      localStorage.setItem('accessToken',data?.SignIn?.accessToken)
      const decodedToken = jwtDecode(data?.SignIn?.idToken) as { [key: string]: string };
      const hasuraClaims = decodedToken['https://hasura.io/jwt/claims'];
      const hasuraClaimsObject = JSON.parse(hasuraClaims);
      const hasuraUserId = hasuraClaimsObject['x-hasura-user-id'];
      localStorage.setItem('userId',hasuraUserId);
      console.log("hasura",hasuraUserId,decodedToken,hasuraClaimsObject)
    },
    onError:(error:any)=>{
      console.log("error",error)
    }
  })
 const [getuserbyemail]=useLazyQuery(getUsersByEmail,{
  onCompleted:(data:any)=>{
    console.log("dataemail",data)
  }
 })
const SubmitData=async(data:any)=>{
  console.log("data__",data)
try{
await UserLogin({
  variables:{
    email:data?.email,
    password:data?.password
  }
})
await getuserbyemail({
  
})

navigate('/dashboard')
reset({email: "",password: ""})
}
catch(error:any){
throw new Error("Email not found please register")
}

}
  return (
    <div className='form-signin'>
    <form onSubmit={handleSubmit(SubmitData)} autoComplete="off">
      <div className='email'>
        Email
   <EmailInputField disabled={false} errors={errors} register={register}/>
   </div>
   <div className='password'>
    Password
   <PasswordInputField disabled={false} errors={errors} register={register}/>
   </div>
   <div className='button-submit'>
   <button type='submit' className='submit'>Submit</button>
   </div>
   <div className='account'>
    Already have an account?<span className='signup-underline'><Link to='/register'>Signup</Link></span>
   </div>
   </form>
    </div>
  )
}

export default SignIn
