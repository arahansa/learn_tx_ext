"use strict";
function fnDelayedPromise(resolve, reject) {
    function afterTimeout() {
        resolve();
    }
    setTimeout(afterTimeout, 2000);
}
function delayedResponsePromise() {
    return new Promise(fnDelayedPromise);
}
function delayedPromise() {
    return new Promise(function (resolve, reject) {
        function afterTimeout() {
            resolve();
        }
        setTimeout(afterTimeout, 1000);
    });
}
function callDelayedPromise() {
    console.log("calling delayedPromise");
    delayedPromise().then(function () { console.log("delayedPromise.then()"); });
}
callDelayedPromise();
