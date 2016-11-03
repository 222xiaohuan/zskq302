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
        <Text style={styles.btnText} onPress={this.props.updateGesturePwdCB.bind(this) }>修改手势密码</Text>
        <Text style={styles.btnText}>忘记手势密码</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height:100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  btnText:{
    color: '#ffffff'
  },
});