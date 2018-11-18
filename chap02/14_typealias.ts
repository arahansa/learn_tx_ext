type StringOrNUmber = string | number;


function addWithAlias( arg1 : StringOrNUmber, arg2: StringOrNUmber){
    return arg1.toString() + arg2.toString()
}

console.log(addWithAlias(1,2))
