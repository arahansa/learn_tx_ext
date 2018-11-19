function simpleDecorator(constructor : Function){
    console.log('simple Decorator called')
}

function secondDecorator(constructor : Function){
    console.log('second Decorator called')
}


@simpleDecorator
@secondDecorator
class ClassWithSimpleDecorator{

}



