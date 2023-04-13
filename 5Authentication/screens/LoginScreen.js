import AuthContent from '../components/Auth/AuthContent'
import { useContext, useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert, useColorScheme } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {

  const[isAuthenticating,setIsAuthenticating]=useState(false);
  const authCtx=useContext(AuthContext);

 async function loginHandler({email,password})
  {
    setIsAuthenticating(true);
    try{
  const token= await login(email,password);
  authCtx.authenticate(token);
    }
    catch(err)
    {
      Alert.alert('Authentication failed!','Could not log you in , Please check your credentials')
      setIsAuthenticating(false);
    }

  }

  if(isAuthenticating)
  {
    return <LoadingOverlay message='Logging you in...'></LoadingOverlay>
  }



  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;