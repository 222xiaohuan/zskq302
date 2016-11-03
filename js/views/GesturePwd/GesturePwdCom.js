import { 
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';

import PasswordGesture from '../../components/GesturePassword';

import GesturePwdHeadCom from './GesturePwdHeadCom';
import Nav from '../../components/Nav';
import Consts, { gesturePwdOperation } from '../../common/Consts';

export default class GesturePwdCom extends Component {
  constructor(props) {
      super(props);

      this.state = {
          message: '使用手势密码解锁',
          status: 'normal'
      }
  }

  componentDidMount(){
    this.Password1 = '123';
  }

    onEnd(password) {

        if(Consts.gesturePwdSelectedOperation == gesturePwdOperation.unlock){
            Consts.gesturePwdDrawTimes <= 4 ? Consts.gesturePwdDrawTimes += 1 : Consts.gesturePwdDrawTimes;

            if (password == this.Password1 && Consts.gesturePwdDrawTimes < 4) {
                this.setState({
                    status: 'right',
                    message: '密码正确'
                });
                Consts.gesturePwdDrawTimes = 0;
                // your codes to close this view
            } else {
                if(Consts.gesturePwdDrawTimes > 4){
                    this.setState({
                        status: 'wrong',
                        message: '最大允许尝试四次，请提交异常申诉'
                    });
                    return;
                }
                let remainTimes = 4 - Consts.gesturePwdDrawTimes;
                this.setState({
                    status: 'wrong',
                    message: `密码错误 还可尝试${remainTimes}次`,
                });
            }
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

    updateMsg(parentMsg){
        console.log('------', Consts.gesturePwdSelectedOperation);
        if(Consts.gesturePwdSelectedOperation == gesturePwdOperation.update){
            this.setState({
                status: 'normal',
                message: parentMsg,
            });
        }
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
            textStyle={{ color: '#ffffff' }}
            rightColor='#ffffff'
            wrongColor='#ff0000'
            interval={1000}
        />
    );
  }
}