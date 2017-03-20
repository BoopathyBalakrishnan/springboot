"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NamePipe = (function () {
    function NamePipe() {
    }
    NamePipe.prototype.transform = function (studentName, input) {
        return studentName.filter(function (item) {
            return item.name.indexOf(input) !== -1;
        });
        // return users.filter((user) => {
        //                 if (caseInsensitive) {
        //                     return (user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
        //                 } else {
        //                     return (user.name.indexOf(name) !== -1);
        //                 }
    };
    return NamePipe;
}());
NamePipe = __decorate([
    core_1.Pipe({
        name: 'namepipe'
    })
], NamePipe);
exports.NamePipe = NamePipe;
//# sourceMappingURL=name.filter.js.map