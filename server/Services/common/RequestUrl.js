"use strict";
var main_1 = require("../../Application/main");
var RequestUrl = (function () {
    function RequestUrl(baseUrl) {
        this.id = "0000000000000000";
        var elements = baseUrl.split("/");
        // validate url length
        if (elements.length == 0 || elements.length > 3) {
            throw new Error("Given url is invalid");
        }
        // validate service
        if (!main_1.Application.services.hasOwnProperty(elements[1])) {
            throw new Error(elements[1] + " is not a service");
        }
        this.serviceName = elements[1];
        // validate optional id
        if (elements.length == 3) {
            if (elements[2].length != 16 /*TODO: !IdHelper.validate(elements[1])*/) {
                throw new Error("Given url is invalid");
            }
            this.id = elements[2];
        }
    }
    return RequestUrl;
}());
exports.RequestUrl = RequestUrl;
//# sourceMappingURL=RequestUrl.js.map