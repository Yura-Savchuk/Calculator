import React from "react"
import Operand from './Operand'
import Calculation from './Calculation'

export default class OperationSub extends Operand {

  calculate(calculation) {
    return calculation.leftValue - calculation.rightValue
  }

  asString() {
    return "-"
  }

}
