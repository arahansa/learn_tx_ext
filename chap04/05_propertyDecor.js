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
function propertyDec(target, propertyKey) {
    console.log("target : " + target);
    console.log("target constructor : " + target.constructor);
    console.log("className : " + target.constructor.name);
    console.log("propertyKey : " + propertyKey);
}
var ClassWithPropertyDec = /** @class */ (function () {
    function ClassWithPropertyDec(name) {
        this.name = name;
    }
    __decorate([
        propertyDec,
        __metadata("design:type", String)
    ], ClassWithPropertyDec.prototype, "name", void 0);
    return ClassWithPropertyDec;
}());
var classWithPropertyDec = new ClassWithPropertyDec('test');
console.log('classwithproeprtydec ', classWithPropertyDec);
var StaticClassWithPropertyDec = /** @class */ (function () {
    function StaticClassWithPropertyDec() {
    }
    __decorate([
        propertyDec,
        __metadata("design:type", String)
    ], StaticClassWithPropertyDec, "staticName", void 0);
    return StaticClassWithPropertyDec;
}());
var statics = new StaticClassWithPropertyDec();
console.log('static property ', statics);
function methodDec(target, methodName, descriptor) {
    console.log("target: " + target);
    console.log("methodName: " + methodName);
    console.log("target[methodName] : " + target[methodName]);
}
console.log('----');
var ClassWithMethodDec = /** @class */ (function () {
    function ClassWithMethodDec() {
    }
    ClassWithMethodDec.prototype.print = function (output) {
        console.log("ClassWithMethodDec.print (" + output + ") called .");
    };
    __decorate([
        methodDec,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ClassWithMethodDec.prototype, "print", null);
    return ClassWithMethodDec;
}());
console.log("methodDoc : " + new ClassWithMethodDec());
