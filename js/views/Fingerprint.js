'use strict';

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  ScrollView,
  DeviceEventEmitter,
  ToastAndroid,
} from 'react-native';

import GATFingerprint from 'react-native-fingerprint';
import Button from './Button';

class Fingerprint extends Component{

constructor(props){
  super(props);
  this.state = {
    textvalue:"this is text",
  };
}

componentDidMount(){
  DeviceEventEmitter.addListener('fingerprintCallBack', this.fingerprintCallBack);
}
componentWillUnmount(){
  DeviceEventEmitter.removeListener("fingerprintCallBack");
}

async  _isSupport(){
  try {
    var e = await GATFingerprint.isSupport();
      ToastAndroid.show(JSON.stringify(e),ToastAndroid.SHORT);
  } catch (e) {
    Alert.alert(JSON.stringity(e));
  }
}

 _startTouch(){
 this.setState({
     textvalue:this.state.textvalue+'\nstartTouch',
   });
  GATFingerprint.startTouch('fingerprintCallBack','ios propmpt');
}

fingerprintCallBack(e: Event){
  ToastAndroid.show(JSON.stringify(e),ToastAndroid.SHORT);
}
  render(){
    return(
      <ScrollView>
      <View style={{backgroundColor:'#f3f3f3', flex:1}}>
            <Button text = 'isSupport'
              style = {styles.style_view_button}
              onPress = {this._isSupport.bind(this)}/>
            <Button text = 'Start Touch'
              style = {styles.style_view_button}
              onPress = {this._startTouch.bind(this)}/>
              <Text style = {{
                marginTop:15,
                marginLeft:10,
                marginRight:10}}>{this.state.textvalue}</Text>
      </View>
      </ScrollView>
    );
  }

}
var styles = StyleSheet.create({
  style_view_button:{
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#63B8FF',
    borderColor:'#5bc0de',
    height:45,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  },
});
export default Fingerprint;