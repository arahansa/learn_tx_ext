"use strict";
var ClassWithPublicProperty = /** @class */ (function () {
    function ClassWithPublicProperty(id) {
        this.id = id;
    }
    return ClassWithPublicProperty;
}());
var publicAccess = new ClassWithPublicProperty(10);
console.log(publicAccess);
publicAccess.id = 1;
console.log(publicAccess);
var ClassWithPrivateProperty = /** @class */ (function () {
    function ClassWithPrivateProperty(id) {
        this.id = id;
    }
    return ClassWithPrivateProperty;
}());
var privateAccess = new ClassWithPrivateProperty(1);
// error :: privateAccess.id = 1
console.log("priv : " + privateAccess);
