"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var about_component_1 = require("./components/about.component");
var store_component_1 = require("./components/store.component");
var appRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'store',
        component: store_component_1.StoreComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map