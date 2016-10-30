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
var PadreComponent = (function () {
    function PadreComponent(personaService) {
        this.personaService = personaService;
        this.cursoP = 'Angular 2';
        this.personasP = [];
    }
    PadreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personaService.getPersonas()
            .subscribe(function (res) {
            _this.personasP = res;
        });
    };
    PadreComponent = __decorate([
        core_1.Component({
            selector: 'padre',
            template: "\n    <h2>Interacci\u00F3n Ej. 2 - Pasar datos de padre a hijo mediante Input</h2>\n    <h2>Componente Padre</h2>\n    <h2>El curso {{cursoP}} tiene {{personasP.length}} estudiantes</h2>\n    <h2>Componentes Hijos</h2>\n    <hijo *ngFor=\"let personaP of personasP\"\n      [persona]=\"personaP\"\n      [curso]=\"cursoP\">\n    </hijo>\n  "
        }), 
        __metadata('design:paramtypes', [persona_observable_service_1.PersonaObservableService])
    ], PadreComponent);
    return PadreComponent;
}());
exports.PadreComponent = PadreComponent;
//# sourceMappingURL=padre.component.js.map