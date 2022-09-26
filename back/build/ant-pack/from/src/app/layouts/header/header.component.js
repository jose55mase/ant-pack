"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderComponent = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let HeaderComponent = class HeaderComponent {
    constructor() {
        this.login = false;
        this.admin = false;
        this.user = false;
    }
    ngOnInit() {
        this.login = false;
        var status = new rxjs_1.Observable((observer) => {
            setInterval(function () {
                observer.next(JSON.parse(sessionStorage.getItem("userNow")));
            }, 1000);
        });
        status.subscribe((res) => {
            if (res) {
                this.login = true;
                if (res["rolid"] == 1) {
                    this.admin = true;
                }
                if (res["rolid"] == 2) {
                    this.user = true;
                }
            }
            else {
                this.login = false;
                this.admin = false;
                this.user = false;
            }
        });
    }
    siteOut() {
        sessionStorage.removeItem("userNow");
        this.login = false;
    }
};
HeaderComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
