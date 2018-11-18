"use strict";
var FirstNameSpace;
(function (FirstNameSpace) {
    var NotExported = /** @class */ (function () {
        function NotExported() {
        }
        return NotExported;
    }());
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass(id) {
            this.id = id;
        }
        return NameSpaceClass;
    }());
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
})(FirstNameSpace || (FirstNameSpace = {}));
var firstNameSpace = new FirstNameSpace.NameSpaceClass(1);
// error :
// let noExported = new FirstNameSpace.NotExported();
