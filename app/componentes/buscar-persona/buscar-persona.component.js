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
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var buscar_persona_service_1 = require('../../servicios/buscar-persona.service');
var BuscarPersonaComponent = (function () {
    function BuscarPersonaComponent(buscarPersonaService, router) {
        this.buscarPersonaService = buscarPersonaService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Agregar un término al flujo observable
    BuscarPersonaComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    BuscarPersonaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personas = this.searchTerms
            .debounceTime(200) // esperar
            .distinctUntilChanged() // ignorar si no hay cambios en el término
            .switchMap(function (term) { return term // cambiar a un nuevo observable cada vez
            ? _this.buscarPersonaService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    BuscarPersonaComponent.prototype.abrirDetalle = function (persona) {
        var link = ['/detalle', persona.id];
        this.router.navigate(link);
    };
    BuscarPersonaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'buscar-persona',
            templateUrl: 'buscar-persona.component.html',
            styleUrls: ['buscar-persona.component.css'],
            providers: [buscar_persona_service_1.BuscarPersonaService]
        }), 
        __metadata('design:paramtypes', [buscar_persona_service_1.BuscarPersonaService, router_1.Router])
    ], BuscarPersonaComponent);
    return BuscarPersonaComponent;
}());
exports.BuscarPersonaComponent = BuscarPersonaComponent;
//# sourceMappingURL=buscar-persona.component.js.map