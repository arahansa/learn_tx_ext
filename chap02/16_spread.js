"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var nameObj = { name: "nameObj" };
var idObj = { id: 2 };
var obj3 = __assign({}, nameObj, idObj);
console.log("obj3.id : " + obj3.id + " ");
console.log("obj3.name : " + obj3.name + " ");
