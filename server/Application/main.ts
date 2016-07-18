
import * as http from "http";
import {ServiceDispatcher} from "./ServiceDispatcher";

var server = http.createServer();
server.on("request", function (request, response) {
    ServiceDispatcher.dispatch(request, response);
}).listen(8080);

