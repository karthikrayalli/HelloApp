import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight,TextInput,TouchableOpacity, ImageBackground,Button } from 'react-native';



class Logged extends Component {

  state={
    username:'',
    password:'',
    validity:true
  }


render() {
    return (

     <View style={styles.container}>

      <View style={{marginLeft:50,marginTop:30}}>
       <TextInput 
         style={styles.textInputStyle}
         placeholderTextColor="#FFF" 
         placeholder='Username'
         onChangeText={(value)=>this.setState({username:value,validity:false})}
         value={this.state.username}
          />
       <TextInput 
         style={styles.textInputStyle}
         placeholderTextColor="#FFF" 
         placeholder='Password'
         secureTextEntry={true}
         onChangeText={(value)=>this.setState({password:value,validity:false})}
         value={this.state.password}
          />
       </View>

       <View style={{alignSelf:'center'}} >

        <TouchableOpacity style={this.state.validity? 
             styles.inactiveStyle:styles.activeStyle}                           
             disabled={!Boolean(this.state.username && this.state.password)}                                                                                                                     
             onPress={this.handleLogin}>
         <Text>Login</Text>
        </TouchableOpacity>
       </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,    
  },
  textInputStyle:{
    height:50,
    width:300,
    borderBottomWidth:1,
    borderBottomColor:'#FFF',
    marginTop:20,
    color:'#FFF'
  },
  activeStyle:{
    marginTop:18,
    width:180,
    backgroundColor:'#05acfa', 
    alignItems: 'center',
    padding: 10
  },
  inactiveStyle:{
    marginTop:18,
    width:180,
    backgroundColor:'grey', 
    alignItems: 'center',
    padding: 10
  }
});

export default Logged;