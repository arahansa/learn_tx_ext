// https://github.com/PacktPublishing/Mastering-TypeScript-Second-Edition

interface IPerson {
    Category: PersonCategoryz;
    canSignContracts(): boolean;
    printDetails(): void;
}

enum PersonCategoryz {
    Infant,
    Child,
    Adult
}


abstract class Person implements IPerson{
    Category: PersonCategoryz;
    private DateOfBirth: Date
    constructor(DateOfBirth: Date) {
        this.DateOfBirth = DateOfBirth;
    }
    abstract canSignContracts(): boolean
    printDetails() : void{
        console.log(`Person: `);
        console.log(`Date of Birth : ${this.DateOfBirth.toDateString()}`)
        console.log(`Category : ${PersonCategoryz[this.Category]}`)
        console.log(`Can Sign : ${this.canSignContracts()}`)
    }
}

class Infant extends Person{
    constructor(dateOfBirth: Date){
        super(dateOfBirth)
        this.Category = PersonCategoryz.Infant;
    }
    canSignContracts(): boolean{ return false}
}

class Child extends Person{
    constructor(dateOfBirth: Date){
        super(dateOfBirth);
        this.Category = PersonCategoryz.Child;
    }
    canSignContracts(): boolean { return false;}
}

class Adult extends Person{
    constructor(dateOfBirth: Date){
        super(dateOfBirth);
        this.Category = PersonCategoryz.Adult;
    }
    canSignContracts(): boolean { return true;}
}

class PersonFactory {
    getPerson(dateOfBirth: Date) : IPerson {
        let dateNow = new Date(); // defaults to now.
        let currentMonth = dateNow.getMonth() + 1;
        let currentDate = dateNow.getDate();

        let dateTwoYearsAgo = new Date(
            dateNow.getFullYear() - 2,
            currentMonth, currentDate);

        let date18YearsAgo = new Date(
            dateNow.getFullYear() - 18,
            currentMonth, currentDate);

        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= date18YearsAgo) {
            return new Child(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    }
}


let factory = new PersonFactory();
let p1 = factory.getPerson(new Date(2017, 0, 20))
p1.printDetails()

factory.getPerson(new Date(2005, 0, 20)).printDetails()
factory.getPerson(new Date(1969, 0, 20)).printDetails()
