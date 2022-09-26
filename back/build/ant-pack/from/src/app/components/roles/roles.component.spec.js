"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const roles_component_1 = require("./roles.component");
describe('RolesComponent', () => {
    let component;
    let fixture;
    beforeEach((0, testing_1.async)(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [roles_component_1.RolesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(roles_component_1.RolesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
