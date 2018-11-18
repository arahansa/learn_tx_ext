function callbackFunction(text: string) {
    console.log(`inside callback Function : ${text}`)
}

function doSomethingWithACallback(
    initialText: string,
    callback: (initialText: string) => void
) {
    console.log(`inside dosomething with a callback ${initialText}`)
    callback(initialText)
}

doSomethingWithACallback("mytext", callbackFunction)
// error
// doSomethingWithACallback("myText", "this is not function")

