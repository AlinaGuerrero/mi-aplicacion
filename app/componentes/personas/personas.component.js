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
var persona_service_1 = require('../../servicios/persona.service');
var PersonasComponent = (function () {
    function PersonasComponent(router, personaService) {
        this.router = router;
        this.personaService = personaService;
    }
    PersonasComponent.prototype.getPersonas = function () {
        var _this = this;
        this.personaService.getPersonas().then(function (personas) { return _this.personas = personas; });
    };
    PersonasComponent.prototype.ngOnInit = function () {
        this.getPersonas();
    };
    PersonasComponent.prototype.onSelect = function (persona) {
        this.selectedPersona = persona;
    };
    PersonasComponent.prototype.abrirDetalle = function () {
        this.router.navigate(['/detalle', this.selectedPersona.id]);
    };
    PersonasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mi-personas',
            templateUrl: 'personas.component.html',
            styleUrls: ['personas.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, persona_service_1.PersonaService])
    ], PersonasComponent);
    return PersonasComponent;
}());
exports.PersonasComponent = PersonasComponent;
//# sourceMappingURL=personas.component.js.map