import React from "react"
import CalcValueUtil from "./CalcValueUtil"

export default class Value {

  constructor(amount) {
    this.amount = amount
    this.pendingPoint = false
  }

  addPoint() {
    if (this.amount%1 == 0 && !this.pendingPoint) {
      this.pendingPoint = true
    }
  }

  addDigit(digit) {
    var strValue = CalcValueUtil.numberToString(this.amount)
    console.log("Old value: " + strValue);
    if (this.pendingPoint) {
      strValue += "."
      this.pendingPoint = false
    }
    strValue += digit
    this.amount = CalcValueUtil.stringToFloat(strValue)
    console.log("New value: " + this.amount);
  }

  removeLast() {
    if (this.pendingPoint) {
      this.pendingPoint = false
      return false
    }
    var strAmount = CalcValueUtil.numberToString(this.amount)
    if (strValue.length <= 1) {
      return false
    }
    strValue = strValue.substring(0, strValue.length-1)
    this.amount = CalcValueUtil.stringToFloat(strValue)
  }

  toString() {
    return this.amount.toString() + (this.pendingPoint ? "." : "")
  }

}
