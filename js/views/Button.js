'use strict';
import React,{Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

class Button extends Component{
    render(){
      return(
        <TouchableOpacity
        activeOpacity={0.5}
        style={this.props.style}
        onPress={this.props.onPress}
        >
          <Text style={{fontSize:16,color:'#fff'}}>{this.props.text}</Text>
        </TouchableOpacity>
      )
    }
}

module.exports = Button;