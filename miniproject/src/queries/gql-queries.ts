import { gql } from "@apollo/client";

export const Login= gql `
mutation SignIn($email:String!,$password:String!){
    SignIn(input: {email:$email, password: $password}) {
     accessToken
    idToken
    }
  }
  `;
  export const getUsersByEmail=gql`
  query getUsersByEmail {
    users {
      u_username
      u_password
      u_email_id
      u_address
      u_cognito_id
      u_date_of_birth
      u_first_name
      u_id
      u_last_name
      u_mobile_number
    }
  }
  `;