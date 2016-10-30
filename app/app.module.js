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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('./rxjs-extensions');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./servicios/in-memory-data.service');
var app_component_1 = require('./app.component');
var detalle_persona_component_1 = require('./componentes/detalle-persona/detalle-persona.component');
var personas_component_1 = require('./componentes/personas/personas.component');
var buscar_persona_component_1 = require('./componentes/buscar-persona/buscar-persona.component');
var dashboard_component_1 = require('./componentes/dashboard/dashboard.component');
var dos_componentes_component_1 = require('./componentes/dos-componentes/dos-componentes.component');
var componente1_component_1 = require('./componentes/dos-componentes/componente1.component');
var componente2_component_1 = require('./componentes/dos-componentes/componente2.component');
var dos_servicios_component_1 = require('./componentes/dos-servicios/dos-servicios.component');
var padre_component_1 = require('./componentes/padre-hijo/padre.component');
var hijo_component_1 = require('./componentes/padre-hijo/hijo.component');
var persona_service_1 = require('./servicios/persona.service');
var persona_observable_service_1 = require('./servicios/persona-observable.service');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                detalle_persona_component_1.DetallePersonaComponent,
                personas_component_1.PersonasComponent,
                dashboard_component_1.DashboardComponent,
                buscar_persona_component_1.BuscarPersonaComponent,
                dos_componentes_component_1.DosComponentesComponent,
                componente1_component_1.Componente1Component,
                componente2_component_1.Componente2Component,
                dos_servicios_component_1.DosServiciosComponent,
                padre_component_1.PadreComponent,
                hijo_component_1.HijoComponent
            ],
            providers: [
                persona_service_1.PersonaService,
                persona_observable_service_1.PersonaObservableService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map