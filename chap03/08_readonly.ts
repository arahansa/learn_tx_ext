class ClassWithReadOnly{
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
    setReadOnly(_name:string){
        // compile error
        // this.name = _name;
    }
}
