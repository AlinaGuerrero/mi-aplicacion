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
var persona_1 = require('../../clases/persona');
var HijoComponent = (function () {
    function HijoComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', persona_1.Persona)
    ], HijoComponent.prototype, "persona", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HijoComponent.prototype, "curso", void 0);
    HijoComponent = __decorate([
        core_1.Component({
            selector: 'hijo',
            template: "\n    <h3>{{persona.nombre}} dice:</h3>\n    <p>Yo, {{persona.nombre}}, estoy inscrito en el curso, {{curso}}.</p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HijoComponent);
    return HijoComponent;
}());
exports.HijoComponent = HijoComponent;
//# sourceMappingURL=hijo.component.js.map