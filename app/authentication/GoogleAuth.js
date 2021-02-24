import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import React from 'react';
import { Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

GoogleSignin.configure({
  webClientId: '63481503979-pjlgf9rq12q5h60ge5ambij8mdl3bhii.apps.googleusercontent.com',
});

// async function onGoogleButtonPress() {
//     // Get the users ID token
//     const { idToken } = await GoogleSignin.signIn();
  
//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
//   }
  
googleLogin = async() => {
    try{
        // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
    }catch(error){
        console.log({error});
    }
}

function GoogleSignIn(props) {
    return (
        <AntDesign name={'google'} size={40} color={'#4285f4'} onPress={() => googleLogin(props.navigation.navigate('Home'))}/>
    );
  }

export default GoogleSignIn;