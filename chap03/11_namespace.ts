
namespace FirstNameSpace {
    class NotExported{

    }
    export class NameSpaceClass{
        id: number;

        constructor(id: number) {
            this.id = id;
        }
    }
}

let firstNameSpace = new FirstNameSpace.NameSpaceClass(1);
// error :
// let noExported = new FirstNameSpace.NotExported();

