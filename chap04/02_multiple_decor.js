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
function secondDecorator(constructor) {
    console.log('second Decorator called');
}
var ClassWithSimpleDecorator = /** @class */ (function () {
    function ClassWithSimpleDecorator() {
    }
    ClassWithSimpleDecorator = __decorate([
        simpleDecorator,
        secondDecorator
    ], ClassWithSimpleDecorator);
    return ClassWithSimpleDecorator;
}());
