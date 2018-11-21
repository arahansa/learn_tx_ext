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
var ClubHomeCountry;
(function (ClubHomeCountry) {
    ClubHomeCountry[ClubHomeCountry["England"] = 0] = "England";
    ClubHomeCountry[ClubHomeCountry["Germany"] = 1] = "Germany";
})(ClubHomeCountry || (ClubHomeCountry = {}));
var FootballClub = /** @class */ (function () {
    function FootballClub() {
    }
    FootballClub.prototype.getName = function () { return this._name; };
    ;
    FootballClub.prototype.getHomeCountry = function () { return this._homeCountry; };
    ;
    return FootballClub;
}());
var Liverpool = /** @class */ (function (_super) {
    __extends(Liverpool, _super);
    function Liverpool() {
        var _this = _super.call(this) || this;
        _this._name = "Liverpool F.C.";
        _this._homeCountry = ClubHomeCountry.England;
        return _this;
    }
    return Liverpool;
}(FootballClub));
var BorussiaDortmund = /** @class */ (function (_super) {
    __extends(BorussiaDortmund, _super);
    function BorussiaDortmund() {
        var _this = _super.call(this) || this;
        _this._name = "Borussia Dortmund";
        _this._homeCountry = ClubHomeCountry.Germany;
        return _this;
    }
    return BorussiaDortmund;
}(FootballClub));
var FootballClubPrinter = /** @class */ (function () {
    function FootballClubPrinter() {
    }
    FootballClubPrinter.prototype.print = function (arg) {
        console.log(" " + arg.getName() + " is " +
            ("" + this.IsEnglishTeam(arg)) +
            " an English football team.");
    };
    FootballClubPrinter.prototype.IsEnglishTeam = function (arg) {
        if (arg.getHomeCountry() == ClubHomeCountry.England)
            return "";
        else
            return "NOT";
    };
    return FootballClubPrinter;
}());
var clubInfo = new FootballClubPrinter();
clubInfo.print(new Liverpool());
clubInfo.print(new BorussiaDortmund());
