interface IComplexType{
    id:number;
    name: string;
    print(): string;
    usingTheAnyKeyword(arg1: any): any;
    usingOptionalParameters(optionalArg1: number): void;
    usingDefalutParameters(defaultArg1?: number): void;
    usingRestSyntax(...argArray: number[]): void;
    usingFunctionalCallbacks(callback: (id:number) => string): void;
}

class ComplexType implements IComplexType {
    id : number;
    name: string;

    constructor(idArg: number, nameArg: string);
    constructor(idArg: string, nameArg: string);
    constructor(idArg: any, nameArg: any){
        this.id = idArg;
        this.name = nameArg;
    }

    print(): string {
        return "id: "+this.id + ", name : "+this.name;
    }

    usingDefalutParameters(defaultArg1: number = 0): void {
        this.id = defaultArg1
    }

    usingFunctionalCallbacks(callback: (id: number) => string): void {
        callback(this.id)
    }

    usingOptionalParameters(optionalArg1: number): void {
        if(optionalArg1){
            this.id = optionalArg1
        }
    }

    usingRestSyntax(...argArray: number[]): void {
        if(argArray.length > 0){
            this.id = argArray[0];
        }
    }

    usingTheAnyKeyword(arg1: any): any {
        this.id = arg1;
    }
}
