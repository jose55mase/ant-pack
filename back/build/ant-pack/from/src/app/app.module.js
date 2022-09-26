"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
//import { NgModule } from '@angular/core';
const core_1 = require("@angular/core");
const app_component_1 = require("./app.component");
const home_component_1 = require("./components/home/home.component");
const products_component_1 = require("./components/products/products.component");
const users_component_1 = require("./components/users/users.component");
const footer_component_1 = require("./layouts/footer/footer.component");
const header_component_1 = require("./layouts/header/header.component");
const page_not_found_component_1 = require("./components/page-not-found/page-not-found.component");
const app_routing_module_1 = require("./app-routing.module");
const login_component_1 = require("./components/login/login.component");
const roles_component_1 = require("./components/roles/roles.component");
const facturas_component_1 = require("./components/facturas/facturas.component");
const article_component_1 = require("./components/article/article.component");
const list_products_component_1 = require("./components/products/list/list-products/list-products.component");
const payment_component_1 = require("./components/facturas/payment/payment.component");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            products_component_1.ProductsComponent,
            users_component_1.UsersComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            page_not_found_component_1.PageNotFoundComponent,
            login_component_1.LoginComponent,
            roles_component_1.RolesComponent,
            facturas_component_1.FacturasComponent,
            article_component_1.ArticleComponent,
            list_products_component_1.ListProductsComponent,
            payment_component_1.PaymentComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpClientModule,
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
