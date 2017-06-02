import React from "react"
import Value from './Value'

const EMPTY_STRING = "0";

export default class Calculation {

  constructor() {
    this.leftValue = null;
    this.rightValue = null;
    this.operand = null;
    this.result = null;
    this.text = EMPTY_STRING
  }

  addValue(value) {
    this.setResultToLeftValueIfExist();
    if (this.operand === null) {
      this.addLeftValue(value)
    } else {
      this.addRightValue(value)
    }
    this.refreshText()
  }

  setResultToLeftValueIfExist() {
    if (this.result !== null) {
      let value = this.result;
      this.clear();
      this.leftValue = new Value(value)
    }
  }

  addLeftValue(value) {
    if (this.leftValue === null) {
      this.leftValue = new Value(value)
    } else {
      this.leftValue.addDigit(value)
    }
  }

  addRightValue(value) {
    if (this.rightValue === null) {
      this.rightValue = new Value(value)
    } else {
      this.rightValue.addDigit(value)
    }
  }

  refreshText() {
    if (this.result !== null) {
      this.text = this.result.toString();
      return
    }
    if (this.leftValue === null) {
      this.text = EMPTY_STRING;
      return
    }
    this.text = this.leftValue.toString();
    if (this.operand === null) {
      return
    }
    this.text += " " + this.operand.asString();
    if (this.rightValue === null) {
      return
    }
    this.text += " " + this.rightValue.toString()
  }

  clear() {
    this.leftValue = null;
    this.rightValue = null;
    this.operand = null;
    this.result = null;
    this.refreshText()
  }

  removeLast() {
    if (this.rightValue !== null) {
      this.removeLastFromRightValue()
    } else if (this.operand !== null) {
      this.operand = null
    } else if (this.leftValue !== null) {
      this.removeLastFromLeftValue()
    }
    this.refreshText()
  }

  removeLastFromRightValue() {
    if (!this.rightValue.removeLast()) {
      this.rightValue = null
    }
  }

  removeLastFromLeftValue() {
    if (!this.leftValue.removeLast()) {
      this.leftValue = null
    }
  }

  setOperand(operand) {
    this.setResultToLeftValueIfExist();
    this.operand = operand;
    this.refreshText()
  }

  definePercent() {
    if (this.leftValue === null && this.result === null) return;
    let numberValue = this.leftValue.amount;
    if (this.result !== null) {
      numberValue = this.result;
      this.result = null
    }
    this.leftValue = new Value(numberValue/100);
    this.rightValue = null;
    this.operand = null;
    this.refreshText()
  }

  addPointToValue() {
    this.setResultToLeftValueIfExist();
    if (this.rightValue !== null) {
      this.rightValue.addPoint()
    } else {
      if (this.leftValue === null) this.leftValue = new Value(0);
      this.leftValue.addPoint()
    }
    this.refreshText()
  }

  countResult() {
    if (this.leftValue === null || this.rightValue === null || this.operand === null) {
      return
    }
    this.result = this.operand.calculate(this);
    this.refreshText()
  }

}
