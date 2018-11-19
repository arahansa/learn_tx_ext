"use strict";
// 데커레이터 팩터리의 주안점
// 1. 데커레이터 함수는 자바스크립트 런타임이 자동으로 인자를 채워서 호출
// 2. 데커레이터 팩토리는 함수 정의를 반환해야함
// 3. 데커레이터 팩토리에서 정의한 인자는 데커레이터 함수 안에서 사용할 수 있다.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorFactory(name) {
    return function (constructor) {
        console.log("decorator function called with " + name);
    };
}
var ClassWithDecoratorFactory = /** @class */ (function () {
    function ClassWithDecoratorFactory() {
    }
    ClassWithDecoratorFactory = __decorate([
        decoratorFactory('testName')
    ], ClassWithDecoratorFactory);
    return ClassWithDecoratorFactory;
}());
