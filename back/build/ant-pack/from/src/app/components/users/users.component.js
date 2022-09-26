"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const user_service_1 = require("src/app/service/userService/user.service");
const rol_service_1 = require("src/app/service/rolService/rol.service");
let UsersComponent = class UsersComponent {
    constructor(_userService, _rolService) {
        this._userService = _userService;
        this._rolService = _rolService;
        this.litRol = [];
        this.litUser = [];
        this.objet = new Object;
        /*
        document: ""
        name: ""
        occupation: ""
        phone: ""
        rolid: ""
        state:true,
        sale:0
        */
        this.formBulder = new forms_1.FormGroup({
            name: new forms_1.FormControl(''),
            document: new forms_1.FormControl(''),
            phone: new forms_1.FormControl(''),
            occupation: new forms_1.FormControl(''),
            rolid: new forms_1.FormControl(''),
        });
        this._rolService.list().subscribe((data) => { this.litRol = data; }, (error) => { alert("Error al cargar ROles"); });
        this._userService.list().subscribe((data) => {
            this.litUser = data;
            this.litUser.map((user) => {
                this.litRol.map((rol) => {
                    if (user.rolid == rol.code) {
                        user["rolid"] = rol.name;
                    }
                });
            });
        }, (error) => { alert("Error al cargar Usuarios"); });
    }
    ngOnInit() {
    }
    save() {
        this.objet = {
            document: this.formBulder.value.document,
            name: this.formBulder.value.name,
            occupation: this.formBulder.value.occupation,
            phone: this.formBulder.value.phone,
            rolid: this.formBulder.value.rolid,
            state: true,
            sale: 0
        };
        this._userService.save(this.objet).subscribe((response) => {
            alert("Guardado");
            this.formBulder.reset;
            this.litUser.push(this.objet);
        }, (error) => { alert("error"); });
    }
};
UsersComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css'],
        providers: [user_service_1.UserService, rol_service_1.RolService],
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;
