import React from "react"
import Operand from './Operand'
import Calculation from './Calculation'
import Value from './Value'

export default class OperationAddition extends Operand {

  calculate(calculation) {
    return calculation.leftValue.amount + calculation.rightValue.amount
  }

  asString() {
    return "+"
  }

}
