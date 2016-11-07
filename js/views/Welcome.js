import { 
  BackAndroid, 
  Navigator,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';
import GesturePwd from './GesturePwd';
import Fingerprint from './Fingerprint';
import Pro from './Pro';
import WaterMaskDemo from './WaterMaskDemo';
import ResetStack1 from './ResetStack1';

export default class Welcome extends Component {
  goToGesturePwd(){
    this.props.navigator.push({
      component: GesturePwd,
    });
  }

  goToFingerprint(){
    this.props.navigator.push({
      component: Fingerprint,
    });
  }

  goToPromise(){
    this.props.navigator.push({
      component: Pro,
    });
  }

   goToResetStack1(){
    this.props.navigator.push({
      component: ResetStack1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.goToGesturePwd()}>
          <Text style={styles.textTitle}>Gesture Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.goToFingerprint()}>
          <Text style={styles.textTitle}>Fingerprint</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.goToPromise()}>
          <Text style={styles.textTitle}>Promise</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.goToWaterMask()}>
          <Text style={styles.textTitle}>Water mask</Text>
        </TouchableOpacity>

          <TouchableOpacity onPress={() => this.goToResetStack1()}>
          <Text style={styles.textTitle}>Reset Push Stack</Text>
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