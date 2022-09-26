"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleComponent = void 0;
const core_1 = require("@angular/core");
const product_service_1 = require("src/app/service/productService/product.service");
const forms_1 = require("@angular/forms");
const bill_service_1 = require("src/app/service/billService/bill.service");
let ArticleComponent = class ArticleComponent {
    constructor(_productService, _router, _billService) {
        this._productService = _productService;
        this._router = _router;
        this._billService = _billService;
        this.article = {
            name: "",
            description: "",
            image: "",
            amount: 0,
            price: 0,
            code: 0
        };
        this.user = false;
        this.btnAmountColor = "defaul";
        this.tempAmoutProduct = 0;
        this.tempProceProduct = 0;
        this.tempProceProductReal = 0;
        this.alertProdutAmunt = false;
        this.btnPayment = false;
        this.object = new Object;
        this.listProduct = [];
        this.formBulder = new forms_1.FormGroup({
            amount: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
        this.onLoadPage();
    }
    onLoadPage() {
        this._productService.list().subscribe((data) => {
            this.listProduct = data;
            this.listProduct.map((product) => {
                if (product.amount > 5) {
                    product["btnAmountColor"] = "success";
                }
                if (product.amount <= 5) {
                    product["btnAmountColor"] = "warning";
                }
                if (product.amount <= 1) {
                    product["btnAmountColor"] = "danger";
                }
                if (product.amount <= 0) {
                    product["btnAmountColor"] = "dark";
                }
            });
        }, (error) => { alert("Error en Productos"); });
    }
    ngOnInit() { }
    toBuy(data) {
        if (!JSON.parse(sessionStorage.getItem("userNow"))) {
            this._router.navigate(["/login"]);
            this.user = false;
        }
        else {
            this.user = true;
            this.article = {
                code: data.code,
                name: data.name,
                description: data.description,
                image: data.image,
                amount: data.amount,
                price: data.price
            };
            this.object = {
                description: `${data.name} ${data.description}`
            };
            this.tempAmoutProduct = data.amount;
            this.tempProceProduct = data.price;
            this.tempProceProductReal = data.price;
        }
    }
    amount() {
        var realPrice = this.tempProceProductReal;
        if (this.formBulder.value.amount > 0) {
            var price = this.tempProceProduct;
            this.tempProceProduct = (price * this.formBulder.value.amount);
            this.btnPayment = true;
        }
        else {
            this.tempProceProduct = realPrice;
            this.btnPayment = false;
        }
        if (this.formBulder.value.amount > this.tempAmoutProduct) {
            this.alertProdutAmunt = true;
        }
        else {
            this.alertProdutAmunt = false;
        }
    }
    payment() {
        this.object = {
            description: `${this.article.name} ${this.article.description}`,
            amount: this.formBulder.value.amount,
            idUser: JSON.parse(sessionStorage.getItem("userNow")).code,
            price: this.tempProceProduct,
            idProduct: this.article.code,
        };
        this._billService.save(this.object).subscribe((respose) => { alert("Compra completa"); }, (error) => { alert("Error"); });
        var object = {
            code: this.article.code,
            amount: this.article.amount - this.formBulder.value.amount,
            name: this.article.name,
            description: this.article.description,
            image: this.article.image,
            price: this.article.price
        };
        this._productService.update(object).subscribe((respose) => {
            this.object = {
                description: `${this.article.name} ${this.article.description}`,
                amount: this.formBulder.value.amount,
                idUser: JSON.parse(sessionStorage.getItem("userNow")).code,
                price: this.tempProceProduct,
                idProduct: this.article.code,
                image: this.article.image,
            };
            sessionStorage.setItem("payMent", JSON.stringify(this.object));
            this._router.navigate(["/bill/payment"]);
        }, (error) => { alert("Error"); });
    }
};
ArticleComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-article',
        templateUrl: './article.component.html',
        styleUrls: ['./article.component.css'],
        providers: [product_service_1.ProductService, bill_service_1.BillService]
    })
], ArticleComponent);
exports.ArticleComponent = ArticleComponent;
