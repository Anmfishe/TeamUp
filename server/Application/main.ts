
import * as http from "http";
import {ServiceDispatcher} from "./ServiceDispatcher";
import {IncomingMessage, ServerResponse} from "http";

var server = http.createServer();
server.on("request", function (request : IncomingMessage, response : ServerResponse) {
    ServiceDispatcher.dispatch(request, response);
}).listen(8080);