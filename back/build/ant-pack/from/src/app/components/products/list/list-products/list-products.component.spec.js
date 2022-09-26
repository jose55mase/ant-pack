"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const list_products_component_1 = require("./list-products.component");
describe('ListProductsComponent', () => {
    let component;
    let fixture;
    beforeEach((0, testing_1.async)(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [list_products_component_1.ListProductsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(list_products_component_1.ListProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
