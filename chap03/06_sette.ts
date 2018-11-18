class ClassWithPublicProperty {
    public id : number;

    constructor(id: number) {
        this.id = id;
    }
}

let publicAccess = new ClassWithPublicProperty(10);
console.log(publicAccess)
publicAccess.id = 1
console.log(publicAccess)

class ClassWithPrivateProperty {
    private id : number;
    constructor(id: number) {
        this.id = id;
    }
}

let privateAccess = new ClassWithPrivateProperty(1)
// error :: privateAccess.id = 1
console.log(`priv : ${privateAccess}`)


