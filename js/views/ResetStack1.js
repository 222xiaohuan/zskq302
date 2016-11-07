import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import React, { Component } from 'react';
import ResetStack2 from './ResetStack2';

export default class ResetStack1 extends Component{

  goToResetStack2(){
    this.props.navigator.push({
      component: ResetStack2,
    });
  }

  render(){
    return (
      <View>
        <TouchableOpacity onPress={() => this.goToResetStack2()}>
          <Text style={styles.textTitle}> Stack 1</Text>
        </TouchableOpacity>
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