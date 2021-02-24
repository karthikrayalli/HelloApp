import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
class Input extends Component{
 constructor(){
   super();
   this.state={

   }
 }
 
  render() {
    return (
       
        <View style={styles.SectionStyle}>
 
             <Entypo name={'mail'} size={25} style={{color:'grey',paddingLeft:10}}/>
        
          <TextInput
                style={{paddingLeft:10,fontSize:18}}
                placeholder={this.props.textInput}
                underlineColorAndroid="transparent"
                onChangeText={this.props.emailChange}
                value={this.props.validEmail}/>
 
        </View>
    );
  }
}
class InputPassword extends Component{
  constructor(){
    super();
    this.state={
 
    }
  }
  
   render() {
     return (
        
         <View style={styles.SectionStyle}>
  
              <FontAwesome name={'lock'} size={25} style={{color:'grey',paddingLeft:10}}/>
         
           <TextInput
                 style={{paddingLeft:10,fontSize:18}}
                 placeholder={this.props.textInput}
                 secureTextEntry={true} 
                 underlineColorAndroid="transparent"
                 onChangeText={this.props.passwordChange}
                 value={this.props.validPassword}/>
            <AntDesign name={'eye'} size={20} style={{color:'grey',position:'absolute',right:20}} />
             
  
         </View>
     );
   }
 }
 
 
const styles = StyleSheet.create({
  
  SectionStyle: {
    flexDirection:'row',
    alignItems:'center',
    width:'90%',
    height: 60,
    fontSize: 15,
    borderBottomWidth:3,
    borderBottomColor:'#8f60de',
    backgroundColor: '#E8E8E8',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    marginTop: 10,
    marginBottom:10,
    marginRight:20,
    marginLeft:20,
    
},
 

 
});
export {Input,InputPassword};