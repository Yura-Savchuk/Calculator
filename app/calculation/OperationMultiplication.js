import React from "react"
import Operand from './Operand'

export default class OperationMultiplication extends Operand {

  calculate(calculation) {
    return calculation.leftValue.amount * calculation.rightValue.amount
  }

  asString() {
    return "\u00d7"
  }

}
