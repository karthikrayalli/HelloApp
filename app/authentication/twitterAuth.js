import React ,{Component}from 'react';
import { Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { NativeModules } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { RNTwitterSignIn } = NativeModules;

RNTwitterSignIn.init('IMA6r3Y9HreyUlalMoTLohwcO', 'nmkrfp1tZ8ml6IDMbaUmop9pWL0P41JGOLahmbEQXx04ixSLFB');
  //console.log('Twitter SDK initialized'),
//);

onTwitterButtonPress = async() => {
    try{
       // Perform the login request
  const { authToken, authTokenSecret } = await RNTwitterSignIn.logIn();

  // Create a Twitter credential with the tokens
  const twitterCredential = auth.TwitterAuthProvider.credential(authToken, authTokenSecret);
//console.log()
// if(twitterCredential.token !== ''){
//   props.navigation.navigate('Home');
// }
  // Sign-in the user with the credential
  return auth().signInWithCredential(twitterCredential);
    }catch(error){
        console.log({error});
    }
}

export default class TwitterSignIn extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <AntDesign name={'twitter'} size={40} color={'#1DA1F2'} onPress={() => onTwitterButtonPress(this.props.navigation.navigate('Home'))} />
    );
  }
}
