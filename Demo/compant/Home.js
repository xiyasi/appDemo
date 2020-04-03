import React, { Component } from 'react'
import {View,
        Text,StyleSheet,TextInput,
        ScrollView,Image,Dimensions} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen'

const {width} = Dimensions.get('window');

export default class Home extends Component{
    
    render(){
        return(
            <View>
                <View style={styles.box}>
                    
                    <TextInput 
                        placeholder="请输入您要搜索的关键字"
                        style={styles.inp}>
                        <Icon name='play-square'/>
                        <Text>请输入您要搜索的关键字</Text>
                    </TextInput>
                    <Icon name='printer'
                    style={{
                        marginTop:20,
                        marginLeft:10
                    }}/>
                </View>
                <View>
                <ScrollView horizontal={true} pagingEnabled={true}>
                    <View style={styles.slide}>
                       <Image  source={require('../img/1.png')} style={styles.img}/>
                    </View>
                    <View style={styles.slide}>
                       <Image  source={require('../img/2.png')} style={styles.img}/>  
                    </View>
                    <View style={styles.slide}>
                        <Image  source={require('../img/3.png')} style={styles.img}/>
                    </View>
                </ScrollView>
                </View>
                <View style={styles.three}>
                    <Image source={require('../img/h1.png')} style={styles.imgt}/>
                    <Text style={styles.txtt}>居家维修保养</Text>
                    <Icon name='pause-circle' style={styles.ico}/>
                </View>
                <View style={styles.three}>
                    <Image source={require('../img/h2.png')} style={styles.imgt}/>
                    <Text style={styles.txtt}>住宿优惠</Text>
                    <Icon name='pause-circle' style={styles.icot}/>
                </View>
                <View style={styles.three}>
                    <Image source={require('../img/h3.png')} style={styles.imgt}/>
                    <Text style={styles.txtt}>出行接送</Text>
                    <Icon name='pause-circle' style={styles.icot}/>
                </View>
                <View style={styles.three}>
                    <Image source={require('../img/h4.png')} style={styles.imgt}/>
                    <Text style={styles.txtt}>E族活动</Text>
                    <Icon name='pause-circle' style={styles.icot}/>
                </View>
                <View style={styles.thre}>
                    <Text style={styles.txtf}>发布需求</Text>
                </View>
                <View>
                    <Text style={{
                        marginLeft:'40%',
                        color:'#AAAAAA'
                    }}>E族之家版权所有</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
      width:'100%',
      height:80,
      backgroundColor:'#FF3333',
      flexDirection: 'row',
      alignItems: 'center'
    },
    img:{
      marginTop:50,
      marginLeft:'42%',
      width:80,
      height:80,
      borderRadius:50
    },
    txt:{
        fontSize:20,
        color:'white',
        marginTop:10,
        marginLeft:'35%'
    },
    inp:{
        backgroundColor:'#FF8888',
        flexDirection: 'row',
        width: 300,
        height: 40,
        padding: 0,
        paddingLeft: 10,
        marginLeft:'15%',
        marginTop:20,
        borderTopRightRadius: 20,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20  
    },
    slide:{
        width:width,
        height:200,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:width,
        height:200
    },
    three:{
        flexDirection: 'row',
        width:'100%',
        height:80,
        marginTop:10,
        backgroundColor:'#FFFFFF'
    },
    txtt:{
        marginLeft:20,
        marginTop:25,
        fontSize:18,
        color:'#AAAAAA'
    },
    imgt:{
        marginLeft:10,
        width:70,
        height:70
    },
    ico:{
        marginTop:25,
        marginLeft:'45%'
    },
    icot:{
        marginTop:25,
        marginLeft:'52%'
    },
    thre:{
        width:'100%',
        height:80
    },
    txtf:{
        width:'60%',
        height:40,
        backgroundColor:'red',
        color:'#FFFFFF',
        marginTop:20,
        marginLeft:'20%',
        borderTopRightRadius: 10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        paddingTop:8,
        paddingLeft:'26%' 
    }
  });