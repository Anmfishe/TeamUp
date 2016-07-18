import {toRequestMethod, RequestMethod} from "../Services/common/RequestMethod";
import {Dispatcher} from "../Services/common/Dispatcher";
import {ExampleDispatcher} from "../Services/common/ExampleDispatcher";

export class ServiceDispatcher
{
    static dispatch(request /*: IncomingMessage*/, response /*: ServerResponse*/)
    {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');

        var headers = request.headers;
        var method = request.method;
        var url = request.url;
        var body = [];

        request.on('error', function (err) {
            console.error(err);
        }).on('data', function(bodyChunk : string) {
            body.push(bodyChunk);
        }).on('end', function (){

            response.on('error', function(err) {
                console.error(err);
            });

            var rm : RequestMethod = toRequestMethod(method);
            var dispatcher : Dispatcher = new ExampleDispatcher();
            var responseBody : Object = dispatcher.dispatch(rm);

            response.write(JSON.stringify(responseBody));
            response.end();

        });
    }
}

