"use strict";
var classWithAutomaticPropeties = /** @class */ (function () {
    function classWithAutomaticPropeties(id, name) {
        this.id = id;
        this.name = name;
    }
    return classWithAutomaticPropeties;
}());
var myAutoClass = new classWithAutomaticPropeties(1, "className");
myAutoClass.id = 2;
console.log(myAutoClass);
