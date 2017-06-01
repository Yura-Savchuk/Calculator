import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Platform,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import StatusBar from './components/StatusBar'
import Calculation from './calculation/Calculation'
import OperationAddition from './calculation/OperationAddition'
import OperationSub from './calculation/OperationSub'
import OperationMultiplication from './calculation/OperationMultiplication'
import OperationDivide from './calculation/OperationDivide'

export default class CalculatorScreen extends Component {

  constructor(props) {
    super(props)
    this.calc = new Calculation()
    this.state = {
         text: this.calc.text
      }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        <Text style={styles.appBar}>Калькулятор</Text>
        <View style={styles.content} >
          <Text style={styles.textInput}>{this.state.text}</Text>
          <View style={styles.buttonsRow}>
            <TouchableHighlight style={styles.buttonLeft}
                underlayColor='#99d9f4'
                onPress={this.onPressButtonClear.bind(this)}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={this.onPressRemoveLast.bind(this)}>
              <Text style={styles.buttonText}>&larr;</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={this.onPressButtonPercent.bind(this)}>
              <Text style={styles.buttonText}>%</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonRight}
                underlayColor='#99d9f4'
                onPress={this.onPressButtonDivide.bind(this)}>
              <Text style={styles.buttonText}>&divide;</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonsRow}>
            <TouchableHighlight style={styles.buttonLeft}
                underlayColor='#99d9f4'
                onPress={() => this.onPressNumberButton(7)}
                >
              <Text style={styles.buttonText}>7</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={() => this.onPressNumberButton(8)}
                >
              <Text style={styles.buttonText}>8</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={() => this.onPressNumberButton(9)}
                >
              <Text style={styles.buttonText}>9</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonRight}
                underlayColor='#99d9f4'
                onPress={this.onPressButtonMultiplication.bind(this)}>
              <Text style={styles.buttonText}>&times;</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonsRow}>
            <TouchableHighlight style={styles.buttonLeft}
                underlayColor='#99d9f4'
                onPress={() => this.onPressNumberButton(4)}
                >
              <Text style={styles.buttonText}>4</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={() => this.onPressNumberButton(5)}
                >
              <Text style={styles.buttonText}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={() => this.onPressNumberButton(6)}
                >
              <Text style={styles.buttonText}>6</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonRight}
                underlayColor='#99d9f4'
                onPress={this.onPressButtonSub.bind(this)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonsRow}>
            <TouchableHighlight style={styles.buttonLeft}
                underlayColor='#99d9f4'
                onPress={() => this.onPressNumberButton(1)}
                >
              <Text style={styles.buttonText}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={() => this.onPressNumberButton(2)}
                >
              <Text style={styles.buttonText}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={() => this.onPressNumberButton(3)}
                >
              <Text style={styles.buttonText}>3</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonRight}
                underlayColor='#99d9f4'
                onPress={this.onPressButtonAddition.bind(this)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonsRow}>
            <TouchableHighlight style={styles.buttonLeft}
                underlayColor='#99d9f4'
                onPress={() => {
                  this.onPressNumberButton(0)
                  this.onPressNumberButton(0)
                }}
                >
              <Text style={styles.buttonText}>00</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={() => this.onPressNumberButton(0)}
                >
              <Text style={styles.buttonText}>0</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={this.onPressButtonPoint.bind(this)}>
              <Text style={styles.buttonText}>.</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonEquals}
                underlayColor='#99d9f4'
                onPress={this.onPressButtonCountResult.bind(this)}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }

  onPressNumberButton(number) {
    this.calc.addValue(number)
    this.setState({text: this.calc.text})
  }

  onPressButtonClear() {
    this.calc.clear()
    this.setState({text: this.calc.text})
  }

  onPressRemoveLast() {
    this.calc.removeLast()
    this.setState({text: this.calc.text})
  }

  onPressButtonAddition() {
    this.calc.setOperand(new OperationAddition())
    this.setState({text: this.calc.text})
  }

  onPressButtonSub() {
    this.calc.setOperand(new OperationSub())
    this.setState({text: this.calc.text})
  }

  onPressButtonMultiplication() {
    this.calc.setOperand(new OperationMultiplication())
    this.setState({text: this.calc.text})
  }

  onPressButtonDivide() {
    this.calc.setOperand(new OperationDivide())
    this.setState({text: this.calc.text})
  }

  onPressButtonPercent() {
    this.calc.definePercent()
    this.setState({text: this.calc.text})
  }

  onPressButtonPoint() {
    this.calc.addPointToValue()
    this.setState({text: this.calc.text})
  }

  onPressButtonCountResult() {
    this.calc.countResult()
    this.setState({text: this.calc.text})
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
    height: 46,
    padding: 4
  },
  header: {
    backgroundColor: 'red'
  },
  headerTitle: {
    backgroundColor: 'blue'
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center'
  },
  buttonLeft: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonEquals: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    backgroundColor: '#ff3232',
    borderColor: '#ff0000',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonRight: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    backgroundColor: '#c6dcff',
    borderColor: '#c6dcff',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonsRow: {
    height: 60,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
