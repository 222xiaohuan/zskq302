import { 
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';

import GesturePwdCom from "./GesturePwdCom";
import GesturePwdFootCom from "./GesturePwdFootCom";

export default class GesturePwd extends Component {
  constructor(props) {
      super(props);
  }

    
  render() {
    return (
       <View style={styles.container}>
         <GesturePwdCom />
         <GesturePwdFootCom />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },
});