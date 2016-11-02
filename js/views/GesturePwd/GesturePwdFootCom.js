import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'React';

export default class GesturePwdFootCom extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.updateText} >修改手势密码</Text>
        <Text>忘记手势密码</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height:100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateText:{
    marginRight:40,
  },
});