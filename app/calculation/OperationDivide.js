import React from "react"
import Operand from './Operand'

export default class OperationDivide extends Operand {

  calculate(calculation) {
    return calculation.leftValue.amount / calculation.rightValue.amount
  }

  asString() {
    return "\u00f7"
  }

}
