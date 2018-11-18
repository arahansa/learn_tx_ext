interface IOptionProp{
    id:number;
    name?:string;
}

let idOnly: IOptionProp = {id:1}
let idAndName : IOptionProp = {id:2, name:"idAndName"}

console.log(idAndName)

idAndName = idOnly

console.log(idOnly)
console.log(idAndName)
