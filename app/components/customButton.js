import React, { Component } from 'react';
import {View,Text,TouchableOpacity,Button,StyleSheet} from 'react-native'
class CustomButton extends Component {
    constructor(){
        super();
        this.state={

        };
    }
    render() { 
        return ( 
            <View> 
                <TouchableOpacity style={[styles.buttonStyle,this.props.button]} activeOpacity = { .5 }
                 onPress={() => this.props.navigation.navigate('Home')}>
                 <Text style={[styles.text,this.props.button]}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    buttonStyle: {
        marginTop:10,
        marginBottom:8,
        marginRight:20,
        marginLeft:20,
        borderRadius:10,
        borderColor:'#fff',
        backgroundColor:'#8f60de',
    },
    text:{
        textAlign:'center',
        color:'#fff',
        
    }
});
export default CustomButton;