/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  BackAndroid,
} from 'react-native';

import Welcome from './js/views/Welcome';

let nav = null;

class KQTJ31 extends Component {

  componentDidMount(){
    BackAndroid.addEventListener('hardwareBackPress', function(){
      if(nav && nav.getCurrentRoutes().length > 1){
        nav.pop();
        return true;
      }
      return false;
    });
  }


  configureScene(route, routeStack) {
    Navigator.SceneConfigs.FloatFromRight.gestures = null;
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator){
    nav = navigator;
    return <route.component navigator={navigator} {...route} {...route.passProps} />
  }

  render() {
    return (
      <Navigator
        initialRoute = {{ component: Welcome }}
        configureScene = { this.configureScene }
        renderScene = { this.renderScene }
      />
    );
  }
}

AppRegistry.registerComponent('KQTJ31', () => KQTJ31);
