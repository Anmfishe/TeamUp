"use strict";
var http = require("http");
var ServiceDispatcher_1 = require("./ServiceDispatcher");
var server = http.createServer();
server.on("request", function (request, response) {
    ServiceDispatcher_1.ServiceDispatcher.dispatch(request, response);
}).listen(8080);
//# sourceMappingURL=main.js.map