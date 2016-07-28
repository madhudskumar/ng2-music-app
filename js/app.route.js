"use strict";
var router_1 = require('@angular/router');
var test_component_1 = require('./test/test.component');
var albumb_component_1 = require('./music/albumb.component');
var albumbs_component_1 = require('./music/albumbs.component');
var login_component_1 = require('./user/login.component');
var regestration_component_1 = require('./user/regestration.component');
var welcome_component_1 = require('./common/welcome.component');
var routes = [
    { path: 'albumb', component: albumb_component_1.albumbComponent },
    { path: 'albumbs', component: albumbs_component_1.albumbsComponent },
    { path: 'login', component: login_component_1.loginComponent },
    { path: 'registration', component: regestration_component_1.regestrationComponent },
    { path: 'test', component: test_component_1.testComponent },
    { path: '', component: welcome_component_1.welcomeComponent },
    { path: '**', redirectTo: '/test', pathMatch: 'full' }
];
exports.appRouterProvider = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map