import {Dispatcher} from "./Dispatcher";
import {RequestMethod} from "./RequestMethod";

export class ExampleDispatcher extends Dispatcher
{
    dispatch(requestMethod : RequestMethod) : Object
    {
        return { info : "example" };
    }
}
