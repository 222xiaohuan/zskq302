import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { Component } from 'react';
import WaterMask from '../components/WaterMask';

export default class WaterMaskDemo extends Component{
    constructor(props) {
      super(props);
      this.state = {
        maskText: "eric sun",
      }
  }

  render() {
    return (
      <View style={styles.container} >

        <ScrollView>  
          <Text style={styles.testText}>滚动文本</Text> 
          <Text style={styles.testText}>滚动文本</Text> 
          <Text style={styles.testText}>滚动文本</Text> 
          <Text style={styles.testText}>滚动文本</Text> 
          <Text style={styles.testText}>滚动文本</Text> 
          <Text style={styles.testText}>滚动文本</Text> 
          <Text style={styles.testText}>滚动文本</Text> 
          <Text style={styles.testText}>滚动文本</Text> 
          <Text style={styles.testText}>滚动文本</Text> 
          <Text style={styles.testText}>滚动文本</Text> 
        </ScrollView>

        <WaterMask maskText={this.state.maskText} />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  },

  testText: {
    margin:100,
  }

});