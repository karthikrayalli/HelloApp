import React, { Component } from 'react';
import {View,Text,StyleSheet, TextInput, Alert} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../components/customButton'
import {Input} from '../components/textInput'
class ResetPassword extends Component {
   // { width:'90%',height:'8%', borderWidth:1,borderBottomColor:'black',paddingLeft:10}
   constructor(props){
       super(props);
        this.state={
            email:'',
            validity:false
        }
   }
   handleEmailChange = evt => {
    const { email, password,validity} = this.state;
    this.setState({ email: evt });
    if(evt !== ''){
        this.setState({validity:true})
    }else
        this.setState({validity:false})
    //console.log('email',email,password,evt)
  };
  validation = () =>{
    const {password} = this.state;
  // console.log('email',email)}
//   const passw = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
  if(this.state.email.includes('@' && '.')){
  
  // console.log('email',this.state.email);
  }else
    {this.props.errors}
};

    render() { 
       //const { email, password ,validity} = this.state;
       //console.log('validity',validity)
        return ( 
            <View style={styles.container}>
                <View style={{marginTop:15,marginLeft:15,flex:1}}>
                    <AntDesign name={'left'} size={25} color={'#8f60de'}
                        onPress={() => this.props.navigation.navigate('Login')}/>
                    </View>
                <View style={{flex:3}}>
                    <Text style={styles.texting}>To Reset your password,please enter your email.</Text>
                    <Input textInput='Email' validEmail={this.state.email} emailChange={this.handleEmailChange}/>
                    <Text style={{color:'red',textAlign:'center'}}>{this.props.errors}</Text>
                    <CustomButton title='SEND ME A PASSWORD RESET LINK' disabled={this.state.validity} button={[this.state.validity?styles.activeStyle:styles.inactiveStyle,styles.resetbuttonStyle,styles.resetText]}
                        page={this.validation}/>
                </View>
            </View>
         );
    }
}   
const styles = StyleSheet.create({
    container:{
        height:'100%',
        justifyContent:'center',
     },
    texting:{
        fontSize:25,
        marginLeft:25,
        marginRight:25,
        textAlign:'center',
        paddingBottom:5
    },
    activeStyle:{
        padding:8
    },
    inactiveStyle: {
        
        padding:8,
        backgroundColor:'#E8E8E8',
        
    },
    resetText:{
        fontSize:20
    }
    
});
export default ResetPassword;