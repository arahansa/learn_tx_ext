"use strict";
function promiseWithInterface() {
    return new Promise(function (resolve, reject) {
        resolve({ message: "test", id: 1 });
    });
}
promiseWithInterface().then(function (value) { return console.log('value : ', value); });
