"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturasComponent = void 0;
const core_1 = require("@angular/core");
const bill_service_1 = require("src/app/service/billService/bill.service");
const user_service_1 = require("src/app/service/userService/user.service");
const product_service_1 = require("src/app/service/productService/product.service");
let FacturasComponent = class FacturasComponent {
    constructor(_billService, _userService, _productService) {
        this._billService = _billService;
        this._userService = _userService;
        this._productService = _productService;
        this.listBill = [];
        this.litUser = [];
        this.listProduct = [];
        this._billService.list().subscribe((res) => {
            this.listBill = res;
        }, (error) => { alert("Error al cargar la lista"); });
        this._productService.list().subscribe((res) => {
            this.listProduct = res;
        }, (error) => { alert("Error al cargar la lista"); });
        this._userService.list().subscribe((res) => {
            this.litUser = res;
            this.listBill.map((bill) => {
                this.litUser.map((user) => {
                    if (bill.idUser == user.code) {
                        bill["user"] = user.name;
                    }
                });
                this.listProduct.map((product) => {
                    if (bill.idProduct == product.code) {
                        bill["product"] = product.name;
                        bill["image"] = product.image;
                    }
                });
            });
        }, (error) => { alert("Error al cargar la lista"); });
    }
    ngOnInit() {
    }
    showProduct(json) {
        var filter = this.listBill.find((data) => { return data.code == json.code; });
        sessionStorage.setItem("payMent", JSON.stringify(filter));
    }
};
FacturasComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-facturas',
        templateUrl: './facturas.component.html',
        styleUrls: ['./facturas.component.css'],
        providers: [bill_service_1.BillService, user_service_1.UserService, product_service_1.ProductService]
    })
], FacturasComponent);
exports.FacturasComponent = FacturasComponent;
