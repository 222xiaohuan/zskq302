import { 
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';

import GesturePwdCom from "./GesturePwdCom";
import GesturePwdFootCom from "./GesturePwdFootCom";

import LinearGradient from 'react-native-linear-gradient';
import Consts, { gesturePwdOperation } from '../../common/Consts';

export default class GesturePwd extends Component {
  constructor(props) {
      super(props);
      this.state = {
        message: '',
      }
  }
    
  componentDidMount(){
    Consts.gesturePwdSelectedOperation = gesturePwdOperation.unlock;
  }

  updateGesturePwd(){
    Consts.gesturePwdSelectedOperation = gesturePwdOperation.update;
    console.log('------回调执行了', Consts.gesturePwdSelectedOperation);

    this.setState({
        message: '请先输入密码',
    });
  }

  render() {
    return (    
      <LinearGradient colors={['#2fd56a', '#22c9dd']} style={styles.linearGradient}>
        <GesturePwdCom parentMsg = {this.state.message} />
        <GesturePwdFootCom updateGesturePwd = {this.updateGesturePwd} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

});