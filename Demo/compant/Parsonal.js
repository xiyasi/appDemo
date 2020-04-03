import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,Animated} from 'react-native'
import { Actions,Router, Scene} from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import Button from 'react-native-button';

export default class Parsonal extends Component{
    constructor(){
        super();
        let data = [];
        for(var i=0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data,
            width: new Animated.Value(20),
            imageUrl:''
        }
    }
    takephoto = ()=>{
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            this.setState({imageUrl:{uri:image.path}})
          });
    }
    render(){
        return(
            <View>
                <View style={styles.box}>
                    <Image  style={styles.img} source={require('../img/tou.jpg')} onPress={()=>{this.takephoto()}}/>
                    <Text style={styles.txt}>BINNU DHILLON</Text>
                </View>
                <View style={styles.boxt}>
                    <Icon name='skin'
                    style={{
                        marginTop:15,
                        marginLeft:20
                    }}/>
                    <Text style={styles.txtt}>我的个人中心</Text>
                </View>
                <View style={{
                    width:'100%',height:240,
                    marginTop:5,backgroundColor:'#FFFFFF'
                    }}>
                    <View style={{
                        width:'100%',height:80,
                        flexDirection: 'row'}}>
                        <View style={{width:'33%'}}>
                        <Icon name='plus'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                账户管理</Text>
                        </View>
                        <View style={{width:'33%'}}>
                        <Icon name='dollar'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                收货地址</Text>
                        </View>
                        <View style={{width:'33%'}}>
                        <Icon name='radius-bottomright'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                我的信息</Text>
                        </View>
                    </View>
                    <View style={{
                        width:'100%',height:80,
                        flexDirection: 'row'}}>
                    <View style={{width:'33%'}}>
                        <Icon name='pie-chart'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                我的订单</Text>
                        </View>
                        <View style={{width:'33%'}}>
                        <Icon name='menu-unfold'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                我的二维码</Text>
                        </View>
                        <View style={{width:'33%'}}>
                        <Icon name='rise'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                我的积分</Text>
                        </View>
                    </View>
                    <View style={{
                        width:'100%',height:80,
                        flexDirection: 'row'}}>
                        <View style={{width:'33%'}}>
                        <Icon name='save'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                我的收藏</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxt}>
                    <Icon name='alert'
                    style={{
                        marginTop:15,
                        marginLeft:20
                    }}/>
                    <Text style={styles.txtt}>E族活动</Text>
                </View>
                <View style={{
                    width:'100%',height:160,
                    marginTop:5,backgroundColor:'#FFFFFF'
                    }}>
                    <View style={{
                        width:'100%',height:80,
                        flexDirection: 'row'}}>
                        <View style={{width:'33%'}}>
                        <Icon name='bars'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                居家维修保养</Text>
                        </View>
                        <View style={{width:'33%'}}>
                        <Icon name='build'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                出行接送</Text>
                        </View>
                        <View style={{width:'33%'}}>
                        <Icon name='skin'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                我的受赠人</Text>
                        </View>
                    </View>
                    <View style={{
                        width:'100%',height:80,
                        flexDirection: 'row'}}>
                    <View style={{width:'33%'}}>
                        <Icon name='check'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                我的住宿优惠</Text>
                        </View>
                        <View style={{width:'33%'}}>
                        <Icon name='ci'
                            style={{
                                marginTop:20,
                                marginLeft:'43%'
                            }}/>
                            <Text 
                            style={{marginTop:10,
                                marginLeft:'30%'}}>
                                我的活动</Text>
                        </View>
                        <View style={{width:'33%'}}>
                          
                            <Icon name='dingding' style={{marginTop:20,marginLeft:'43%'}}/>
                            {/* <Text style={{marginTop:10,marginLeft:'30%'}}>我的发布</Text> */}
                            <Button onPress={()=>Actions.mylist()}
                                style={{
                                    backgroundColor:'#FFFFFF',
                                    color:'black',
                                    fontSize:14,
                                    paddingTop:10}}>我的发布</Button>
                        </View>
                    </View>
                    
                </View>
                <View style={{marginTop:10}}>
                    <Button style={{color:'brack'}} onPress={()=>Actions.login()}>
                    BINNU DHILLON | 退出
                    </Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
      width:'100%',
      height:200,
      backgroundColor:'#FF3333'
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
    boxt:{
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        width:'100%',
        height:50,
        marginTop:5
    },
    txtt:{
        marginLeft:20,
        alignItems: 'center',
        marginTop:15
    }
  });
  