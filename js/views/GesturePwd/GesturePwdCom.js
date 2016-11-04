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
    this.drawTimes = 0;
    this.drawFirst = null;
    this.drawSecond = null;
  }

    onEnd(password) {
        console.log('------', Consts.gesturePwdSelectedOperation);
        if(Consts.gesturePwdSelectedOperation == gesturePwdOperation.unlock
            || Consts.gesturePwdSelectedOperation == gesturePwdOperation.updateOrigin){
            Consts.gesturePwdDrawTimes <= 4 ? Consts.gesturePwdDrawTimes += 1 : Consts.gesturePwdDrawTimes;

            if (password == this.Password1 && Consts.gesturePwdDrawTimes < 4) {
                if(Consts.gesturePwdSelectedOperation == gesturePwdOperation.unlock){
                    this.setState({
                        status: 'right',
                        message: '密码正确'
                    });
                }
                if(Consts.gesturePwdSelectedOperation == gesturePwdOperation.updateOrigin){
                    this.setState({
                        status: 'right',
                        message: '原密码正确 请输入新手势密码'
                    });
                    Consts.gesturePwdSelectedOperation = gesturePwdOperation.updateConfirm;
                }
                Consts.gesturePwdDrawTimes = 0;
                // your codes to close this view
                return;
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

        if(Consts.gesturePwdSelectedOperation == gesturePwdOperation.updateConfirm){
            this.drawTimes += 1;           
            if(this.drawTimes == 1){
                this.drawFirst = password; 
                this.setState({
                    status: 'normal',
                    message: '请再次输入手势密码'
                });
            }      
            console.log('------ this.drawTimes ', this.drawTimes );    
            console.log('------ this.drawFirst', this.drawFirst);
            if(this.drawTimes == 2){
                this.drawSecond = password;
                if(this.drawFirst == this.drawSecond){
                    this.setState({
                        status: 'normal',
                        message: '两次手势密码输入一致，修改成功'
                    });
                }else{
                    this.setState({
                        status: 'wrong',
                        message: '两次手势密码输入不一致，请重试'
                    });
                }
                this.drawTimes = 1;
            }
            console.log('------ this.drawSecond', this.drawSecond);
        }

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

    updateOperation(){ 
        this.drawTimes = 0;      
        this.setState({
            status: 'normal',
            message: '请先输入原密码',
        }); 
    }

  render() {
    return (
       <PasswordGesture
            ref='pg'
            status={this.state.status}
            message={this.state.message}
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