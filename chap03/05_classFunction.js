"use strict";
var ComplexType = /** @class */ (function () {
    function ComplexType(idArg, nameArg) {
        this.id = idArg;
        this.name = nameArg;
    }
    ComplexType.prototype.print = function () {
        return "id: " + this.id + ", name : " + this.name;
    };
    ComplexType.prototype.usingDefalutParameters = function (defaultArg1) {
        if (defaultArg1 === void 0) { defaultArg1 = 0; }
        this.id = defaultArg1;
    };
    ComplexType.prototype.usingFunctionalCallbacks = function (callback) {
        callback(this.id);
    };
    ComplexType.prototype.usingOptionalParameters = function (optionalArg1) {
        if (optionalArg1) {
            this.id = optionalArg1;
        }
    };
    ComplexType.prototype.usingRestSyntax = function () {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        if (argArray.length > 0) {
            this.id = argArray[0];
        }
    };
    ComplexType.prototype.usingTheAnyKeyword = function (arg1) {
        this.id = arg1;
    };
    return ComplexType;
}());
