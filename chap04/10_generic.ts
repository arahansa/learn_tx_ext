class Concatenator< T > {
    concatenateArray(inputArray: Array< T >): string {
        let returnString = "";

        for (let i = 0; i < inputArray.length; i++) {
            if (i > 0)
                returnString += ",";
            returnString += inputArray[i].toString();
        }
        return returnString;
    }
}

var stringConcat = new Concatenator<string>();
var numberConcat = new Concatenator<number>();

let concatResult = stringConcat.concatenateArray(
    ["first", "second", "third" ]);
console.log(concatResult);

console.log(numberConcat.concatenateArray([1,2,3]))


class MyClass {
    private _name: string;
    constructor(arg1: number) {
        this._name = arg1 + "_MyClass";
    }
    toString(): string {
        return this._name;
    }
}

let myArray: MyClass[] = [
    new MyClass(1),
    new MyClass(2),
    new MyClass(3)];

let myArrayConcatentator = new Concatenator<MyClass>();
let myArrayResult = myArrayConcatentator.concatenateArray(myArray);
console.log('myArray Result')
console.log(myArrayResult);
