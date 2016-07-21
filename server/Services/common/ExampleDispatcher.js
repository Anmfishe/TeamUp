"use strict";
var ExampleDispatcher = (function () {
    function ExampleDispatcher() {
    }
    ExampleDispatcher.prototype.dispatch = function (requestMethod) {
        return { hello: "world" };
    };
    return ExampleDispatcher;
}());
exports.ExampleDispatcher = ExampleDispatcher;
//# sourceMappingURL=ExampleDispatcher.js.map