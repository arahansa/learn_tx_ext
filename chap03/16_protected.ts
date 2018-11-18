class ClassUsingProtected{
    protected id: number;
    constructor(){}
    public getId() {
        return this.id;
    }
}


class DerivedFromProtected extends ClassUsingProtected{
    constructor() {
        super();
        this.id = 0;
    }
}

console.log(new DerivedFromProtected())
