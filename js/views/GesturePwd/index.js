import { 
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';

import GesturePwdCom from "./GesturePwdCom";
import GesturePwdFootCom from "./GesturePwdFootCom";

import LinearGradient from 'react-native-linear-gradient';

export default class GesturePwd extends Component {
  constructor(props) {
      super(props);
  }
    
  render() {
    return (    
      <LinearGradient colors={['#2fd56a', '#22c9dd']} style={styles.linearGradient}>
        <GesturePwdCom />
        <GesturePwdFootCom />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

});