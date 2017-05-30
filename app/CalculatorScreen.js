import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  Platform
} from 'react-native';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class CalculatorScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        <Text style={styles.appBar}>Калькулятор</Text>
        <View style={styles.content} >
          <Text style={styles.textInput}>0</Text>
        </View>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 8
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 30,
    padding: 4
  },
  header: {
    backgroundColor: 'red'
  },
  headerTitle: {
    backgroundColor: 'blue'
  }
});
