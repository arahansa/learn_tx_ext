"use strict";
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
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.printDetails = function () {
        console.log("id: " + this.id + " , name : " + this.name);
    };
    return Employee;
}());
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.printDetails = function () {
        console.log("id: " + this.id + " , name : " + this.name + " , employCount " + this.Employees.length);
    };
    return Manager;
}());
var AbstractEmployee = /** @class */ (function () {
    function AbstractEmployee(id, name) {
        this.id = id;
        this.name = name;
    }
    AbstractEmployee.prototype.printDetails = function () {
        console.log(this.getDetails());
    };
    return AbstractEmployee;
}());
var NewEmployee = /** @class */ (function (_super) {
    __extends(NewEmployee, _super);
    function NewEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewEmployee.prototype.getDetails = function () {
        return "id: " + this.id + ", name: " + this.name + " ";
    };
    return NewEmployee;
}(AbstractEmployee));
var NewManger = /** @class */ (function (_super) {
    __extends(NewManger, _super);
    function NewManger(id, name, Employees) {
        var _this = _super.call(this, id, name) || this;
        _this.Employees = Employees;
        return _this;
    }
    NewManger.prototype.getDetails = function () {
        return _super.prototype.getDetails.call(this) + ", employCount " + this.Employees.length;
    };
    return NewManger;
}(NewEmployee));
var employee = new NewEmployee(1, 'choi');
employee.printDetails();
var manager = new NewManger(2, 'manager');
manager.Employees = new Array();
manager.printDetails();
