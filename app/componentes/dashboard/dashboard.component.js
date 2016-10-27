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
var DashboardComponent = (function () {
    function DashboardComponent(router, personaService) {
        this.router = router;
        this.personaService = personaService;
        this.personas = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personaService.getPersonas()
            .then(function (personas) { return _this.personas = personas.slice(1, 5); });
    };
    DashboardComponent.prototype.abrirDetalle = function (persona) {
        var link = ['/detalle', persona.id];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mi-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, persona_service_1.PersonaService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map