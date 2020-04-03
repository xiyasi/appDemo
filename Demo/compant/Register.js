import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from './utils'
import Button from 'react-native-button';
let rootUrl = 'https://www.fastmock.site/mock/4edead140c9ed758cae665b2c155403e/api';
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    register = ()=>{
      fetch(rootUrl+'/login',{
        method:'POST',
        headers:{
          "Accept":'application/json'
        },
        body:JSON.stringify({
          username:this.state.username,
          pwd:this.state.pwd
        })
      })
        .then(res=>res.json())
        .then(res=>{
          console.log(res)
        })
  } 
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
      <View
        style={{ alignItems: 'center'}}>
           <Text>注册</Text>
        <View
          style={{
            width: '80%',
            marginRight: 10,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
          }}>
          <Icon name="skin" color="red"/>
          <TextInput placeholder="用户名" 
              onChangeText={this.userhandle}
          />
        </View>
        <View
          style={{
            width: '80%',
            marginRight: 10,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
          }}>
          <Icon name="skin" color="red"/>
          <TextInput 
              onChangeText={this.pwdhandle}
              placeholder="密码" 
              secureTextEntry={true}
          />
          
        </View>
      </View>
      <Button style={{
        marginTop:20,width:'30%',height:30,
        backgroundColor:'red',
        color:'#FFFFFF',
        marginLeft:'30%'}} onPress={this.register}>确定</Button>
      <Button style={{
        marginTop:20,width:'30%',height:30,
        backgroundColor:'red',
        color:'#FFFFFF',
        marginLeft:'30%'}} onPress={()=>Actions.login()}>登录</Button>
      </View>
    );
  }
}