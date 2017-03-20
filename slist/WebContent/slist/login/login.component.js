"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var loginmodule_1 = require("../login/loginmodule");
var router_1 = require("@angular/router");
var slist_service_1 = require("../slist.service");
var LoginComponent = (function () {
    function LoginComponent(router, slistService) {
        this.router = router;
        this.slistService = slistService;
        this.model = new loginmodule_1.LoginModule('Angular2', 'password');
    }
    LoginComponent.prototype.getNames = function (event) {
        var _this = this;
        var usernamee = this.usrName.nativeElement.inputValue;
        debugger;
        var password = this.password.nativeElement.inputValue;
        console.log('User logged in as: ', usernamee);
        console.log('Password: ', password);
        console.log('Event is ', event);
        this.slistService.getNames().subscribe(function (nameList) { return _this.names = nameList; });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.model = new loginmodule_1.LoginModule('hh', 'hh');
        console.log("loginform");
        for (var i = 0; i < this.names.length; i++) {
            console.log("loginform for loop");
        }
        this.router.navigate(['home']);
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('username'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "usrName", void 0);
__decorate([
    core_1.ViewChild('password'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'my-view',
        templateUrl: 'slist/login.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, slist_service_1.SlistService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map