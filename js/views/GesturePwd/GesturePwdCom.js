import { 
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';

import PasswordGesture from '../../components/GesturePassword';
var Password1 = '123';

import GesturePwdHeadCom from './GesturePwdHeadCom';
import Nav from '../../components/Nav';

export default class GesturePwdCom extends Component {
  constructor(props) {
      super(props);

      this.state = {
          message: '使用手势密码解锁',
          status: 'normal'
      }
  }

    onEnd(password) {
        if (password == Password1) {
            this.setState({
                status: 'right',
                message: '密码正确'
            });

            // your codes to close this view
        } else {
            this.setState({
                status: 'wrong',
                message: '密码错误 请重试'
            });
        }
    }

    onStart() {
        this.setState({
            status: 'normal',
            message: 'Please input your password.'
        });
    }

    onReset() {
        this.setState({
            status: 'normal',
            message: 'Please input your password (again).'
        });
    }

    renderHead() {
        return (
        <View>
            <Nav />
            <GesturePwdHeadCom/>
        </View>
        );
    }

  render() {
    return (
       <PasswordGesture
            ref='pg'
            status={this.state.status}
            message={this.state.message}
            onStart={() => this.onStart()}
            onEnd={(password) => this.onEnd(password)}
            innerCircle={true}
            outerCircle={true}
            children={this.renderHead()}
        />
    );
  }
}