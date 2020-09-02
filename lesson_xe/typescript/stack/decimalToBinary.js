"use strict";
exports.__esModule = true;
var stack_1 = require("./lib/stack");
var decimalToBinary = function (decNumber) {
    var stack = new stack_1["default"]();
    var number = decNumber;
    var rem;
    var binaryString = '';
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
console.log(decimalToBinary(4));
