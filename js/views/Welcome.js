import { 
  BackAndroid, 
  Navigator,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';
import GesturePwd from './GesturePwd/GesturePwd';
import Fingerprint from './Fingerprint';
import Pro from './Pro';
import WaterMaskDemo from './WaterMaskDemo';

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

   goToWaterMask(){
    this.props.navigator.push({
      component: WaterMaskDemo,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.goToGesturePwd()}>
          <Text style={styles.textTitle}>Go to Gesture Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.goToFingerprint()}>
          <Text style={styles.textTitle}>Go to Fingerprint</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.goToPromise()}>
          <Text style={styles.textTitle}>Go to promise</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.goToWaterMask()}>
          <Text style={styles.textTitle}>Go to water mask</Text>
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