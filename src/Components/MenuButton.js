import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View,
        TouchableOpacity} from 'react-native';


class MenuButton extends Component{

  constructor(props) {
    super(props);
    this.state = {};

    let flexProp = 1;
    if(props.flexProp){
      flexProp = parseInt(props.flexProp);
    }

    let bg = '#E0E0E0';
    if(props.bg){
      bg = props.bg
    }

    let textColor = 'black';
    if(props.textColor){
      textColor = props.textColor;
    }

    this.styles = StyleSheet.create({
      area: {
        flex: flexProp,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: bg
      } ,
      text: {
        fontSize: 18,
        color: textColor
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.area} >
        <Text style={this.styles.text} >{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default MenuButton;