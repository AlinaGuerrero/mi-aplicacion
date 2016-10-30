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
var http_1 = require('@angular/http');
var PersonaObservableService = (function () {
    //private personasUrlServer = 'http://172.16.225.138:8082/rest/personas';
    //private personasUrlId = 'http://172.16.225.138:8083/rest/persona/buscarPorId';
    //private headers = new Headers({'Content-Type': 'application/json'});
    function PersonaObservableService(http) {
        this.http = http;
        this.personasUrl = 'app/personas';
    }
    PersonaObservableService.prototype.getPersonas = function () {
        return this.http
            .get(this.personasUrl)
            .map(function (r) { return r.json().data; })
            .filter(function (r) { return r.length > 0; })
            .catch(this.handleError);
    };
    PersonaObservableService.prototype.getPersona = function (id) {
        var url = this.personasUrl + "/" + id;
        return this.http.get(url)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PersonaObservableService.prototype.handleError = function (error) {
        console.error('Ha ocurrido un error.', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PersonaObservableService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonaObservableService);
    return PersonaObservableService;
}());
exports.PersonaObservableService = PersonaObservableService;
//# sourceMappingURL=persona-observable.service.js.map