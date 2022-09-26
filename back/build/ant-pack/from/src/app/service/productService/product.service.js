"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const core_1 = require("@angular/core");
const environment_1 = require("src/environments/environment");
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.URI = `${environment_1.environment.apiUrl}`;
    }
    list() {
        return this.http.get(`${this.URI}/product/list`);
    }
    save(data) {
        return this.http.post(`${this.URI}/product/save`, data);
    }
    update(data) {
        return this.http.post(`${this.URI}/product/update`, data);
    }
};
ProductService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], ProductService);
exports.ProductService = ProductService;
