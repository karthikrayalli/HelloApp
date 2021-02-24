import React, { Component } from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native'
import CustomButton from '../components/customButton'
import {Input} from '../components/textInput'
class ResetPassword extends Component {
   // { width:'90%',height:'8%', borderWidth:1,borderBottomColor:'black',paddingLeft:10}
   constructor(){
       super();
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

    render() { 
       //const { email, password ,validity} = this.state;
       //console.log('validity',validity)
        return ( 
            <View style={styles.container}>
                <View>
                    <Text style={styles.texting}>To Reset your password,please enter your email.</Text>
                    <Input textInput='Email' validEmail={this.state.email} emailChange={this.handleEmailChange}/>
                    <CustomButton title='SEND ME A PASSWORD RESET LINK' disabled={this.state.validity} button={[this.state.validity?styles.activeStyle:styles.inactiveStyle,styles.resetbuttonStyle,styles.resetText]}/>
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
        textAlign:'center'
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