import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../components/customButton';
import {Input,InputPassword} from '../components/textInput'
//import Zocial from 'react-native-vector-icons/Zocial '
class LoginPage extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    render() { 
        return ( 
            <View style={{height:'100%'}}>
                <View style={styles.container}>
                        <Text style={styles.text}>Enter your email and password to log in</Text>
                        <View style={styles.subContainer}>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:30}}>
                                    <AntDesign name={'google'} size={40} color={'#4285f4'}/>
                                    <AntDesign name={'twitter'} size={40} color={'#1DA1F2'}/>
                                    <AntDesign name={'facebook-square'} size={40} color={'#4267B2'}/>
                                </View>
                            <Text style={{fontSize:18,paddingTop:40,textAlign:'center',paddingBottom:30,color:'grey'}}>__________________  OR   ___________________</Text>
                            <Input textInput='Email'/>
                            <InputPassword textInput='Password'/>
                            <CustomButton title='LOG IN' pad={[styles.loginbuttonStyle,styles.loginText]}/>
                            <Text style={{fontSize:20,paddingTop:30,textAlign:'center',color:'#8f60de'}}>FORGOT PASSWORD</Text>
                        </View>
                </View> 
            </View>
            //use the pad styles name different for the individual button or text style change
         );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#8f60de',
        justifyContent:'center',
        alignItems:'center'
    },
    subContainer:{
        width:'90%',
        height:'57%',
        backgroundColor:'#fff',
        borderRadius:30,
        marginTop:30
    },
    text:{
        color:'#fff',
        textAlign:'center',
        fontSize:35,
        marginLeft:15,
        marginRight:15,
    },
    loginbuttonStyle: {
        
        padding:8,
        backgroundColor:'#E8E8E8'
    },
    loginText:{
        fontSize:20
    }
});
export default LoginPage;