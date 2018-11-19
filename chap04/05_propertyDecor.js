"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
        propertyDec
    ], ClassWithPropertyDec.prototype, "name", void 0);
    return ClassWithPropertyDec;
}());
var classWithPropertyDec = new ClassWithPropertyDec('test');
console.log('classwithproeprtydec ', classWithPropertyDec);
var StaticClassWithPropertyDec = /** @class */ (function () {
    function StaticClassWithPropertyDec() {
    }
    __decorate([
        propertyDec
    ], StaticClassWithPropertyDec, "staticName", void 0);
    return StaticClassWithPropertyDec;
}());
var statics = new StaticClassWithPropertyDec();
console.log('static property ', statics);
