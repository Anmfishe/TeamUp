import {Dispatcher} from "./Dispatcher";
import {RequestMethod} from "./RequestMethod";

export class ExampleDispatcher implements Dispatcher
{
    dispatch(requestMethod : RequestMethod) : Object
    {
        return { hello : "world" };
    }
}
