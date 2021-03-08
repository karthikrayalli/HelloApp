import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text,TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
                style={{paddingLeft:10,fontSize:18,width:'90%'}}
                placeholder={this.props.textInput}
                underlineColorAndroid="transparent"
                onChangeText={this.props.emailChange}
                value={this.props.validEmail}/>
 
        </View>
    );
  }
}
class Password extends Component{
  constructor(props){
    super(props);
    this.state={
      //   show:'false',
        visible:true
      // passwordVisible: true,
    }
  }
  onIconPress = () =>{
    // this.setState({passwordVisible: !this.state.passwordVisible});
     this.setState({visible: !this.state.visible});
  }
  
   render() {
  //   console.log('secure',this.props.secure)
     return (
        
         <View style={styles.SectionStyle}>
              <FontAwesome name={'lock'} size={25} style={{color:'grey',paddingLeft:10}}/>
           <TextInput
                 style={{paddingLeft:10,fontSize:18,width:'75%'}}
                 placeholder={this.props.textInput}
                secureTextEntry={this.state.visible} 
                 underlineColorAndroid="transparent"
                 onChangeText={this.props.passwordChange}
                 value={this.props.validPassword}
/>
          <TouchableOpacity style={{position:'absolute',right:20}} onPress={() => this.onIconPress()}>
              <MaterialCommunityIcons name={this.state.visible ? 'eye-outline':'eye-off-outline'} size={20} color={'black'}/>
              </TouchableOpacity>  
             
  
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
export {Input,Password};