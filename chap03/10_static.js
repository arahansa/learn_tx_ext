"use strict";
var StaticClass = /** @class */ (function () {
    function StaticClass() {
    }
    StaticClass.printTwo = function () {
        console.log("2");
    };
    return StaticClass;
}());
StaticClass.printTwo();
var StaticProperty = /** @class */ (function () {
    function StaticProperty() {
    }
    StaticProperty.prototype.updateCount = function () {
        StaticProperty.count++;
    };
    StaticProperty.count = 0;
    return StaticProperty;
}());
var firstInstance = new StaticProperty();
console.log("StaticProperty count = " + StaticProperty.count);
firstInstance.updateCount();
console.log("StaticProperty count = " + StaticProperty.count);
