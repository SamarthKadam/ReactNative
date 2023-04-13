import { StyleSheet, Text, View } from 'react-native';
import { useContext, useEffect,useState} from 'react';
import axios from 'axios';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {

  const[fetchedmessage,setFetchedmessage]=useState('');

  const authctx=useContext(AuthContext);
  const token=authctx.token;

  useEffect(()=>{
     axios.get('https://nativeapp-79fb7-default-rtdb.firebaseio.com/message.json?auth='+token).then((res)=>{
      setFetchedmessage(res.data);
     })
  },[])




  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedmessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});