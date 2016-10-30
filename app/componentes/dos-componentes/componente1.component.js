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
var persona_observable_service_1 = require('../../servicios/persona-observable.service');
var Componente1Component = (function () {
    function Componente1Component(personaService) {
        this.personaService = personaService;
        this.selectedPersona = new core_1.EventEmitter();
    }
    Componente1Component.prototype.getPersonas = function () {
        var _this = this;
        this.personaService
            .getPersonas().subscribe(function (res) { _this.personas = res; });
    };
    Componente1Component.prototype.selectPersona = function (persona) {
        this.selectedPersona.emit(persona);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Componente1Component.prototype, "selectedPersona", void 0);
    Componente1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'componente1',
            templateUrl: 'componente1.component.html',
            styleUrls: ['componente1.component.css'],
        }), 
        __metadata('design:paramtypes', [persona_observable_service_1.PersonaObservableService])
    ], Componente1Component);
    return Componente1Component;
}());
exports.Componente1Component = Componente1Component;
//# sourceMappingURL=componente1.component.js.map