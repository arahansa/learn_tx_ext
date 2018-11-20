"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function parameterDec(target, methodName, parameterIndex) {
    console.log("target: " + target);
    console.log("methodName: " + methodName);
    console.log("parameterIndex : " + parameterIndex);
}
var ClassWithParamDec = /** @class */ (function () {
    function ClassWithParamDec() {
    }
    ClassWithParamDec.prototype.print = function (value) {
        console.log('hi', value);
    };
    __decorate([
        __param(0, parameterDec),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ClassWithParamDec.prototype, "print", null);
    return ClassWithParamDec;
}());
new ClassWithParamDec().print('arahansa');
