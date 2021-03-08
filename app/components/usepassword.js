import React from 'react';
import {View,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const UsePassword = ({props}) => {
    const [show,setShow] = React.useState(false);
    const [visible,setVisible] = React.useState(true); 
    return(
        <View style={styles.SectionStyle}>
  
        <FontAwesome name={'lock'} size={25} style={{color:'grey',paddingLeft:10}}/>
        {      console.log('propsssssssssssssss',props.textInput)
}
     <TextInput
           style={{paddingLeft:10,fontSize:18}}
          //  placeholder={props.textInput}
           secureTextEntry={visible} 
          //  onChangeText={props.passwordChange}
          //  value={props.validPassword}
        />
    <TouchableOpacity style={{position:'absolute',right:20}}
      onPress={() => {(setShow(!show),setVisible(!visible))}}><MaterialCommunityIcons name={show === false?'eye-outline':'eye-off-outline'} size={20} color={'black'}/>
      </TouchableOpacity>  
       
    
    </View>
    );
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
export default UsePassword;