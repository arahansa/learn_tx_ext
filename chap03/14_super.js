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
var BaseClassWithConstructor = /** @class */ (function () {
    function BaseClassWithConstructor(id) {
        this.id = id;
    }
    return BaseClassWithConstructor;
}());
var DerivedClassWithConstructor = /** @class */ (function (_super) {
    __extends(DerivedClassWithConstructor, _super);
    function DerivedClassWithConstructor(id, name) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        return _this;
    }
    return DerivedClassWithConstructor;
}(BaseClassWithConstructor));
