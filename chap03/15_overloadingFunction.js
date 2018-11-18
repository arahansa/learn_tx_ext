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
var BaseClassWithFunction = /** @class */ (function () {
    function BaseClassWithFunction(id) {
        this.id = id;
    }
    BaseClassWithFunction.prototype.getProperties = function () {
        return "id: " + this.id;
    };
    return BaseClassWithFunction;
}());
var DerivedClassWithFunction = /** @class */ (function (_super) {
    __extends(DerivedClassWithFunction, _super);
    function DerivedClassWithFunction(id, name) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        return _this;
    }
    DerivedClassWithFunction.prototype.getProperties = function () {
        return _super.prototype.getProperties.call(this) + " , name " + this.name;
    };
    return DerivedClassWithFunction;
}(BaseClassWithFunction));
console.log(new DerivedClassWithFunction(1, "name").getProperties());
