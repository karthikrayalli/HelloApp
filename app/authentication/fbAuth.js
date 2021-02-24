import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

export default class FbAuth extends Component {
  state = {userInfo: {}};

  logoutWithFacebook = () => {
    LoginManager.logOut();
    this.setState({userInfo: {}});
  };

  getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, user) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          this.setState({userInfo: user});
          this.props.navigation.navigate('Home');
          console.log('result:', user);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  loginWithFacebook = () => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            this.getInfoFromToken(accessToken);
          });
        }
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  state = {userInfo: {}};

  render() {
    const isLogin = this.state.userInfo.name;
    const buttonText = isLogin ? 'Logout With Facebook' : 'Login From Facebook';
    const onPressButton = isLogin
      ? this.logoutWithFacebook
      : this.loginWithFacebook;
    return (
      <View>
        
        <MaterialIcons
          onPress={onPressButton} 
          name={'facebook'} size={45} color={'#4267B2'}/>
         {/* <Text>{buttonText}</Text> */}
        </View>
    );
  }
}
// {this.state.userInfo.name && (
//     <Text style={{fontSize: 16, marginVertical: 16}}>
//       Logged in As {this.state.userInfo.name}
//     </Text>
//   )}