function testArgs(...argArray: number[]) {
    if (argArray.length > 0) {
        for (let i = 0; i < argArray.length; i++) {
            console.log(`argArray[${i} = ${argArray[i]} `);
            console.log(`arguments[${i} = ${arguments[i]} `);
        }
    }
}

testArgs(9)
testArgs(1,2,3);
