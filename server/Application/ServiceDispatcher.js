"use strict";
var RequestMethod_1 = require("../Services/common/RequestMethod");
var DispatchGenerator_1 = require("../Services/common/DispatchGenerator");
var RequestUrl_1 = require("../Services/common/RequestUrl");
var ServiceDispatcher = (function () {
    function ServiceDispatcher() {
    }
    ServiceDispatcher.dispatch = function (request, response) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        var headers = request.headers;
        var method = RequestMethod_1.toRequestMethod(request.method);
        var url = new RequestUrl_1.RequestUrl(request.url);
        var body = [];
        request.on('error', function (err) {
            console.error(err);
        }).on('data', function (bodyChunk) {
            body.push(bodyChunk);
        }).on('end', function () {
            response.on('error', function (err) {
                console.error(err);
            });
            var dispatcher = DispatchGenerator_1.DispatchGenerator.generate(headers, method, url);
            var responseBody = dispatcher.dispatch(method);
            response.write(JSON.stringify(responseBody));
            response.end();
        });
    };
    return ServiceDispatcher;
}());
exports.ServiceDispatcher = ServiceDispatcher;
//# sourceMappingURL=ServiceDispatcher.js.map