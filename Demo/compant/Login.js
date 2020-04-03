import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions,Scene,Lightbox,Overlay} from 'react-native-router-flux';
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
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
      if(this.state.username != ''&&this.state.pwd != ''){
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
          AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
              this.setState({isloading:false})
              Actions.homePage(); 
          })
        })
      }
    } 
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
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
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.login}>
                  <Text>登录</Text>
                </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View><Text>正在登录。。。</Text></View>
            :null
        }
        <View style={{width:'100%',height:70,margin:50,fontSize:30}}>
          <Text>还没有账号？</Text>
          <Text style={{marginTop:20}}>点击注册</Text>
        </View>
        <Button 
          onPress={()=>Actions.register()}
          style={{
          marginTop:20,width:'30%',height:30,
          backgroundColor:'red',
          color:'#FFFFFF',
          marginLeft:'30%'}}>注册</Button>
      </View>
    );
  }
}