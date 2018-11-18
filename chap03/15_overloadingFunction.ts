class BaseClassWithFunction{
    public id : number;

    constructor(id: number) {
        this.id = id;
    }

    getProperties() : string{
        return `id: ${this.id}`
    }
}

class DerivedClassWithFunction extends BaseClassWithFunction{
    public name : string;

    constructor(id:number, name: string) {
        super(id);
        this.name = name;
    }

    getProperties() : string{
        return `${super.getProperties()} , name ${this.name}`
    }
}


console.log(new DerivedClassWithFunction(1,"name").getProperties())

