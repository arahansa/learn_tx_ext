class StaticClass{
    static printTwo(){
        console.log(`2`);
    }
}


StaticClass.printTwo()


class StaticProperty {
    static count = 0;
    updateCount() {
        StaticProperty.count++;
    }
}

let firstInstance = new StaticProperty();
console.log(`StaticProperty count = ${StaticProperty.count}`)
firstInstance.updateCount()
console.log(`StaticProperty count = ${StaticProperty.count}`)
