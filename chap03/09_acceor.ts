class ClassWithAccessors{
    private _id : number;

    constructor(id: number) {
        this._id = id;
    }

    get id(){
        console.log(`inside get id()`)
        return this._id
    }
    set id(value: number){
        console.log(`inside set id() `)
        this._id = value
    }
}

let classWithAccessor = new ClassWithAccessors(1);
classWithAccessor.id = 2;
console.log(classWithAccessor)
console.log(classWithAccessor.id)
