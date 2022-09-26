"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const users_component_1 = require("./components/users/users.component");
const products_component_1 = require("./components/products/products.component");
const article_component_1 = require("./components/article/article.component");
const roles_component_1 = require("./components/roles/roles.component");
const facturas_component_1 = require("./components/facturas/facturas.component");
const login_component_1 = require("./components/login/login.component");
const payment_component_1 = require("./components/facturas/payment/payment.component");
const routes = [
    { path: '', component: article_component_1.ArticleComponent },
    { path: 'article', component: article_component_1.ArticleComponent },
    { path: 'products', component: products_component_1.ProductsComponent },
    { path: 'user', component: users_component_1.UsersComponent },
    { path: 'rol', component: roles_component_1.RolesComponent },
    { path: 'bill', component: facturas_component_1.FacturasComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'bill/payment', component: payment_component_1.PaymentComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
            )],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
