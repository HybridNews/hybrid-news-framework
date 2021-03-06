"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var feature_component_1 = require('./feature/feature.component');
var APP_ROUTES = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'feature', component: feature_component_1.FeatureComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(APP_ROUTES)
];
//# sourceMappingURL=app.routes.js.map