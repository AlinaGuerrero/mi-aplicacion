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
var componente1_component_1 = require('./componente1.component');
var componente2_component_1 = require('./componente2.component');
var DosComponentesComponent = (function () {
    function DosComponentesComponent() {
    }
    DosComponentesComponent.prototype.getPersonas = function () {
        this.listaComponent.getPersonas();
    };
    DosComponentesComponent.prototype.selectPersona = function (persona) {
        this.detalleComponent.setPersona(persona);
    };
    __decorate([
        core_1.ViewChild(componente1_component_1.Componente1Component), 
        __metadata('design:type', componente1_component_1.Componente1Component)
    ], DosComponentesComponent.prototype, "listaComponent", void 0);
    __decorate([
        core_1.ViewChild(componente2_component_1.Componente2Component), 
        __metadata('design:type', componente2_component_1.Componente2Component)
    ], DosComponentesComponent.prototype, "detalleComponent", void 0);
    DosComponentesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dos-componentes',
            templateUrl: 'dos-componentes.component.html',
            styleUrls: ['dos-componentes.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], DosComponentesComponent);
    return DosComponentesComponent;
}());
exports.DosComponentesComponent = DosComponentesComponent;
//# sourceMappingURL=dos-componentes.component.js.map