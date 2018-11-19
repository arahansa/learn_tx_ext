"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function simpleDecorator(constructor) {
    console.log('simple Decorator called');
}
var ClassWithSimpleDecorator = /** @class */ (function () {
    function ClassWithSimpleDecorator() {
    }
    ClassWithSimpleDecorator = __decorate([
        simpleDecorator
    ], ClassWithSimpleDecorator);
    return ClassWithSimpleDecorator;
}());
var instance1 = new ClassWithSimpleDecorator();
var instance2 = new ClassWithSimpleDecorator();
console.log("instance1 : " + instance1);
console.log("instance2 : " + instance2);
