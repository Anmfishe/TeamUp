"use strict";
var RequestMethod_1 = require("../Services/common/RequestMethod");
var ExampleDispatcher_1 = require("../Services/common/ExampleDispatcher");
var ServiceDispatcher = (function () {
    function ServiceDispatcher() {
    }
    ServiceDispatcher.dispatch = function (request, response) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        var headers = request.headers;
        var method = request.method;
        var url = request.url;
        var body = [];
        request.on('error', function (err) {
            console.error(err);
        }).on('data', function (bodyChunk) {
            body.push(bodyChunk);
        }).on('end', function () {
            response.on('error', function (err) {
                console.error(err);
            });
            var rm = RequestMethod_1.toRequestMethod(method);
            var dispatcher = new ExampleDispatcher_1.ExampleDispatcher();
            var responseBody = dispatcher.dispatch(rm);
            response.write(JSON.stringify(responseBody));
            response.end();
        });
    };
    return ServiceDispatcher;
}());
exports.ServiceDispatcher = ServiceDispatcher;
//# sourceMappingURL=ServiceDispatcher.js.map