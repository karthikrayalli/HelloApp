import React, { Component } from 'react';
import {View,Text,StyleSheet,Image,ImageBackground} from 'react-native'
import CustomButton from '../components/customButton'
class BoardScreen extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    render() { 
        return ( 
            <View style={{height:'100%'}}>
                
                <ImageBackground source={require('../assests/images/background.jpeg')} style={styles.backgroundImage}>
                    <Image source={require('../assests/images/logo.png')} style={styles.image}/> 
                    <View>
                        <Text style={styles.text}>Network</Text>
                        <Text style={styles.text1}>Smarter.</Text>
                    </View>
                    <View style={{flexDirection: "row",justifyContent: "space-between"}}>
                        <Image source={require('../assests/images/board1.png')} style={styles.image1}/>
                        <Image source={require('../assests/images/board2.png')} style={styles.image2}/>
                    </View> 
                    <Image source={require('../assests/images/board3.jpeg')} style={styles.image3}/>
                        <CustomButton title="CREATE ACCOUNT" button={[styles.boardButton,styles.boardText]}
                            onPress={() => this.props.navigation.navigate('Login')}/>
                   <View>
                        <Text style={styles.login}>LOG IN</Text>
                        <Text style={styles.privacy}>PRIVACY POLICY</Text>
                    </View> 
               </ImageBackground>
               </View>
        
         );
    }
}
const styles = StyleSheet.create({
    backgroundImage:{
        flex:1
    },
    image:{
        width:50,
        height:50,
        marginTop:20,
        marginLeft:20
    },
    image1:{
        width:170,
        height:220,
        marginTop:20,
        marginLeft:30,
        borderRadius:15,
        transform: [{ rotate: '-7deg' }]
    },
    image2:{
        width:170,
        height:220,
        marginTop:140,
        marginRight:35,
        borderRadius:15,
        transform: [{ rotate: '9deg' }]
    },
    image3:{
        width:170,
        height:220,
        marginTop:-90,
        marginLeft:20,
        borderRadius:15,
        transform: [{ rotate: '-10deg' }],
        marginBottom:30
    },
    text:{
        color:'#fff',
       textAlign:'right',
       fontSize:40,
       fontWeight:'bold',
       marginTop:-40,
       marginRight:20
    },
    text1:{
       color:'#fff',
       textAlign:'right',
       fontSize:40,
       fontWeight:'bold',
       lineHeight:60,
       marginRight:13
        
    },
    login:{
        textAlign:'center',
        color:'#8f60de',
        paddingTop:15,
        fontSize:17

    },
    privacy:{
        textAlign:'center',
        color:'#8f60de',
        paddingTop:35,
        fontSize:15
    },
    boardButton:{
        padding:5
    },
    boardText:{
        fontSize:15
    }

});
 
export default BoardScreen;