import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import { useState ,useContext} from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {

  const[isAuthenticating,setIsAuthenticating]=useState(false);
  const authCtx=useContext(AuthContext);


 async function signupHandler({email,password})
  {
    setIsAuthenticating(true);
    try{
   const token= await createUser(email,password);
   authCtx.authenticate(token)
    }
    catch(err)
    {
      Alert.alert('Authentication failed!','Could not create user , Please check your credentials')
    }
   setIsAuthenticating(false);
  }

  if(isAuthenticating)
  {
    return <LoadingOverlay message='Creating user...'></LoadingOverlay>
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;