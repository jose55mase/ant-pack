"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const core_1 = require("@angular/core");
const user_service_1 = require("src/app/service/userService/user.service");
let LoginComponent = class LoginComponent {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.user = {
            user: "",
            password: ""
        };
        this.litUser = [];
        this._userService.list().subscribe((data) => { this.litUser = data; }, (error) => { alert("Error al cargar Usuarios"); });
    }
    ngOnInit() {
    }
    getIn() {
        var filter = this.litUser.find((data) => { return data.user == this.user.user; });
        filter = this.litUser.find((data) => { return data.password == this.user.password; });
        if (filter != undefined) {
            sessionStorage.setItem("userNow", JSON.stringify(filter));
            alert("Sesion Iniciada");
            this._router.navigate(["/article"]);
        }
        else {
            alert("Usuario no existe");
        }
    }
};
LoginComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        providers: [user_service_1.UserService]
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
