/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import Welcome from './js/views/Welcome';

class KQTJ31 extends Component {

  configureScene(route, routeStack) {
    Navigator.SceneConfigs.FloatFromRight.gestures = null;
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator){
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
