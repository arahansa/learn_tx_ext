"use strict";
var idOnly = { id: 1 };
var idAndName = { id: 2, name: "idAndName" };
console.log(idAndName);
idAndName = idOnly;
console.log(idOnly);
console.log(idAndName);
