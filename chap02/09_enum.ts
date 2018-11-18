enum DoorState{
    Open,
    Closed,
    Ajar
}

let openDoor = DoorState.Open

console.log(`open Door is :${openDoor}`)
let closedDoor = DoorState["Closed"]
console.log(`closed Door is :${closedDoor}`)

let ajrDoor= DoorState[2]
console.log(`closed Door is :${ajrDoor}`)

