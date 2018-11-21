"use strict";
var FirstClass = /** @class */ (function () {
    function FirstClass() {
    }
    return FirstClass;
}());
var SecondClass = /** @class */ (function () {
    function SecondClass() {
    }
    return SecondClass;
}());
var GenericCreator = /** @class */ (function () {
    function GenericCreator() {
    }
    GenericCreator.prototype.create = function (arg1) {
        return new arg1();
    };
    return GenericCreator;
}());
var creator1 = new GenericCreator();
var firstClass = creator1.create(FirstClass);
var creator2 = new GenericCreator();
var secondClass = creator2.create(SecondClass);
