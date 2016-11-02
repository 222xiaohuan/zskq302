import { 
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';

export default class WaterMask extends Component{
    constructor(props) {
      super(props);
  }

renderMultiTexts(){
  let multiTexts = "";
  for(let i=0; i<7; i++){
    multiTexts += this.props.maskText + "   ";
  }
  return multiTexts;
}

renderText(){
  let lines = [];
  for(let i=0; i<14; i++){
    lines.push(
      
      <View key = {i} style={{flexDirection: 'row'}}>
          <Text key = {i} numberOfLines={1} style={styles.waterMaskText} >{this.renderMultiTexts()}</Text>
      </View>
      
    )
  }
  
  return (
    <View>
      {lines}
    </View>
  );
}

  render() {
    return (
      <View style={styles.container} >
          { this.renderText()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  waterMaskText: {
    fontSize: 15,
    marginTop: 40,
    opacity: 0.4,
    transform: [{ rotate: '-30deg'}],
    marginLeft: -30,
  }
});