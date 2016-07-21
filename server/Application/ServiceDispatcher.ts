import {toRequestMethod, RequestMethod} from "../Services/common/RequestMethod";
import {IDispatcher} from "../Services/common/IDispatcher";
import {ExampleDispatcher} from "../Services/common/ExampleDispatcher";
import {IncomingMessage, ServerResponse} from "http";
import {DispatchGenerator} from "../Services/common/DispatchGenerator";
import {RequestUrl} from "../Services/common/RequestUrl";

export class ServiceDispatcher
{
    static dispatch(request : IncomingMessage, response : ServerResponse)
    {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');

        var headers = request.headers;
        var method : RequestMethod = toRequestMethod(request.method);
        var url : RequestUrl = new RequestUrl(request.url);
        var body = [];

        request.on('error', function (err) {
            console.error(err);
        }).on('data', function(bodyChunk : string) {
            body.push(bodyChunk);
        }).on('end', function (){

            response.on('error', function(err) {
                console.error(err);
            });

            var dispatcher : IDispatcher = DispatchGenerator.generate(headers, method, url);
            var responseBody : Object = dispatcher.dispatch(method);

            response.write(JSON.stringify(responseBody));
            response.end();

        });
    }
}

