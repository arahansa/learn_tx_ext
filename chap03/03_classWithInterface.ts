class ClassA{
    print() {
        console.log('ClassA.print()')
    }
}

class ClassB{
    print(){
        console.log('ClassB.print()')
    }
}


interface IPrint{
    print() : void
}

function printClass( a: IPrint){
    a.print()
}

class ClassC implements IPrint{
    print() {console.log('ClassC.print()')}
}

class ClassD implements IPrint{
    print() {console.log('ClassD.print()')}
}


let classC = new ClassC();
printClass(classC)
printClass(new ClassD())
