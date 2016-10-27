"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var personas = [
            { id: 11, nombre: 'Alicia' },
            { id: 12, nombre: 'Carlos' },
            { id: 13, nombre: 'Julia' },
            { id: 14, nombre: 'Daniel' },
            { id: 15, nombre: 'Martha' },
            { id: 16, nombre: 'José' },
            { id: 17, nombre: 'Natalia' },
            { id: 18, nombre: 'Xavier' },
            { id: 19, nombre: 'Sofía' },
            { id: 20, nombre: 'Adrián' }
        ];
        return { personas: personas };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map