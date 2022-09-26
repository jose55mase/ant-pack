"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const app_component_1 = require("./app.component");
describe('AppComponent', () => {
    beforeEach((0, testing_1.async)(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', () => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    it(`should have as title 'todo1Fomnt-end'`, () => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('todo1Fomnt-end');
    });
    it('should render title', () => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.content span').textContent).toContain('todo1Fomnt-end app is running!');
    });
});
