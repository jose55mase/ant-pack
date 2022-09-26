"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const products_component_1 = require("./products.component");
describe('ProductsComponent', () => {
    let component;
    let fixture;
    beforeEach((0, testing_1.async)(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [products_component_1.ProductsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(products_component_1.ProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
