"use strict";
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
        this.id = 1;
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass Print() called " + this.id);
    };
    return SimpleClass;
}());
var mySimpleClasss = new SimpleClass();
mySimpleClasss.id = 1001;
mySimpleClasss.print();
