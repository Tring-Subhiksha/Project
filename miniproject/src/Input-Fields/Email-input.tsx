import { CustomTextField, InputPropsForAddAffiliates, emailRegexPattern, handleonKeyDownForEmailId } from '../helper/helper';
import '../features/module.css';
interface EmailProps {
    errors: any,
    register: any,
    disabled: boolean
}
const EmailTextField = CustomTextField();
const PasswordTextField=CustomTextField();
const EmailInputField = ({errors,register,disabled}: EmailProps) => {
  return (
    <>
    <EmailTextField 
    // variant={"outlined"}
    name={'email'}
    // fullWidth
    {...register("email",{
      required: "Email is required!",
      pattern:{
          value: emailRegexPattern,
          message: "Enter valid email"
        }
    })}
    placeholder={"Enter Email"}
    InputProps={{
        style: InputPropsForAddAffiliates,
      }}
      onKeyDown={(e:any) => handleonKeyDownForEmailId(e)}
      error={Boolean(errors?.email?.message)}
      disabled={disabled}
      className='email-input'
    />
    <span className='errorMsgStyle'>{errors?.email?.message}</span>
    </>
  )
}

export default EmailInputField