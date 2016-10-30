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
var router_1 = require('@angular/router');
var persona_observable_service_1 = require('../../servicios/persona-observable.service');
var persona_service_1 = require('../../servicios/persona.service');
var DosServiciosComponent = (function () {
    function DosServiciosComponent(router, personaObservableService, personaService) {
        this.router = router;
        this.personaObservableService = personaObservableService;
        this.personaService = personaService;
        this.listaServicio2 = [];
    }
    DosServiciosComponent.prototype.getPersonas = function () {
        var _this = this;
        this.personaObservableService
            .getPersonas()
            .subscribe(function (res) {
            _this.personas = res;
            res.forEach(function (persona) {
                _this.getInfoPersona(persona.id);
            });
        });
    };
    DosServiciosComponent.prototype.getInfoPersona = function (id) {
        var _this = this;
        this.personaService
            .getPersona(id)
            .then(function (persona) { return _this.listaServicio2.push(persona); });
    };
    DosServiciosComponent.prototype.ngOnInit = function () {
        this.getPersonas();
    };
    DosServiciosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dos-servicios',
            templateUrl: 'dos-servicios.component.html',
            styleUrls: ['dos-servicios.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, persona_observable_service_1.PersonaObservableService, persona_service_1.PersonaService])
    ], DosServiciosComponent);
    return DosServiciosComponent;
}());
exports.DosServiciosComponent = DosServiciosComponent;
//# sourceMappingURL=dos-servicios.component.js.map