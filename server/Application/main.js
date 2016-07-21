"use strict";
var http = require("http");
var ServiceDispatcher_1 = require("./ServiceDispatcher");
var ServerApplication_1 = require("./ServerApplication");
exports.Application = new ServerApplication_1.ServerApplication();
var server = http.createServer();
server.on("request", function (request, response) {
    ServiceDispatcher_1.ServiceDispatcher.dispatch(request, response);
}).listen(8080);
//# sourceMappingURL=main.js.map