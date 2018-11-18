class SimpleClass {
    id: number;
    print(): void {
        console.log(`SimpleClass Print() called ${this.id}`)
    }

    constructor() {
        this.id = 1
    }
}

let mySimpleClasss = new SimpleClass();
mySimpleClasss.id = 1001
mySimpleClasss.print()
