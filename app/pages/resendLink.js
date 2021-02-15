import React, { Component } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'
class Link extends Component {
    
    render() { 
        return ( 
            <View style={{height:'100%'}}>
                <View style={styles.container}>
                <Text  style={styles.resend}>We sent you a link to reset your password.</Text>
                <Image source={require('../assests/images/resendLink.png')} style={styles.image}/>
                <Text style={styles.bottomText}>If an account assosiated with parimala.ce@gmail.com exists,
                    you will receive a link to reset your password</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.link}>RESEND LINK</Text>
                </View>
                
                
            </View>
                
            
         );
    }
}
 const styles = StyleSheet.create({
     container:{
        flex:9,
        justifyContent: 'center',
        alignItems: 'center',
        
     },
     resend:{
      fontSize:25,
      textAlign:'center',
      marginLeft:15,
      marginRight:15
    },
    image:{
        width: 180,
        height: 150,
    },
    bottomText:{textAlign:'center',fontSize:20,marginLeft:10,marginRight:10},
    link:{
        flexDirection:'column',
        color:'#8f60de',
        fontSize:20,
        textAlign:'center'}
 });
export default Link;