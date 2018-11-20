"use strict";
var Concatenator = /** @class */ (function () {
    function Concatenator() {
    }
    Concatenator.prototype.concatenateArray = function (inputArray) {
        var returnString = "";
        for (var i = 0; i < inputArray.length; i++) {
            if (i > 0)
                returnString += ",";
            returnString += inputArray[i].toString();
        }
        return returnString;
    };
    return Concatenator;
}());
var stringConcat = new Concatenator();
var numberConcat = new Concatenator();
var concatResult = stringConcat.concatenateArray(["first", "second", "third"]);
console.log(concatResult);
console.log(numberConcat.concatenateArray([1, 2, 3]));
var MyClass = /** @class */ (function () {
    function MyClass(arg1) {
        this._name = arg1 + "_MyClass";
    }
    MyClass.prototype.toString = function () {
        return this._name;
    };
    return MyClass;
}());
var myArray = [
    new MyClass(1),
    new MyClass(2),
    new MyClass(3)
];
var myArrayConcatentator = new Concatenator();
var myArrayResult = myArrayConcatentator.concatenateArray(myArray);
console.log('myArray Result');
console.log(myArrayResult);
