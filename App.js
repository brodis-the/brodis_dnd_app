import React, {Component} from 'react';
import {StyleSheet,
        View,
        Text} from 'react-native';
import MenuButton from './src/Components/MenuButton'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.body}>

        <View style={styles.line}>
          <Text style={styles.headerPage}>Hello World!</Text>
        </View>
        
        {/* Primeira Linha */}
        <View style={styles.line}>
          <MenuButton title='Button 1' bg='blue' textColor='white' />
          <MenuButton title='Button 2' bg='red' />
        </View>

        {/* Segunda Linha */}
        <View style={styles.line}>
          <MenuButton title='Button 3' bg='green' />
          <MenuButton title='Button 4' bg='brown' textColor='white' />
        </View>

        {/* Terceira Linha */}
        <View style={styles.line}>
          <MenuButton title='Button 5' bg='black' textColor='white' />
          <MenuButton title='Button 6' bg='purple' />
        </View>

        {/* Quarta linha */}
        <View style={styles.line}>
          <MenuButton title='Button 8' bg='white' />
          <MenuButton title='Button 7' bg='yellow' textColor='green' />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  line: {
    flex: 1,
    flexDirection: 'row'
  },
  headerPage: {
    paddingTop: 40,
    backgroundColor: 'orange',
    color: 'black',
    fontSize: 50,
    flex: 1,
    textAlign: 'center'
  }
});
