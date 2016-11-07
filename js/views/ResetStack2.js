import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import React, { Component } from 'react';

export default class ResetStack2 extends Component{


  render(){
    return (
      <View>
          <Text style={styles.textTitle}> Stack 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    fontSize: 30,
    margin: 20,
  }
});