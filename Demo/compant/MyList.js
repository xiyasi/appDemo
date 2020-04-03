import React, { Component } from 'react'
import {
    View, 
    Text, 
    AsyncStorage,
    ScrollView,
    StatusBar,
    ToastAndroid
} from 'react-native';
import Button from 'react-native-button';

export default class MyList extends Component {
    constructor(){
        super();
        this.state = {
            tits: [],
            b: 1,
            textre:'待回复'
        }
    }
    
    componentDidMount = ()=>{
        fetch('https://cnodejs.org/api/v1/topics?limit=10')
            .then(res=>res.json())
            .then(res=>{
                this.setState({tits: res.data});
            })
    }
    clickOne = ()=>{
        var c = this.state.b;
        c = c - 1;
        this.state.b = c;
        fetch('https://cnodejs.org/api/v1/topics?page='+c+'&&limit=10')
            .then(res=>res.json())
            .then(res=>{
                this.setState({tits: res.data});
        })
        if(c<1){
            c = 1;
            this.state.b = c;
            ToastAndroid.show('不要上翻辣，木有啦', ToastAndroid.SHORT);
        }
    }
    clickTwo = ()=>{
        var c = this.state.b;
        c = c + 1;
        this.state.b = c;
        fetch('https://cnodejs.org/api/v1/topics?page='+c+'&&limit=10')
            .then(res=>res.json())
            .then(res=>{
                this.setState({tits: res.data});
        })
    }
    render() {
        var bnta = [];
        var ant = [];
        for(var i=0;i<10;i++){
            ant[i] = Math.random()*10;
        }
        this.state.textre = bnta;
        for(var j=0;j<10;j++){
            if(ant[j]>5){
                bnta[j] = '已回复'
            }else{
                bnta[j] = "待回复"
            }
        }
        return (
            <View>
                
                <StatusBar backgroundColor='transparent' translucent={true}/>
                <ScrollView style={{marginTop:10}}>
                    {
                        this.state.tits.map((item,index)=>(
                            <View style={{
                                fontSize:15,
                                flexDirection: 'row',
                                width:'100%',
                                height:50,
                                paddingTop:10,
                                borderBottomWidth:1,
                                borderBottomColor:'#AAAAAA',
                                paddingLeft:20,
                                backgroundColor:'white'}}>
                                <Text style={{fontSize:15,width:200}}>{item.title.slice(0,10)}...</Text>
                                <Text style={{fontSize:15,marginLeft:80}}>{item.create_at.slice(0,10)}</Text>
                                <Text style={{
                                    marginLeft:30,
                                    color: bnta[index] =='已回复'?'red':'black'
                                    }}>
                                    {bnta[index]}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
                <View style={{flexDirection: 'row',marginTop:10,marginLeft:20}}>
                        <Button 
                            style={{
                                height:40,
                                width:120,
                                backgroundColor:'red',
                                color:'white',
                                textAlignVertical: 'center',
                                borderRadius: 20}} onPress={this.clickOne}>上一页</Button>
                        <Text style={{width:200,textAlign: 'center',paddingTop:10,fontSize:18}}>
                            第{this.state.b}页</Text>
                        <Button style={{
                                height:40,
                                width:120,
                                backgroundColor:'red',
                                color:'white',
                                textAlignVertical: 'center',
                                borderRadius: 20}} onPress={this.clickTwo}>下一页</Button>
                    </View>
            </View>
        )
    }
}