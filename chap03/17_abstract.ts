class Employee{
    public id:number;
    public name:string;
    printDetails(){
        console.log(`id: ${this.id} , name : ${this.name}`)
    }
}

class Manager{
    public id : number;
    public name : string;
    public Employees: Employee[];
    printDetails(){
        console.log(`id: ${this.id} , name : ${this.name} , employCount ${this.Employees.length}`)
    }
}


abstract class AbstractEmployee{
    public id : number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    abstract getDetails(): string;
    public printDetails(){
        console.log(this.getDetails())
    }
}


class NewEmployee extends AbstractEmployee{
    getDetails(): string{
        return `id: ${this.id}, name: ${this.name} `
    }
}

class NewManger extends NewEmployee{
    public Employees: NewEmployee[];

    constructor(id: number, name: string, Employees: NewEmployee[]) {
        super(id, name);
        this.Employees = Employees;
    }

    getDetails() : string{
        return `${super.getDetails()}, employCount ${this.Employees.length}`
    }
}

let employee = new NewEmployee(1, 'choi')
employee.printDetails()


let manager = new NewManger(2, 'manager')
manager.Employees = new Array();
manager.printDetails()
