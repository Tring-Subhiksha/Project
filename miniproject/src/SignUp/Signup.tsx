import React from 'react'
import  "../SignUp/Signup.css";
import EmailInputField from '../Input-Fields/Email-input'
import {useForm} from 'react-hook-form'
import PasswordInputField from '../Input-Fields/Password-input';
import UsernameInputField from '../Input-Fields/Username-input';
// import {useLazyQuery} from 'react-apollo';
const Signup = () => {
    const {register,handleSubmit,reset,formState: {errors}} = useForm({defaultValues: {email:"",password: ""},mode: "onTouched"});
    const SubmitData=(data:any)=>{
    console.log("++++",data)
    reset({email: "",password: ""})
    }
  return (
    <div className='form-signin'>
    <form onSubmit={handleSubmit(SubmitData)} autoComplete="off">
    <div className='password'>
    {/* Username */}
   <UsernameInputField disabled={false} errors={errors} register={register}/>
   </div>
      <div className='email'>
        {/* Email */}
   <EmailInputField disabled={false} errors={errors} register={register}/>
   </div>
   <div className='password'>
    {/* Password */}
   <PasswordInputField disabled={false} errors={errors} register={register}/>
   </div>
   <div className='button-submit'>
   <button type='submit' className='submit'>Submit</button>
   </div>
   </form>
    </div>
  )
}

export default Signup
