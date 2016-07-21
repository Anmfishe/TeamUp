"use strict";
var Services_1 = require("./Services");
// contains static configuration information
var ServerApplication = (function () {
    function ServerApplication() {
        this.services = new Services_1.Services(require("../Services/config.json"));
    }
    return ServerApplication;
}());
exports.ServerApplication = ServerApplication;
//# sourceMappingURL=ServerApplication.js.map