import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AsyncStorage
} from 'react-native';
import { Grid, Icon } from '@ant-design/react-native';
import {Router, Scene,Tabs,Overlay,Lightbox,Drawer,Modal,Actions} from "react-native-router-flux";
import SplashScreen from 'react-native-splash-screen'

import Home from './compant/Home';
import Classify from './compant/Classify';
import Parsonal from './compant/Parsonal';
import Mylist from './compant/MyList';
import Login from './compant/Login';
import SwiperPage from './compant/SwiperPage';
import Register from './compant/Register';

const App  = () => {
  let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
  return (
    <Router backAndroidHandler={()=>{
      if(Actions.currentScene != 'home'){
        Actions.pop();
        return true;
      }else{
        if(new Date().getTime()-now<2000){
          BackHandler.exitApp();
        }else{
          ToastAndroid.show('确定要退出吗',100);
          now = new Date().getTime();
          return true;
        }
      }
      
    }}>
    <Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
          
				  <Scene key='root'>
            <Tabs key='tabbar' hideNavBar
              activeTintColor='red'
              inactiveTintColor='#AAAAAA'>
              <Scene key='homePage'
                title='首页' hideNavBar
                icon={
                  ({focused})=><Icon 
                    color={focused?'red':'#AAAAAA'}
                    name='home'/>}>
                <Scene key='home' component={Home}/>
              </Scene>
              <Scene key='doc'
                title='商品分类'
                hideNavBar
                icon={
                  ({focused})=><Icon 
                    color={focused?'red':'#AAAAAA'}
                    name='apple'/>}>
                <Scene key='doce' component={Classify}/>
              </Scene>
              <Scene key='person'
                title='个人中心' 
                icon={
                  ({focused})=><Icon 
                    color={focused?'red':'#AAAAAA'}
                    name='skin'/>}
                    titleStyle={{backgroundColor:'red'}}>
                <Scene key='per' component={Parsonal} hideNavBar/>
                <Scene key='mylist' title='我的发布' component={Mylist}
                  titleStyle={{flex:1,textAlign:'center',color:'red'}}
                  renderRightButton={<View></View>}/>
              </Scene>
            </Tabs>
           </Scene> 
        </Lightbox>
        <Scene initial={!isLogin} key="login" component={Login} />
        <Scene key='register' title='注册' component={Register}
          titleStyle={{flex:1,textAlign:'center',color:'red'}}
          renderRightButton={<View></View>}/>
			</Modal>
		</Overlay>
  </Router>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
