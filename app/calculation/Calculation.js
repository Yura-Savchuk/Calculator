import React from "react"
import Operand from './Operand'
import CalcValueUtil from './CalcValueUtil'

const EMPTY_STRING = "0"

export default class Calculation {

  constructor() {
    this.leftValue = null
    this.rightValue = null
    this.operand = null
    this.result = null
    this.text = EMPTY_STRING
  }

  addValue(value) {
    if (this.result != null) this.clear()
    if (this.operand == null) {
      this.addLeftValue(value)
    } else {
      this.addRightValue(value)
    }
    this.refreshText()
  }

  addLeftValue(value) {
    var strValue = CalcValueUtil.intToString(this.leftValue)
    console.log("Old value: " + strValue);
    strValue += value
    this.leftValue = CalcValueUtil.stringToInt(strValue)
    console.log("New value: " + this.leftValue);
  }

  addRightValue(value) {
    var strValue = CalcValueUtil.intToString(this.rightValue)
    console.log("Old value: " + strValue);
    strValue += value
    this.rightValue = CalcValueUtil.stringToInt(strValue)
    console.log("New value: " + this.rightValue);
  }

  refreshText() {
    if (this.result != null) {
      this.text = this.result.toString()
      return
    }
    if (this.leftValue == null) {
      this.text = EMPTY_STRING
      return
    }
    this.text = this.leftValue.toString()
    if (this.operand == null) {
      return
    }
    this.text += " " + this.operand.asString()
    if (this.rightValue == null) {
      return
    }
    this.text += " " + this.rightValue.toString()
  }

  clear() {
    this.leftValue = null
    this.rightValue = null
    this.operand = null
    this.result = null
    this.refreshText()
  }

  removeLast() {
    if (this.rightValue != null) {
      this.removeLastFromRightValue()
    } else if (this.operand != null) {
      this.operand = null
    } else if (this.leftValue != null) {
      this.removeLastFromLeftValue()
    }
    this.refreshText()
  }

  removeLastFromRightValue() {
    var strValue = CalcValueUtil.intToString(this.rightValue)
    console.log("Old value: " + strValue);
    if (strValue.length <= 1) {
      this.rightValue = null
      return
    }
    strValue = strValue.substring(0, strValue.length-1)
    this.rightValue = CalcValueUtil.stringToInt(strValue)
    console.log("New value: " + this.rightValue);
  }

  removeLastFromLeftValue() {
    var strValue = CalcValueUtil.intToString(this.leftValue)
    console.log("Old value: " + strValue);
    if (strValue.length <= 1) {
      this.leftValue = null
      return
    }
    strValue = strValue.substring(0, strValue.length-1)
    this.leftValue = CalcValueUtil.stringToInt(strValue)
    console.log("New value: " + this.leftValue);
  }

  setOperand(operand) {
    this.operand = operand
    this.refreshText()
  }

  countResult() {
    if (this.leftValue == null || this.rightValue == null || this.operand == null) {
      return
    }
    this.result = this.operand.calculate(this)
    this.refreshText()
  }

}
