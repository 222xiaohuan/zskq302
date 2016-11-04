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
  }
    
  componentDidMount(){
    Consts.gesturePwdSelectedOperation = gesturePwdOperation.unlock;
  }

  updateGesturePwdCB =()=>{
    Consts.gesturePwdSelectedOperation = gesturePwdOperation.updateOrigin;
    console.log('------回调执行了', Consts.gesturePwdSelectedOperation);

    this.pwdCom.updateOperation();
  }

  render() {
    return (    
      <LinearGradient colors={['#2fd56a', '#22c9dd']} style={styles.linearGradient}>
        <GesturePwdCom ref={pwd => this.pwdCom = pwd} />
        <GesturePwdFootCom updateGesturePwdCB = {this.updateGesturePwdCB} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

});