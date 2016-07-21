"use strict";
var ExampleDispatcher_1 = require("./ExampleDispatcher");
var DispatchGenerator = (function () {
    function DispatchGenerator() {
    }
    DispatchGenerator.generate = function (headers, method, url) {
        return new ExampleDispatcher_1.ExampleDispatcher();
    };
    return DispatchGenerator;
}());
exports.DispatchGenerator = DispatchGenerator;
//# sourceMappingURL=DispatchGenerator.js.map