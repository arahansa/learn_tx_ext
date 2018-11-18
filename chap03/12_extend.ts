interface IBase {
    id: number;
}

interface IderivedFromBase extends IBase{
    name: string;
}

class InterfaceInheritanceClass implements IderivedFromBase{
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}


