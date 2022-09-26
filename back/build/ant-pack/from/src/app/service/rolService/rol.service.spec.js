"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const rol_service_1 = require("./rol.service");
describe('RolService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(rol_service_1.RolService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
