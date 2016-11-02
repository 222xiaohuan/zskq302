import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import React, { Component } from 'react';

export default class Nav extends Component{
  
  render(){
    return(
      <View style={styles.container} >
         <Image
          style={styles.icon}
          source={require('../images/left_back.png')}
        />
        <Text>手势解锁</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:44,
    alignItems: 'center',
  },
  icon:{
    width:20,
    height:20,
  }
});