"use strict";
function errorPromise() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}
function callErrorPromise() {
    console.log("calling errorPromise");
    errorPromise().then(function () { console.log("no error."); }).catch(function () { console.log("an error occurred"); });
}
callErrorPromise();
