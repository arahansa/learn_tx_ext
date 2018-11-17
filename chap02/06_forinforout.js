"use strict";
var arrOfStrs = ["first", "second", "third"];
for (var itemKey in arrOfStrs) {
    var itemValue = arrOfStrs[itemKey];
    console.log("arrStrs[" + itemKey + "]  = " + itemValue);
}
for (var _i = 0, arrOfStrs_1 = arrOfStrs; _i < arrOfStrs_1.length; _i++) {
    var arrayItem = arrOfStrs_1[_i];
    console.log("arrItem = " + arrayItem + " ");
}
