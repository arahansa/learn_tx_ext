"use strict";
function callbackFunction(text) {
    console.log("inside callback Function : " + text);
}
function doSomethingWithACallback(initialText, callback) {
    console.log("inside dosomething with a callback " + initialText);
    callback(initialText);
}
doSomethingWithACallback("mytext", callbackFunction);
// error
// doSomethingWithACallback("myText", "this is not function")
