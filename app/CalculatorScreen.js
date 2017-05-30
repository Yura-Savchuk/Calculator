import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Platform
} from 'react-native';
import StatusBar from './components/StatusBar'

export default class CalculatorScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        <Text style={styles.appBar}>Калькулятор</Text>
        <View style={styles.content} >
          <Text style={styles.textInput}>0</Text>
        </View>
      </View>
    );
  }
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
