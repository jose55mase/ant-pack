"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const product_service_1 = require("src/app/service/productService/product.service");
let ProductsComponent = class ProductsComponent {
    constructor(_productService) {
        this._productService = _productService;
        this.color = "success";
        this.object = new Object;
        this.listProduct = [];
        this.btn_saveUpdata = false;
        this.formBulder = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.required]),
            description: new forms_1.FormControl('', [forms_1.Validators.required]),
            amount: new forms_1.FormControl('', [forms_1.Validators.required]),
            price: new forms_1.FormControl('', [forms_1.Validators.required]),
            image: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
        this._productService.list().subscribe((data) => { this.listProduct = data; }, (error) => {
            alert("Error en Productos");
        });
    }
    ngOnInit() {
    }
    save() {
        console.log(this.formBulder.value);
        this.object = {
            name: this.formBulder.value.name,
            description: this.formBulder.value.description,
            amount: this.formBulder.value.amount,
            price: this.formBulder.value.price,
            image: this.formBulder.value.image,
            state: true
        };
        this._productService.save(this.object).subscribe((respose) => { alert("Guardado"); }, (error) => { alert("Error"); });
    }
    updateForm(data) {
        this.btn_saveUpdata = true;
        this.idProduct = data.code;
        this.formBulder.controls["name"].setValue(data.name);
        this.formBulder.controls["description"].setValue(data.description);
        this.formBulder.controls["amount"].setValue(data.amount);
        this.formBulder.controls["price"].setValue(data.price);
        this.formBulder.controls["image"].setValue(data.image);
    }
    updateCancel() {
        this.btn_saveUpdata = false;
        this.formBulder.reset();
    }
    update() {
        this.object = {
            code: this.idProduct,
            name: this.formBulder.value.name,
            description: this.formBulder.value.description,
            amount: this.formBulder.value.amount,
            price: this.formBulder.value.price,
            image: this.formBulder.value.image,
            state: true
        };
        this._productService.update(this.object).subscribe((respose) => {
            alert("Actualizado");
        }, (error) => {
            alert("Error");
            console.log(error);
        });
    }
};
ProductsComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.css'],
        providers: [product_service_1.ProductService]
    })
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
