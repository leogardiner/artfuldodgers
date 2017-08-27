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
var UserComponent = (function () {
    function UserComponent(postService) {
        this.postService = postService;
        this.name = 'Sassy the sasquatch';
        this.email = 'gwabwan@jah.rastafari.com';
        this.address = {
            street: 'Gasqcoigne',
            city: 'Blenheim',
            state: 'TY'
        };
        this.hobbies = ['Whatareyatalkinabeet', 'volcano', 'lemon flavoured pods'];
        this.showHobbies = false;
        this.postService.getPosts();
        //this.posts = {'id':'asd', 'title':'asd', 'body':'asdasd'}
        //   this.postService.getPosts().subscribe(posts => {
        //     this.posts = posts;
        //   });
    }
    UserComponent.prototype.addHobby = function (val) {
        this.hobbies.push(val);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    UserComponent.prototype.toggleHobbies = function () {
        this.showHobbies = !this.showHobbies;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        templateUrl: "app/views/user.component.html",
        providers: [moltin_service_1.MoltinService]
    }),
    __metadata("design:paramtypes", [moltin_service_1.MoltinService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map