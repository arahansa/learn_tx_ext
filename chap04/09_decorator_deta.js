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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function metadataParameterDec(target, methodName, parameterIndex) {
    var designType = Reflect.getMetadata("design:type", target, methodName);
    console.log("designType: " + designType);
    var designParamTypes = Reflect.getMetadata("design:paramtypes", target, methodName);
    console.log("paramtypes : " + designParamTypes);
    var designReturnType = Reflect.getMetadata("design:returntype", target, methodName);
    console.log("returntypes : " + designReturnType);
}
var ClassWithMetaData = /** @class */ (function () {
    function ClassWithMetaData() {
    }
    ClassWithMetaData.prototype.print = function (id, name) {
        return 1000;
    };
    __decorate([
        __param(0, metadataParameterDec),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", Number)
    ], ClassWithMetaData.prototype, "print", null);
    return ClassWithMetaData;
}());
