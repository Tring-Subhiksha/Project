import { CustomTextField, InputPropsForAddAffiliates, emailRegexPattern, handleonKeyDownForEmailId } from '../helper/helper';
import '../features/module.css';
interface UsernameProps {
    errors: any,
    register: any,
    disabled: boolean
}
const UsernameTextField = CustomTextField();
const PasswordTextField=CustomTextField();
const UsernameInputField = ({errors,register,disabled}: UsernameProps) => {
  return (
    <>
    <UsernameTextField 
    // variant={"outlined"}
    name={'username'}
    // fullWidth
    {...register("username",{
      required: "Username is required!",
    //   pattern:{
    //       value: emailRegexPattern,
    //       message: "Enter valid email"
    //     }
    })}
    placeholder={"Enter Username"}
    InputProps={{
        style: InputPropsForAddAffiliates,
      }}
    //   onKeyDown={(e:any) => handleonKeyDownForEmailId(e)}
      error={Boolean(errors?.username?.message)}
      disabled={disabled}
      className='email-input'
    />
    <span className='errorMsgStyle'>{errors?.username?.message}</span>
    </>
  )
}

export default UsernameInputField;
