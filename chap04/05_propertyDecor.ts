


function propertyDec(target: any, propertyKey: string){
    console.log(`target : ${target}`)
    console.log(`target constructor : ${target.constructor}`)
    console.log(`className : ${target.constructor.name}`)
    console.log(`propertyKey : ${propertyKey}`)
}


class ClassWithPropertyDec{
    @propertyDec
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}


let classWithPropertyDec = new ClassWithPropertyDec('test')
console.log('classwithproeprtydec ', classWithPropertyDec)


class StaticClassWithPropertyDec{
    @propertyDec
    static staticName: string;

    constructor() {
    }
}

let statics = new StaticClassWithPropertyDec();
console.log('static property ', statics)


function methodDec(target:any, methodName:string, descriptor?: PropertyDecorator){
    console.log(`target: ${target}`)
    console.log(`methodName: ${methodName}`)
    console.log(`target[methodName] : ${target[methodName]}`)
}

console.log('----')

class ClassWithMethodDec{
    @methodDec
    print(output: string) {
        console.log(`ClassWithMethodDec.print (${output}) called .`);
    }
}


console.log(`methodDoc : ${new ClassWithMethodDec()}`)
