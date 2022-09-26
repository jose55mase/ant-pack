"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const payment_component_1 = require("./payment.component");
describe('PaymentComponent', () => {
    let component;
    let fixture;
    beforeEach((0, testing_1.async)(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [payment_component_1.PaymentComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(payment_component_1.PaymentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
