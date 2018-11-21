"use strict";
function delayedPromiseWithParam() {
    return new Promise(function (resolve, reject) {
        function afterWait() {
            resolve("resolved_within_promise");
        }
        setTimeout(afterWait, 2000);
    });
}
function callPromiseWithParam() {
    console.log("calling delayedPromiseWithParam");
    delayedPromiseWithParam().then(function (message) {
        console.log("Promise.then() returned " + message + " ");
    });
}
callPromiseWithParam();
