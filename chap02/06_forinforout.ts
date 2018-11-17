let arrOfStrs : string[] = ["first", "second", "third"]

for(let itemKey in arrOfStrs){
    let itemValue = arrOfStrs[itemKey]
    console.log(`arrStrs[${itemKey}]  = ${itemValue}`)
}

for(let arrayItem of arrOfStrs){
    console.log(`arrItem = ${arrayItem} `)
}
