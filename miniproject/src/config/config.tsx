const BACKEND_URL_LOCAL : string | undefined = process.env.REACT_APP_HASURA_ENDPOINT;
const ADMIN_SECRET_LOCAL : string | undefined = process.env.REACT_APP_HASURA_ADMIN_SECRET;
console.log("backend url",BACKEND_URL_LOCAL);
console.log('url---------',process.env.REACT_APP_HASURA_ENDPOINT)
export const config = {
    backend_url: String(BACKEND_URL_LOCAL),
    adminSecret:String(ADMIN_SECRET_LOCAL)
    // amplifyConfig: {
    //   aws_project_region: REGION,
    //   aws_cognito_identity_pool_id: IDENTIFY_POOL_ID,
    //   aws_cognito_region: REGION,
    //   aws_user_pools_id: USER_POOL_ID,
    //   aws_user_pools_web_client_id: CLIENT_ID,
    //   federationTarget: 'COGNITO_USER_POOLS', 
    //   oauth: {
    //     domain: COGNITO_URL,
    //     redirectSignIn: signinuri,
    //     redirectSignOut: signouturi,
    //     responseType: "code",
    //   },
    // },
  };
  