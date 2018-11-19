


function classConstructorDec(constructor : Function){
    console.log(`constructor : ${constructor}`)
    console.log(`constructor : ${(<any>constructor).name}`)
    constructor.prototype.testProperty = "testProperty_value"
}


@classConstructorDec
class ClassWithConstructor{

}

let classConstructorInstance = new ClassWithConstructor();
console.log(`classConstructorINstance.testProperty : ${(<any>classConstructorInstance).testProperty})`)
