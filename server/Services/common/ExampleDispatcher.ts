import {IDispatcher} from "./IDispatcher";
import {RequestMethod} from "./RequestMethod";

export class ExampleDispatcher implements IDispatcher
{
    dispatch(requestMethod : RequestMethod) : Object
    {
        return { hello : "world" };
    }
}
