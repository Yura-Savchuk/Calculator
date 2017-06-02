import React from "react"

const EMPTY_STRING = "";
const MAX_VALUE_LENGTH = 10;

const CalcValueUtil = {
    numberToString: function (number) {
        if (number === null || number === 0) {
            return EMPTY_STRING
        }
        return number.toString()
    },

    stringToInt: function (stringValue) {
        if (stringValue === null || stringValue.trim().length === 0) {
            return 0
        }
        if (stringValue.length > MAX_VALUE_LENGTH) {
            stringValue = stringValue.substring(0, MAX_VALUE_LENGTH)
        }
        return parseInt(stringValue)
    },

    stringToFloat: function (stringValue) {
        if (stringValue === null || stringValue.trim().length === 0) {
            return 0
        }
        if (stringValue.length > MAX_VALUE_LENGTH) {
            stringValue = stringValue.substring(0, MAX_VALUE_LENGTH)
        }
        return parseFloat(stringValue)
    }
};

export default CalcValueUtil
