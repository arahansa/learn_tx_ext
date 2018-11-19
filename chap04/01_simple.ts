function simpleDecorator(constructor : Function){
    console.log('simple Decorator called')
}


@simpleDecorator
class ClassWithSimpleDecorator{

}


let instance1 = new ClassWithSimpleDecorator()
let instance2 = new ClassWithSimpleDecorator()

console.log(`instance1 : ${instance1}`)
console.log(`instance2 : ${instance2}`)


