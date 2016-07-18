"use strict";
(function (RequestMethod) {
    RequestMethod[RequestMethod["PUT"] = 0] = "PUT";
    RequestMethod[RequestMethod["POST"] = 1] = "POST";
    RequestMethod[RequestMethod["GET"] = 2] = "GET";
    RequestMethod[RequestMethod["DELETE"] = 3] = "DELETE";
    RequestMethod[RequestMethod["UNKNOWN"] = 4] = "UNKNOWN"; // unknown
})(exports.RequestMethod || (exports.RequestMethod = {}));
var RequestMethod = exports.RequestMethod;
function toRequestMethod(method) {
    switch (method) {
        case "PUT":
            return RequestMethod.PUT;
        case "POST":
            return RequestMethod.POST;
        case "GET":
            return RequestMethod.GET;
        case "DELETE":
            return RequestMethod.DELETE;
        default:
            return RequestMethod.UNKNOWN;
    }
}
exports.toRequestMethod = toRequestMethod;
//# sourceMappingURL=RequestMethod.js.map