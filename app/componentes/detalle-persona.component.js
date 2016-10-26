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
var persona_1 = require('../clases/persona');
var DetallePersonaComponent = (function () {
    function DetallePersonaComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', persona_1.Persona)
    ], DetallePersonaComponent.prototype, "persona", void 0);
    DetallePersonaComponent = __decorate([
        core_1.Component({
            selector: 'mi-detalle-persona',
            template: "\n    <div *ngIf=\"persona\">\n      <h2>{{persona.nombre}} - detalles!</h2>\n      <div><label>Id: </label>{{persona.id}}</div>\n      <div>\n        <label>Nombre: </label>\n        <input [(ngModel)]=\"persona.nombre\" placeholder=\"nombre\"/>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DetallePersonaComponent);
    return DetallePersonaComponent;
}());
exports.DetallePersonaComponent = DetallePersonaComponent;
//# sourceMappingURL=detalle-persona.component.js.map