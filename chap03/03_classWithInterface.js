"use strict";
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.print = function () {
        console.log('ClassA.print()');
    };
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.print = function () {
        console.log('ClassB.print()');
    };
    return ClassB;
}());
function printClass(a) {
    a.print();
}
var ClassC = /** @class */ (function () {
    function ClassC() {
    }
    ClassC.prototype.print = function () { console.log('ClassC.print()'); };
    return ClassC;
}());
var ClassD = /** @class */ (function () {
    function ClassD() {
    }
    ClassD.prototype.print = function () { console.log('ClassD.print()'); };
    return ClassD;
}());
var classC = new ClassC();
printClass(classC);
printClass(new ClassD());
