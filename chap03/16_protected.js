"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClassUsingProtected = /** @class */ (function () {
    function ClassUsingProtected() {
    }
    ClassUsingProtected.prototype.getId = function () {
        return this.id;
    };
    return ClassUsingProtected;
}());
var DerivedFromProtected = /** @class */ (function (_super) {
    __extends(DerivedFromProtected, _super);
    function DerivedFromProtected() {
        var _this = _super.call(this) || this;
        _this.id = 0;
        return _this;
    }
    return DerivedFromProtected;
}(ClassUsingProtected));
console.log(new DerivedFromProtected());
