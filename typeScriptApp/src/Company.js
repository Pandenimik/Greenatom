"use strict";
exports.__esModule = true;
exports.Company = void 0;
var faker_1 = require("@faker-js/faker");
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = faker_1["default"].company.companyName();
        this.catchPhrase = faker_1["default"].company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
    }
    return Company;
}());
exports.Company = Company;
