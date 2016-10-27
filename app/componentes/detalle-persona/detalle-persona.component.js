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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var persona_1 = require("../../clases/persona");
var persona_service_1 = require("../../servicios/persona.service");
var DetallePersonaComponent = (function () {
    function DetallePersonaComponent(personaService, route, location) {
        this.personaService = personaService;
        this.route = route;
        this.location = location;
    }
    DetallePersonaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.personaService.getPersona(id)
                .then(function (persona) { return _this.persona = persona; });
        });
    };
    DetallePersonaComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetallePersonaComponent.prototype.guardar = function () {
        var _this = this;
        this.personaService.updatePersona(this.persona)
            .then(function () { return _this.goBack(); });
    };
    return DetallePersonaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", persona_1.Persona)
], DetallePersonaComponent.prototype, "persona", void 0);
DetallePersonaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mi-detalle-persona',
        templateUrl: 'detalle-persona.component.html',
        styleUrls: ['detalle-persona.component.css']
    }),
    __metadata("design:paramtypes", [persona_service_1.PersonaService,
        router_1.ActivatedRoute,
        common_1.Location])
], DetallePersonaComponent);
exports.DetallePersonaComponent = DetallePersonaComponent;
//# sourceMappingURL=detalle-persona.component.js.map