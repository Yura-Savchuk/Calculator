import React from "react"
import Operand from './Operand'

export default class OperationSub extends Operand {

  calculate(calculation) {
    return calculation.leftValue.amount - calculation.rightValue.amount
  }

  asString() {
    return "-"
  }

}
