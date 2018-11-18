"use strict";
function testArgs() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i] = arguments[_i];
    }
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argArray[" + i + " = " + argArray[i] + " ");
            console.log("arguments[" + i + " = " + arguments[i] + " ");
        }
    }
}
testArgs(9);
testArgs(1, 2, 3);
