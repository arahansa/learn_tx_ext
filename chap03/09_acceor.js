"use strict";
var ClassWithAccessors = /** @class */ (function () {
    function ClassWithAccessors(id) {
        this._id = id;
    }
    Object.defineProperty(ClassWithAccessors.prototype, "id", {
        get: function () {
            console.log("inside get id()");
            return this._id;
        },
        set: function (value) {
            console.log("inside set id() ");
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    return ClassWithAccessors;
}());
var classWithAccessor = new ClassWithAccessors(1);
classWithAccessor.id = 2;
console.log(classWithAccessor);
console.log(classWithAccessor.id);
