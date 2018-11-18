class classWithAutomaticPropeties{
    constructor(public id:number, private name:string) {

    }
}

let myAutoClass = new classWithAutomaticPropeties(1, "className")
myAutoClass.id = 2;
console.log(myAutoClass)
