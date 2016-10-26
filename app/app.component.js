"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PERSONAS = [
    { id: 11, nombre: 'Alicia' },
    { id: 12, nombre: 'Carlos' },
    { id: 13, nombre: 'Julia' },
    { id: 14, nombre: 'Daniel' },
    { id: 15, nombre: 'Martha' },
    { id: 16, nombre: 'José' },
    { id: 17, nombre: 'Natalia' },
    { id: 18, nombre: 'Xavier' },
    { id: 19, nombre: 'Sofía' },
    { id: 20, nombre: 'Adrián' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Mi Aplicación';
        this.personas = PERSONAS;
    }
    AppComponent.prototype.onSelect = function (persona) {
        this.selectedPersona = persona;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Listado de Personas</h2>\n    <ul class=\"personas\">\n      <li *ngFor=\"let persona of personas\"\n        [class.selected]=\"persona === selectedPersona\"\n        (click)=\"onSelect(persona)\">\n        <span class=\"badge\">{{persona.id}}</span> {{persona.nombre}}\n      </li>\n    </ul>\n    <mi-detalle-persona [persona]=\"selectedPersona\"></mi-detalle-persona>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .personas {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .personas li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .personas li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .personas li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .personas .text {\n      position: relative;\n      top: -3px;\n    }\n    .personas .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map