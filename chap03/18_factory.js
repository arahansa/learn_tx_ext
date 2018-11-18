"use strict";
// https://github.com/PacktPublishing/Mastering-TypeScript-Second-Edition
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonCategoryz;
(function (PersonCategoryz) {
    PersonCategoryz[PersonCategoryz["Infant"] = 0] = "Infant";
    PersonCategoryz[PersonCategoryz["Child"] = 1] = "Child";
    PersonCategoryz[PersonCategoryz["Adult"] = 2] = "Adult";
})(PersonCategoryz || (PersonCategoryz = {}));
var Person = /** @class */ (function () {
    function Person(DateOfBirth) {
        this.DateOfBirth = DateOfBirth;
    }
    Person.prototype.printDetails = function () {
        console.log("Person: ");
        console.log("Date of Birth : " + this.DateOfBirth.toDateString());
        console.log("Category : " + PersonCategoryz[this.Category]);
        console.log("Can Sign : " + this.canSignContracts());
    };
    return Person;
}());
var Infant = /** @class */ (function (_super) {
    __extends(Infant, _super);
    function Infant(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategoryz.Infant;
        return _this;
    }
    Infant.prototype.canSignContracts = function () { return false; };
    return Infant;
}(Person));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategoryz.Child;
        return _this;
    }
    Child.prototype.canSignContracts = function () { return false; };
    return Child;
}(Person));
var Adult = /** @class */ (function (_super) {
    __extends(Adult, _super);
    function Adult(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategoryz.Adult;
        return _this;
    }
    Adult.prototype.canSignContracts = function () { return true; };
    return Adult;
}(Person));
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.getPerson = function (dateOfBirth) {
        var dateNow = new Date(); // defaults to now.
        var currentMonth = dateNow.getMonth() + 1;
        var currentDate = dateNow.getDate();
        var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, currentMonth, currentDate);
        var date18YearsAgo = new Date(dateNow.getFullYear() - 18, currentMonth, currentDate);
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= date18YearsAgo) {
            return new Child(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    };
    return PersonFactory;
}());
var factory = new PersonFactory();
var p1 = factory.getPerson(new Date(2017, 0, 20));
p1.printDetails();
factory.getPerson(new Date(2005, 0, 20)).printDetails();
factory.getPerson(new Date(1969, 0, 20)).printDetails();
