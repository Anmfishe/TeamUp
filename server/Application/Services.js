"use strict";
var Services = (function () {
    function Services(config) {
        for (var prop in config) {
            this[prop] = config[prop];
        }
    }
    return Services;
}());
exports.Services = Services;
//# sourceMappingURL=Services.js.map