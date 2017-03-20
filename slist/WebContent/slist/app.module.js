"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("../slist/app.component");
var login_component_1 = require("./login/login.component");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./login/home.component");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_route_1 = require("./login/app.route");
var slist_service_1 = require("./slist.service");
var status_directive_1 = require("./status.directive");
var name_filter_1 = require("./name.filter");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_route_1.routing, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, login_component_1.LoginComponent, about_component_1.AboutComponent, status_directive_1.ColorChange, name_filter_1.NamePipe],
        providers: [slist_service_1.SlistService],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [app_component_1.AppComponent] //root comp,
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map