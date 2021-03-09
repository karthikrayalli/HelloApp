import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView, Alert,TextInput,Button} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../components/customButton';
import {Input,Password} from '../components/textInput'
import { Linking } from 'react-native'
import FbAuth from '../authentication/fbAuth'
import GoogleSignIn from '../authentication/GoogleAuth'
import TwitterSignIn from '../authentication/twitterAuth'
import { TouchableOpacity } from 'react-native-gesture-handler';
import TopNotch from '../components/statusBar'



//import Zocial from 'react-native-vector-icons/Zocial '
class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
                email:'',
                password:'',
               validity:false,
               errors:'',
               error:''
        };
     
    }
    handleEmailChange = evt => {
        const { email, password} = this.state;
        this.setState({ email: evt });
        if(evt !== '' && password !== ''){
            this.setState({validity:true})
        }else
        this.setState({validity:false})
        //console.log('email',email,password,evt)
      };
    
      handlePasswordChange = evt => {
        const { email, password} = this.state;
        this.setState({ password: evt });
        if(evt !== '' &&  email !== ''){
            this.setState({validity:true})
        }else
        this.setState({validity:false})
      };
    
      validation = () =>{
          const {errors} = this.state;
        // console.log('email',email)}
        const passw = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
        if(this.state.email.includes('@' && '.') && (this.state.password.match(passw))){
        this.props.navigation.navigate('Home');
        // console.log('email',this.state.email);
        }else
        this.setState({error:'Enter a Valid Email'});
        this.setState({errors:'Password:Minimum 8 letters,1 uppercase and special charater'});
    };
    
    //   handleSubmit = evt => {
       
    //      evt.preventDefault();
    //      const isValid = this.validation();
    //      if(isValid){
    //          console.log(this.state);
    //      }
        
        // const { email, password } = this.state;
        // Alert.alert(`Signed up with email: ${email} password: ${password}`);
        
    //   };
    
     // canBeSubmitted() {
       // const { email, password } = this.state;
        //return (email.length > 0 && email !== '') && (password.length > 0 && password !== '');
      //}

    render() { 
       // const { email, password ,validity} = this.state;
    //const isEnabled = email.length > 0 && password.length > 0;
    //console.log(isEnabled);
    //const isEnabled = this.canBeSubmitted();
    //console.log('validity',validity)


        return ( 
            <View style={{height:'100%'}}>
                <View style={styles.container}>
                     <View style={{marginTop:15,marginLeft:15}}>
                    <AntDesign name={'left'} size={25} color={'#fff'}
                        onPress={() => this.props.navigation.navigate('Board')}/>
                    </View>
                        <Text style={styles.text}>Enter your email and password to log in</Text>
                        <View style={styles.subContainer}>
                            <View>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:30}}>
                                    <GoogleSignIn navigation={this.props.navigation}/>
                                    <TwitterSignIn navigation={this.props.navigation}/>
                                    <FbAuth navigation ={this.props.navigation}/>
                                </View>
                                <Text style={{fontSize:18,paddingTop:10,textAlign:'center',paddingBottom:10,color:'grey'}}>__________________  OR   ___________________</Text>
                                    <Input textInput='Email'  validEmail={this.state.email} emailChange={this.handleEmailChange}/> 
                                    <Password textInput='Password' validPassword={this.state.password} passwordChange={this.handlePasswordChange}/>
                                    <Text style={{color:'red',textAlign:'center'}}>{this.state.errors}</Text>
                                  <CustomButton title='LOG IN'  disabled={this.state.validity} button={[this.state.validity?styles.activeStyle:styles.inactiveStyle,styles.loginText]} page={this.validation}/>
                               <TouchableOpacity onPress={() => this.props.navigation.navigate('Reset')}><Text style={{fontSize:18,paddingBottom:20,paddingTop:15,textAlign:'center',color:'#8f60de'}}>FORGOT PASSWORD</Text></TouchableOpacity> 
                            </View>
                        </View>
                </View> 
            </View>//Page={() => this.handleSubmit()}
            //use the pad styles name different for the individual button or text style change
         );//<Input textInput='Email'  validEmail={this.state.email} emailChange={(event) => this.handleEmailChange(event)}
         ///>
      // <InputPassword textInput='Password' validEmail={this.state.password} emailChange={this.handlePasswordChange}/>
       //<CustomButton title='LOG IN'  pad={[this.state.validity?styles.inactiveStyle:styles.activeStyle,]}
        ///>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#8f60de',
    },
    subContainer:{
        
        width:'90%',
        backgroundColor:'#fff',
        borderRadius:30,
        marginTop:25,
        alignSelf:'center'
        
    },
    text:{
        color:'#fff',
        textAlign:'center',
        fontSize:35,
        marginLeft:15,
        marginRight:15,
        marginTop:'8%'
    },
    activeStyle: {
         padding:8,
    },
    inactiveStyle:{
        padding:8,
        backgroundColor:'#E8E8E8'
    },
    loginText:{
        fontSize:15
    },
});
export default LoginPage;