import {IDispatcher} from "./IDispatcher";
import {ExampleDispatcher} from "./ExampleDispatcher";
import {RequestMethod} from "./RequestMethod";
import {RequestUrl} from "./RequestUrl";

export class DispatchGenerator
{
    static generate( headers : any, method : RequestMethod, url : RequestUrl) : IDispatcher
    {
        return new ExampleDispatcher();
    }
}