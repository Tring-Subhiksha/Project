import React from 'react'
import { CustomTextField, InputPropsForAddAffiliates, passwordRegexPattern, handleonKeyDownForEmailId } from '../helper/helper';
import '../features/module.css';
interface PasswordProps {
    errors: any,
    register: any,
    disabled: boolean
}
const PasswordTextField=CustomTextField();
const PasswordInputField = ({errors,register,disabled}: PasswordProps) => {
  return (
    <div>
      <PasswordTextField 
    variant={"outlined"}
    name={'password'}
    fullWidth
    {...register("password",{
      required: "Password is required!",
      pattern:{
          value: passwordRegexPattern,
          message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        }
    })}
    placeholder={"Enter Password"}
    InputProps={{
        style: InputPropsForAddAffiliates,
      }}
      error={Boolean(errors?.password?.message)}
      disabled={disabled}
    />
    <span className='errorMsgStyle'>{errors?.password?.message}</span>
    </div>
  )
}

export default PasswordInputField;
