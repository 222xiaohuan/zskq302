import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

import React, { Component } from 'react';

export default class GesturePwdHeadCom extends Component{
  constructor(props) {
      super(props);
  }

  render(){
    return(
      <View style={styles.imgWrapper}>
        <Image
          style={styles.icon}
          source={require('../../images/icon.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgWrapper:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    width:60,
    height:60,
    borderRadius:30,
    marginTop: 20,
  },
});