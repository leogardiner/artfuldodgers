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
var moltin_service_1 = require("../services/moltin.service");
var StoreComponent = (function () {
    function StoreComponent(moltinService, changeRef) {
        this.moltinService = moltinService;
        this.changeRef = changeRef;
    }
    StoreComponent.prototype.getPosts = function (moltinService) {
        var _this = this;
        this.items = [];
        moltinService.getPosts().then(function (value) {
            _this.items = value;
        });
    };
    StoreComponent.prototype.ngOnInit = function () {
        this.getPosts(this.moltinService);
    };
    return StoreComponent;
}());
StoreComponent = __decorate([
    core_1.Component({
        selector: 'store',
        templateUrl: "app/views/store.component.html",
    }),
    __metadata("design:paramtypes", [moltin_service_1.MoltinService, core_1.ChangeDetectorRef])
], StoreComponent);
exports.StoreComponent = StoreComponent;
//# sourceMappingURL=store.component.js.map