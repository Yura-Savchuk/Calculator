import React from "react"

const EMPTY_STRING = ""
const MAX_VALUE_LENGTH = 10

var CalcValueUtil = {
  intToString: function(intValue) {
    if (intValue == null || intValue == 0) {
      return EMPTY_STRING
    }
    return intValue.toString()
  },

  stringToInt: function(stringValue) {
    if (stringValue == null || stringValue.trim().length == 0) {
      return 0
    }
    if (stringValue.length > MAX_VALUE_LENGTH) {
      stringValue = stringValue.substring(0, MAX_VALUE_LENGTH)
    }
    return parseInt(stringValue)
  }
}

export default CalcValueUtil
