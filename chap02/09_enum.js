"use strict";
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
    DoorState[DoorState["Ajar"] = 2] = "Ajar";
})(DoorState || (DoorState = {}));
var openDoor = DoorState.Open;
console.log("open Door is :" + openDoor);
var closedDoor = DoorState["Closed"];
console.log("closed Door is :" + closedDoor);
var ajrDoor = DoorState[2];
console.log("closed Door is :" + ajrDoor);
