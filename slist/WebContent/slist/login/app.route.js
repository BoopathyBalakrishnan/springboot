"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var login_component_1 = require("./login.component");
var about_component_1 = require("../about/about.component");
//Route Configuration
exports.routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.route.js.map