class BaseClassWithConstructor{
    private id: number;

    constructor(id: number) {
        this.id = id;
    }
}


class DerivedClassWithConstructor extends BaseClassWithConstructor{
    private name: string;

    constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }
}
