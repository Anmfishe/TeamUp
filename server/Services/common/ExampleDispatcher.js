"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExampleDispatcher = (function (_super) {
    __extends(ExampleDispatcher, _super);
    function ExampleDispatcher() {
        _super.apply(this, arguments);
    }
    ExampleDispatcher.prototype.dispatch = function (requestMethod) {
        return { info: "example" };
    };
    return ExampleDispatcher;
}(Dispatcher));
exports.ExampleDispatcher = ExampleDispatcher;
//# sourceMappingURL=ExampleDispatcher.js.map