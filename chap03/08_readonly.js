"use strict";
var ClassWithReadOnly = /** @class */ (function () {
    function ClassWithReadOnly(name) {
        this.name = name;
    }
    ClassWithReadOnly.prototype.setReadOnly = function (_name) {
        // compile error
        // this.name = _name;
    };
    return ClassWithReadOnly;
}());
