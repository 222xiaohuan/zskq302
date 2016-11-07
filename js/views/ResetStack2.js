import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import React, { Component } from 'react';
import Welcome from './Welcome';

export default class ResetStack2 extends Component{

  pushToHome(){
    this.props.navigator.push({
      component: Welcome,
    });
  }

  resetToHome(){
    this.props.navigator.resetTo({
      component: Welcome,
    });
  }

  render(){
    return (
      <View>
        <TouchableOpacity onPress={() => this.pushToHome()}>
          <Text style={styles.textTitle}> Push to welcome page</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.resetToHome()}>
          <Text style={styles.textTitle}> reset to welcome page</Text>
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